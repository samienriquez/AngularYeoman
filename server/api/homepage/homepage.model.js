'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var HomepageSchema = new Schema({
  name: String,
  carrer: String,
  job: String,
  address: String,
  location: String,
  about: String,
  photo: String,
  gmail: String,
  facebook: String,
  twitter: String
});

module.exports = mongoose.model('Homepage', HomepageSchema);