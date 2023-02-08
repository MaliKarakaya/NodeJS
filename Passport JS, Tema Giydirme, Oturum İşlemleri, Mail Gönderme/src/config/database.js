const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology:true,
    
          
})
   .then(()=>console.log("DataBase Active..."))
   .catch(hata=>console.log("DataBase Error "+hata))