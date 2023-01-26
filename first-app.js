const myModule = require('./module-nedir');

function HiGive(){
    console.log("Merhaba Node Js");
   // console.log(window);
   globalThis.console.log("Bu yazı Global nesnesinden geldi");
}
HiGive();
console.log(myModule.ad);
myModule.ekle(5,25);
myModule.cikar(40,9);
console.log(myModule.personel);
