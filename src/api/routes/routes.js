let express = require('express');

import UploadService from "../../services/UploadService"

const router = express.Router();
let uploadService = new UploadService();

router.post('/upload', (req, res) => {
    console.log("upload")
    uploadService.uploadFile(req, res);
});

export default router;