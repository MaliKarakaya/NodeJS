const oturumAcilmis = function(req,res,nex){
    if(req.isAuthenticated())
    {
        return nex();
    }
    else
    {
        req.flash('error',['Lütfen oturum açın']);
        res.redirect('/login');
    }
}
const oturumAcilmamis = function(req,res,nex){
    if(!req.isAuthenticated())
    {
        return nex();
    }
    else
    {
        res.redirect('/yonetim');
    }
}
module.exports={
    oturumAcilmis,
    oturumAcilmamis
}