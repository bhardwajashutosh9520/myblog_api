const FileService = require('../services/file');

class FileController {
  static async getPreSignedUrl(req, res) {
    try {
      const fileName = req.body.fileName;
      const directory = req.body.directory;
      console.log('fileName-----', fileName, directory, req.body);
      console.log('come in  file controller');
      const url = await FileService.getPreSignedUrl(directory, fileName);
      return res.send({ url });
    } catch (err) {
      return err;
    }
  }
}

module.exports = FileController;
