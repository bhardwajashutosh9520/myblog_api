const mongoose = require('mongoose');

mongoose
  .connect(
    'mongodb+srv://ashutosh9520:abblogdb@cluster0.gaylg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  )
  .then(() => {
    console.log('connection is established.');
  })
  .catch((err) => {
    console.log('database connsection error-----', err);
  });
