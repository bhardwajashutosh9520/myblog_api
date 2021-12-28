const mongoose = require('mongoose');

mongoose
  .connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/abBlog', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('connection is established.', process.env.MONGODB_URI);
  })
  .catch((err) => {
    console.log('database connsection error-----', err);
  });
