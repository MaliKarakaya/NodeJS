const os=require('os');
const fs =require('fs');
let freeRam =byteToGb(os.freemem);
let totalRam=byteToGb(os.totalmem());
let usedRam=totalRam-freeRam;

fs.writeFile('pc_info.txt',pcInfoShow(),(err)=>
 {
    if(err) console.log("dosya yazdırırken hata oluştu");
});

let cpuSayisi=os.cpus().length;
function byteToGb(toplamByte)
{
    return (toplamByte /1024/1024/1024).toFixed(2);
}
function pcInfoShow() {
    console.log('toplam ram:'+totalRam+ ' Kullanılan Ram '+usedRam+'  free Ram' +freeRam+'  cpu sayısı:'+cpuSayisi);
}
pcInfoShow();