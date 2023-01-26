const path=require('path');
const pathObject=path.parse(__dirname);
console.log(pathObject);

const fs=require('fs');
console.log();
fs.readdir('./',{withFileTypes:false},function(err,files){

    if(err)console.log("Hata cikti: "+err);
    console.log(files[0].isDirectory);
});