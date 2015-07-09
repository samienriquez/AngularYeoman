'use strict';

var express = require('express');
var controller = require('./work.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

// ******** IMAGE UPLOAD API ********* //

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

// ******** AZURE CONFIG ******** //

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

// ******** MULTER CONFIG ******** //
var multer = require('multer');
var fs = require('fs');
var fileTooLarge = null;

router.post('/images', multer({
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

module.exports = router;