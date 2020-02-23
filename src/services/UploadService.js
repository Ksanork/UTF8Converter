var multer  =   require('multer');
import DebugLog from "../utils/DebugLog";

export default class UploadService {
    constructor() {
        this.initMulter();
    }

    initMulter() {
        let storage =  multer.diskStorage({
            destination: (req, file, callback) => {
                callback(null, global.config.upload.paths.upload_dir);
            },
            filename: (req, file, callback) => {
                callback(null, file.fieldname);
            }
        });

        this.upload = multer({ storage : storage}).single(global.config.upload.view.fieldName);
    }

    uploadFile(req, res) {
        this.upload(req, res,(err) => {
            if(err) {
                console.log(err);
                return res.end("Error uploading file.");
            }

            DebugLog.log("File is uploaded");
            res.end("File is uploaded");
        });
    }
}
