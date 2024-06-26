// Import required modules
const express = require('express');
const router = express.Router();

const multer = require('multer');

// Configure Multer storage settings
const storage = multer.diskStorage({
    destination : (req,file,cb)=>{
        cb(null,'images/');
    },
    filename : (req,file,cb)=>{
        cb(null,file.originalname);
    }
});

// Configure Multer upload settings
const upload = multer({
    storage : storage,
    limits : {
        fileSize : 1024 * 1024 * 10
    },
    fileFilter : (req,file,cb)=>{
        if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg'){
            cb(null,true);
        }
        else{
            cb(null,false);
            return res.status(400).json({message: "File types allowed are .png, .jpg, .jpeg"});
        }
    }
});

// Route to handle file upload
router.post('/uploadfile', upload.single('file'), function(req,res){
    res.json({"filename":req.file.filename});
});

// Function to handle file download
const downloadFile = (req, res)=>{
    const filename = req.params.filename;
    const path = __basedir + "/images/";

    res.download(path+filename,(err)=>{
        if(err){
            res.status(500).send({message:'File cannot be downloaded'+err})
        }
    })
}

router.get('/files/:filename',downloadFile);
module.exports = router;