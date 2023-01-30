const http=require('http');
const server =http.createServer((req,res)=>{
     console.log(req.url,req.method,req.headers);
     
     if(req.url==='/')
     {
        res.write("<h1>LocalHost Index</h1>");
        res.end();
     }
     if(req.url === 'hakkimizda')
     {
        res.write("<h1>LocalHost Hakkımızda</h1>");
        res.end();
     }
     //process.exit();
});
server.listen(3000);

