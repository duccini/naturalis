const dotenv = require('dotenv');
dotenv.config({ path: './config.env'});

const mongoose = require('mongoose');

const app = require('./app');

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

const mongoDBOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
}

mongoose.connect(DB, mongoDBOptions).then(() => console.log('DB connect success!'));

const port = process.env.PORT || 3000;
app.listen(port, () => {  
  console.log(`App running on port ${port}...`)
});

