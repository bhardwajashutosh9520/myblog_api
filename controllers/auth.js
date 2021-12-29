const axios = require('axios');

class AuthController {
  static async sentOtp(req, res) {
    try {
      const email = req.body.email;
      const authParams = {
        scope: 'openid email profile',
        redirect_uri: process.env.AUTH0_REDIRECT_URI,
        response_type: 'token id_token',
        nonce: Math.random().toString(36).substring(8),
      };
      const verifyResp = await axios.post(
        `${process.env.AUTH0_DOMAIN}passwordless/start`,
        {
          client_id: process.env.AUTH0_CLIENT_ID,
          client_secret: process.env.AUTH0_SECRET,
          connection: 'email',
          email,
          send: 'code', // code for otp or link for sending a link
          authParams,
        },
      );
      return res.send({ status: verifyResp.status, data: verifyResp.data });
    } catch (error) {
      throw error;
    }
  }

  static async verifyOtp(req, res) {
    try {
      const email = req.body.email;
      const otp = req.body.otp;
      const auth0Result = await axios.post(
        `${process.env.AUTH0_DOMAIN}oauth/token`,
        {
          grant_type: 'http://auth0.com/oauth/grant-type/passwordless/otp',
          client_id: process.env.AUTH0_CLIENT_ID,
          client_secret: process.env.AUTH0_SECRET,
          username: email,
          otp: String(otp),
          realm: 'email',
          scope: 'openid',
        },
      );
      return res.send({ status: auth0Result.status, data: auth0Result.data });
    } catch (error) {
      throw error;
    }
  }

  static async getUserInfo(req, res) {
    try {
      const token = req.body.token;
      console.log('token enter---------', token);
      const auth0Result = await axios({
        method: 'GET',
        url: `${process.env.AUTH0_DOMAIN}userinfo`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.send({ status: auth0Result.status, data: auth0Result.data });
    } catch (error) {
      console.log('error.response.data---------', error.response);
      throw error;
    }
  }

  static async getTokenInfo(req, res) {
    try {
      const token = req.body.token;
      console.log('token enter---------', token);
      const auth0Result = await await axios({
        url: `${process.env.AUTH0_DOMAIN}tokeninfo`,
        method: 'POST',
        id_token: token,
      });
      return res.send({ status: auth0Result.status, data: auth0Result.data });
    } catch (error) {
      console.log('error.response.data---------', error.response);
      throw error;
    }
  }
}

module.exports = AuthController;
