'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var HomepageSchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Homepage', HomepageSchema);