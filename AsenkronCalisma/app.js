const https=require('https');

https.get('https://restcountries.com/v3.1/name/turkey',(response)=>{
let data='';
response.on('data',chunk =>{
   //  console.log(chunk);
data=data+chunk;
});
         
response.on('end',()=>{
const jsonData=JSON.parse(data);
console.log(jsonData[0].timezones[0]);
});

});
