const {validationResult} = require('express-validator');
const passport = require('passport');
const User = require('../model/user_model');
const passportt  = require('passport'); 
require('../config/passport_local')(passport);


const LoginFormunuGoster = (req,res,next)=>{
    
    res.render('login',{layout:'./layout/aut_layout.ejs'});
}
const Login = (req,res,next)=>{
    const hatalar=validationResult(req);
    req.flash('email',req.body.email);
    req.flash('sifre',req.body.sifre);
    if(!hatalar.isEmpty())
    {
        console.log(hatalar);
        req.flash('validation_error',hatalar.array());
        console.log(req.body);
    }
    else
    {
        passport.authenticate('local',{
            successRedirect:'/yonetim',
            failureRedirect:'/login',
            failureFlash:true
        })(req,res,next);
        //res.render('login',{layout:'./layout/aut_layout.ejs'});
    }
}

const RegisterFormunuGoster =(req,res,next)=>{
    console.log(req.flash('validation_error'));
    res.render('register',{layout:'./layout/aut_layout.ejs'});
}

const Register =async (req,res,next)=>{
    
    const hatalar=validationResult(req);

    if(!hatalar.isEmpty())
    {
        console.log(hatalar);
       req.flash('validation_error',hatalar.array());
        
        req.flash('validation_error');
        req.flash('email',req.body.email);
        req.flash('ad',req.body.ad);
        req.flash('soyad',req.body.soyad);
        req.flash('sifre',req.body.sifre);
        req.flash('resifre',req.body.resifre);

        res.redirect('/register');
        //res.render('register',{layout:'./layout/aut_layout.ejs',hatalar:hataDizisi.array()});
    }
    else
    {
       try
       {
        const _user = await User.findOne({email:req.body.email});
        if(_user)
        {
            req.flash('validation_error',[{mas:"Bu mail kullanımda"}]);
            req.flash('email',req.body.email);
            req.flash('ad',req.body.ad);
            req.flash('soyad',req.body.soyad);
            req.flash('sifre',req.body.sifre);
            req.flash('resifre',req.body.resifre);
            res.redirect('/register');
        }
        else
        {
          const newUser = new User({
            email:req.body.email,
            ad:req.body.ad,
            soyad:req.body.soyad,
            sifre:req.body.sifre
          });
          await newUser.save();
          console.log("Kullanıcı kaydedildi");
          req.flash('success_message',[{msg:'Giriş Yapabilirsiniz'}])
          res.redirect('/login');
        }
       } 
       catch (err) 
       {
        
       }
    }
    console.log(req.body);
   
}


const ForgetPasswordFormunuGoster = (req,res,next)=>{
    res.render('forget_password',{layout:'./layout/aut_layout.ejs'});

}

const ForgetPassword = (req,res,next)=>{
    console.log(req.body);
    res.render('forget_password',{layout:'./layout/aut_layout.ejs'});

}

/*const logoutt = (req,res,next) =>{
   req.logout();
   req.session.destroy((error)=>{
      res.clearCooki('connect.sid');
      res.redirect('/login');
   });
   
}*/
const logoutt = (req,res,next) =>{
    req.logout(error => {
       if(error) {
          return next(error);
       }
       req.session.destroy((error) => {
          if(error) {
             return next(error);
          }
          res.clearCookie('connect.sid');
          //req.flash('success_message',[{msg:'Başarıyla çıkış yapıldı'}]);
          res.render('login',{layout:'./layout/aut_layout.ejs',success_message:[{msg:'başarıyla çıkış yapıldı'}]})
          //res.redirect('/login');
         // res.send('Çıkış yapıldı')
       });
    });
 }  
 



module.exports = {
    LoginFormunuGoster,
    RegisterFormunuGoster,
    ForgetPasswordFormunuGoster,
    Register,
    Login,
    ForgetPassword,
    logoutt
}