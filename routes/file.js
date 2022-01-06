const express = require('express');
const router = express.Router();
const FileController = require('../controllers/file');

// Get AWS pre-signed url for the file upload.

router.post('/pre-signed-url', FileController.getPreSignedUrl);

module.exports = router;
