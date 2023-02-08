const dotenv = require('dotenv').config();

const express = require('express');
const app = express();

const session = require('express-session');
const flash = require('connect-flash');

const passportt = require('passport');


//tempLate engine ayarları
const ejs = require('ejs');
const expressLayout = require('express-ejs-layouts');
const path =require('path');
const { Store } = require('express-session');
const passport = require('passport');
app.use(express.static('public'));
app.use(expressLayout);
app.set('view engine','ejs');
app.set('views',path.resolve(__dirname,'./src/views'));

//DB bağlantısı
require('./src/config/database'); 
const MongoDBStore = require('connect-mongodb-session')(session);
const sessionStore = new MongoDBStore({
    uri:process.env.MONGODB_CONNECTION_STRING,
    collection:'sessionlar'
});


//routerlar include edilir
const authRouter = require('./src/routers/aut_routers');
const yonetimRouter = require('./src/routers/yonetim_router');

//session ve flash message
app.use(session({
    secret : process.env.SESSION_SECRET,
    resave:false,
    saveUninitialized:false,
    cookie:{
        maxAge:1000*60*60*24
    },
    store:sessionStore
}));

app.use(flash());


app.use((req,res,next)=>{
    res.locals.validation_error = req.flash('validation_error');
    res.locals.success_message=req.flash('success_message');
    res.locals.email = req.flash('email');
    res.locals.ad = req.flash('ad');
    res.locals.soyad= req.flash('soyad');
    res.locals.sifre= req.flash('sifre');
    res.locals.resifre= req.flash('resifre');
    res.locals.login_error = req.flash('error');

    next();
});

app.use(passportt.initialize());
app.use(passportt.session());


//formdan gelen değerlerin okunabilmesi için
app.use(express.urlencoded({extended:true}));



let sayac=0;

app.get('/',(req,res)=>{
    if(req.session.sayac)
    {
        req.session.sayac++;
    }
    else
    {
        req.session.sayac=1;
    }
    res.json({mesaj:"Merhaba",sayacım:sayac,kullanici:req.user});
});



app.use('/',authRouter);
app.use('/yonetim',yonetimRouter);

app.listen(process.env.PORT,()=>{
    console.log(`server ${process.env.PORT} portundan ayaklandı `);
});