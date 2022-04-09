const express = require('express');
const path = require('path');
const hoganMiddleware = require('hogan-middleware');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Milky-Way:deepak@reddwarf.ijtbn.mongodb.net/mercury?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('connected to mongoDB');
});

app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'mustache');
app.engine('mustache', hoganMiddleware.__express);
app.use(express.static(path.join(__dirname, 'public')));
const bodyParser = require('body-parser');

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

const indexRouter = require('./routes/index');

app.use('/', indexRouter);

app.listen(3000);
console.log('Server is running on http://localhost:3000');