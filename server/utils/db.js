const mongoose = require('mongoose');

const connect = () => mongoose.connect(
  process.env.MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  (err) => {
    if(err) {
      console.log('MongoDB Connect Error', err);
    } else {
      console.log('MongoDB Connected!');
    }
  }
)

module.exports = { connect };
