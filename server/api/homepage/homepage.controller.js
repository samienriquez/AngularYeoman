'use strict';

var _ = require('lodash');
var Homepage = require('./homepage.model');

// Get list of homepages
exports.index = function(req, res) {
  Homepage.find(function (err, homepages) {
    if(err) { return handleError(res, err); }
    return res.json(200, homepages);
  });
};

// Get a single homepage
exports.show = function(req, res) {
  Homepage.findById(req.params.id, function (err, homepage) {
    if(err) { return handleError(res, err); }
    if(!homepage) { return res.send(404); }
    return res.json(homepage);
  });
};

// Creates a new homepage in the DB.
exports.create = function(req, res) {
  Homepage.create(req.body, function(err, homepage) {
    if(err) { return handleError(res, err); }
    return res.json(201, homepage);
  });
};

// Updates an existing homepage in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Homepage.findById(req.params.id, function (err, homepage) {
    if (err) { return handleError(res, err); }
    if(!homepage) { return res.send(404); }
    var updated = _.merge(homepage, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, homepage);
    });
  });
};

// Deletes a homepage from the DB.
exports.destroy = function(req, res) {
  Homepage.findById(req.params.id, function (err, homepage) {
    if(err) { return handleError(res, err); }
    if(!homepage) { return res.send(404); }
    homepage.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}