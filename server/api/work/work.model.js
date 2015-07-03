'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var WorkSchema = new Schema({
  title: String,
  description: String,
  image: String
});

module.exports = mongoose.model('Work', WorkSchema);