let express = require('express');

import UploadService from "../../services/UploadService"
import DebugLog from "../../utils/DebugLog";

const router = express.Router();

router.post('/upload', (req, res) => {
    DebugLog.log("/upload");
    let uploadService = new UploadService();

    uploadService.uploadFile(req, res);
});

export default router;