const express = require('express');
const fileUpload = require('express-fileupload');
const fs = require('fs');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(fileUpload());
app.use(cors())

const path = require('path')
const dirPath = path.join(__dirname, 'uploads');


app.get('/file-get', (req, res)=>{
    fs.readdir(dirPath, (err, uploads)=>{
        uploads.forEach((uploads)=>{
            
        })
        return res.status(200).json({
            success: true,
            message: "upload file successfully created",
            data: uploads,
          });
    })
    
})

    // fs.readdir(dirPath, (err, uploads)=>{
    //     uploads.forEach((uploads)=>{
    //         console.log(uploads);
    //     })
    // })


app.listen(3200, ()=>console.log("server strated"));

app.post("/file-upload", (req, res)=>{
    console.log(Object.keys(req.files));
    Object.keys(req.files).map(key =>
        fs.writeFile(`./uploads/${req.files[key].name}`, req.files[key].data, ()=>{
            console.log(`${req.files[key].name} written Successfully`);
            
        })
        
    ) 
    return  res.redirect('http://127.0.0.1:5500/problem-one/index.html?files=');
})

