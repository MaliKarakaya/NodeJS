const express = require('express');
const app = express();
const path = require('path');

const ejs = require('ejs');
const expressLayouts =require('express-ejs-layouts');


app.set('view engine','ejs');
app.set('views',path.resolve(__dirname,'yeni_default_view'))

app.use(expressLayouts);


app.get('/',(req,res)=>{


    //res.sendFile(path.resolve(__dirname,'index.html'));

    const kisilerDizisi =[
        {ad:"Mali",id:1},
        {ad:"Mali1",id:2},
        {ad:"Mali2",id:3},
        {ad:"Mali3",id:4},
    ];
    const dersAdi='Node.js';
    const yas = 20;
    const renkler=['kırmızı','sarı','mavi'];
    const size ="<h1 style='text-align: center;'>Site Başlığı</h1><p style='text-align: center;'>paragraf</p>";

    res.render('index',{
        kisiler:kisilerDizisi,
        ders:dersAdi,
        yas:yas,
        renkler,
        size
    })
});

app.listen(3000,()=>{
    console.log("3000 portundan server ayaklandı");
});