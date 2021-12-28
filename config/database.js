const mongoose = require('mongoose');

class Database {
  static async connect(dbUrl = false) {
    try {
      if (process.env.NODE_ENV === 'development') {
        // mongoose.set('debug', true);
      }
      await mongoose.connect(dbUrl || process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('Database Connected at', { time: new Date() });
    } catch (err) {
      console.error(err);
    }
  }

  static async disconnect() {
    try {
      await mongoose.connection.close();
      console.info('Database Disconnected', { time: new Date() });
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = Database;
