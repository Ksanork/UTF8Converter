var multer  =   require('multer');

export default class UploadService {
    constructor() {
        this.initMulter();
    }

    initMulter() {
        let storage =  multer.diskStorage({
            destination: (req, file, callback) => {
                callback(null, './uploads');
            },
            filename: (req, file, callback) => {
                callback(null, file.fieldname);
            }
        });

        this.upload = multer({ storage : storage}).single('textFile');
    }

    uploadFile(req, res) {
        console.log(req);
        this.upload(req, res,(err) => {
            if(err) {
                console.log(err);
                return res.end("Error uploading file.");
            }
            console.log("ok");
            res.end("File is uploaded");
        });
    }
}
