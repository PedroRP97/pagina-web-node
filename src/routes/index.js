const express = require('express');
const router = express.Router();



router.get('/', (req, res)=>{
    //res.sendFile(dir.join(__dirname, 'views/index.html'));//__dirname: da la direccion de este archivo y llamamos el html
    res.render('index.html', {title: 'FIRST APP WEB'});
});

router.get('/contact', (req, res)=>{
    //res.sendFile(dir.join(__dirname, 'views/index.html'));//__dirname: da la direccion de este archivo y llamamos el html
    res.render('contact.html', {title: 'PAGE CONTACT'});
});



module.exports = router;