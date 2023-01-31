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

   


});