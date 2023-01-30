const express =require('express');
const app = express();

const kullanicilar=[
    {id:1,ad:'mali',yas:20},
    {id:2,ad:'recep',yas:21},
    {id:3,ad:'ismail',yas:22},
    {id:4,ad:'fatih',yas:23}

];


app.get('/',(req,res)=>{
    console.log("ana  sayfaya girildi");
    res.send("<h1>AnaSayfa</h1>")
});

app.get('/users',(req,res)=>{
    
  res.send(kullanicilar);
});
app.get('/user/id:',(req,res)=>{
    console.log(req.params);
  const bulunanuser =  kullanicilar.find(user =>user.id === parseInt(req.params.id));
  if(bulunanuser)
  {
    res.send(bulunanuser);
  }
  else 
  {
    res.status(404).send(req.params.id+" idili user bulunamadı");
  }
});

app.post('/users',(req,res)=>{
    const yeniKullanici={
        id:kullanicilar.length+1,
        ad:req.body.ad,
        yas:req.body.yas
        
    }
    kullanicilar.push(yeniKullanici);
    res.send(yeniKullanici);
});

app.listen(3000,()=>{console.log("server 3000 portunu dinliyor")});

