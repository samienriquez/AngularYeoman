/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');


var azure = require('azure-storage');
var retryOperations = new azure.ExponentialRetryPolicyFilter();
var blobSvc = azure.createBlobService().withFilter(retryOperations);
blobSvc.createContainerIfNotExists('images', {publicAccessLevel: 'blob'}, function(error, result, response) {
  if (!error) {
    console.log(result);
    console.log(response);
  } else {
    console.log('error creating azure blob container ', error);
  }
  });
//^^^AZURE CONFIG

var createAzureBlob = function(imageName, localPath,cb){
  blobSvc.createBlockBlobFromLocalFile('images', imageName, localPath, function(error, result, response) {
    if (!error) {
      console.log('file uploaded');
      cb();
    } else {
      console.log('error on image upload is ', error);
      return error;
    }
  });
}

var uploadImage = function(req, res, imageName, cb) {
  var localPath = 'packages/theme/public/assets/img/uploads/' + imageName;
  var localPreviewPath = 'packages/theme/public/assets/img/uploads/preview_'+imageName;
  //createAzureBlob(imageName, localPath,cb);
  createAzureBlob('preview_'+imageName, localPreviewPath,cb);
};

// ****** MULTER CONFIG
var multer = require('multer');
var work_controller = require('./api/work/work.controller');
var fs = require('fs');

module.exports = function(app) {
  var fileTooLarge = false;
  app.post('/api/works/uploads', multer({
    dest: 'packages/theme/public/assets/img/uploads/',
    limits: {
      fileSize: 500000
    },
    rename: function (fieldname, filename, req, res) {
      var new_name = req.body.name;
      return new_name;
    },
    onFileSizeLimit: function (file) {
      fileTooLarge = true;
    },
    onFileUploadStart: function (file) {
      fileTooLarge = false;
      console.log(file.originalname + ' is starting ...');
    },
    onFileUploadComplete: function (file, req, res) {
      console.log(file.name + ' uploaded to  ' + file.path);
      var newFileName = req.files.file[0].name;
      var easyimg = require('easyimage');
      
      if(!fileTooLarge) {
        easyimg.rescrop({
          src: "packages/theme/public/assets/img/uploads/"+newFileName,
          dst: "packages/theme/public/assets/img/uploads/preview_"+newFileName,
          width: 600, 
          height:600,
          fill: true,
        }).then(
          function(image) {
            console.log('Resized and cropped: ' + image.width + ' x ' + image.height);
            uploadImage(req, res, newFileName, function() {
              file.path = 'http://sami915.blob.core.windows.net/images/preview_' + newFileName;
              //file param is actually an object with the path as a property
              res.send(file);
              //delete file from local uploads folder
              fs.unlink('packages/theme/public/assets/img/uploads/' + newFileName);
            });

          },
          function (err) {
            console.log(err);
          }
        );
      } else {
        fs.unlink('packages/theme/public/assets/img/uploads/' + newFileName);
        res.json({
          uploadError: 'Upload failed. File must be less than 500 KB'
        });
      }
    }
  }), function(req, res) {
      
  });

  // Insert routes below
  app.use('/api/homepages', require('./api/homepage'));
  app.use('/api/works', require('./api/work'));
  app.use('/api/things', require('./api/thing'));
  
  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendfile(app.get('appPath') + '/index.html');
    });
};
