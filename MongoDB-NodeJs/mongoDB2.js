const mongodb = require('mongodb');

const{MongoClient,ObjectID}=require('mongodb');



const databaseURL ='mongodb://localhost:27017';
const databaseName ='node-dersleri';

MongoClient.connect(databaseURL,{useUnifiedTopology:true,useNewUrlParser:true},(error,result)=>{

    if(error)
    {
        return console.log("DBye bağlanılmadı"+error);
    }
    console.log("DB ye bağlandı");
   const db= result.db(databaseName);

   const myID=new ObjectID();
   console.log(myID.id.length);
   console.log(myID.getTimestamp());

    db.collection('test').insertOne({
    _id:myID,
    ad: 'mali',
    updateID:myID
   }).then(sonuc=>console.log(sonuc.ops));

  db.collection('users').insertMany([
    {ad:"Mali",okul:"gedik"},
    {ad:"Mali",il:"istanbul"}
   ]).then(sonuc=>console.log(sonuc.ops)).catch(err=>console.log(err));

   db.collection('urunler').insertMany([
    {urunadi:'kalem',stok:5},
    {urunadi:'defter',stok:25},
    {urunadi:'silgi',stok:78}
   ]);


   
  
 



});