const axios = require('axios');

const aramaYap = async(req,res)=>{ 
  
    const aranacakKelime = req.body.search;
    try
    {
     const blogAPI = await axios.get('https://emrealtunbilek.com/wp-json/wp/v2/posts?search='+aranacakKelime);
     console.log(blogAPI.data);
     res.render('./makaleler/index.ejs',{makaleler:blogAPI.data});
    }
    catch(hata)
    {
     console.log(hata.response.data);
     console.log(hata.response.status);
     console.log(hata.response.header);
     res.json({mesa:'hata Çıktı'});
    }
 
     
 }



const tumMakaleleriGetir = async(req,res)=>{ 

   try
   {
    const blogAPI = await axios.get('https://emrealtunbilek.com/wp-json/wp/v2/posts');
    console.log(blogAPI.data);
    res.render('./makaleler/index.ejs',{makaleler:blogAPI.data});
   }
   catch(hata)
   {
    console.log(hata.response.data);
    console.log(hata.response.status);
    console.log(hata.response.header);
    res.json({mesa:'hata Çıktı'});
   }

    
}

const tekMakaleGetir = async(req,res)=>{
    let makaleID = req.params.id;
    try
    {
    const tekmakale = await axios.get('https://emrealtunbilek.com/wp-json/wp/v2/posts/'+ makaleID);
    res.render('./makaleler/makale',{makale:tekmakale.data});
    }
    catch(hata)
    {
     console.log(hata.response.data);
     console.log(hata.response.status);
     console.log(hata.response.header);
     res.json({mesaj:'hata Çıktı'});
    }
 
}

module.exports = {
    tumMakaleleriGetir,
    tekMakaleGetir,
    aramaYap
}
