const mongodb = require('mongodb');

const MongoClient=mongodb.MongoClient;

const databaseURL ='mongodb://localhost:27017';
const databaseName ='node-dersleri';

MongoClient.connect(databaseURL,{useUnifiedTopology:true,useNewUrlParser:true},(error,result)=>{

    if(error)
    {
        return console.log("DBye bağlanılmadı"+error);
    }
    console.log("DB ye bağlandı");
   const db= result.db(databaseName);
   db.collection('users').insertOne({
    ad:'Mali',
    yas:20,
    erkekMi:true
   },(error,sonuc)=>{
    if(error)
    {
        console.log("veri eklenemedi"+error);
    }
    else
    {
        console.log("Veri eklendi"+sonuc.ops,sonuc.insertedCount);
    }
    
   });
       
   db.collection('users').insertOne({
    ad:'Ali',
    yas:20
   }).then(sonuc =>{
    console.log("Promise başarılı: ",sonuc.ops);
   }).catch(hata=>{
    console.log("Promis Hata:"+hata);
   });



});