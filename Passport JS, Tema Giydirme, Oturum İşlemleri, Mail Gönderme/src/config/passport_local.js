const LocalStrategy = require('passport-local').Strategy;
const User = require('../model/user_model');

module.exports = function(passport){
    const options = {
        usernameField:'email',
        passwordField:'sifre'
    };
    passport.use(new LocalStrategy(options,async(email,sifre,done)=>{


           try 
           {
         const _bulunanuser = await User.findOne({email:email});
               
             if(!_bulunanuser)
             {
                    return done(null,false,{message:'user bulunamadı'});
             }

           else if(_bulunanuser.sifre !== sifre)
             {
                    return done(null,false,{message:'sifre hatalı'});
             }
             else
             {
                return done(null,_bulunanuser);
             }
                
         
           } 
           catch (err)
           {
             return done(err);
           }

    }));

  passport.serializeUser(function(user,done){
    console.log("sessina kaydedildi "+user.id);
    done(null,user.id);
  });

  passport.deserializeUser(function(id,done){
    //console.log("sessina kaydedildi arandı ve bulundu "+user.id);
      User.findById(id,function(err,user){
        const yeniUser ={
            email:user.email,
            ad: user.ad,
            soyad:user.soyad
        }
        done(err,user);
      });
  });

}
