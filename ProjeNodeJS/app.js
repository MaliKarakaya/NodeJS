const express = require('express');
const exp = require('constants');
const https = require('https');

const app=express();
const port=3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.listen(port,function(){
    console.log("server is started at port "+port);
});

app.get("/",(req,res)=>{
    res.sendFile(__dirname+ "/index.html");
});

app.post("/",(req,res)=>{
  let id = (req.body.pokemon);
  let url="https://pokeapi.co/api/v2/pokemon/"+id;
  let pokeImg = "https://pokeres.bastionbot.org/images/pokemon/"+id;
   
  https.get(url,function (response) {
    var responseData ="";
    response.on("data",function(dataChunk) {
        responseData+=dataChunk ;  
     });

     response.on("end",function(){
        var pokeInfo = JSON.parse(responseData);
        var pokemonName=pokeInfo.name;
        res.write("<h1>Pokemonun Adi : "+pokemonName+"</h1>");
        res.write("<img src="+pokeImg+">");
        res.send();


     })
  });
});