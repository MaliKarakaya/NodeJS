//array destructuring
let name =['Mali','Karakaya'];
const ad=name[0];
const soyad=name[1];
console.log(ad+" "+soyad);

let [firstName,lastName]=name;
console.log(firstName+" "+lastName);

let [a,b] = 'Mali Karakaya'.split(' ');
console.log(a);
console.log(b);

let [ilk, ,son]=['sarı','mavi','beyaz'];
console.log(ilk+"   "+son);

let kisi={};
[kisi.ad,kisi.soyadi]='Mali Karakaya'.split(' ');
console.log(kisi);