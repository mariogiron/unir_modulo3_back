const mongoose = require('mongoose');

const mongoUrl = 'mongodb://127.0.0.1/modulo4';

mongoose.connect(mongoUrl);

require('./models/post');