let kisi ={
    ad:{
        firstName:"Mali",
        lastName:"Karakaya",
    },
    sevdigiRenkler:["sarı","lacivert"],
    yas:20
};
const {
    ad:{
        firstName,lastName
    },
    sevdigiRenkler:[item1,item2],
    yas
}=kisi;
console.log(`${firstName} ${item2}`);

function kisiyiGoster(isim="Bilinmiyor",yas=0,boyu=180,sevdigiRenkler=[]) {
    
}
kisiyiGoster("Mali",undefined,undefined,['yesil','mavi']);

const parametreler = {
    isim: "Mali",
    sevdigiRenkler: ['yesil', 'mavi']

}
kisiyiGöster2(parametreler);
function kisiyiGöster2({isim="bilinmiyor",sevdigiRenkler=[],yas=0,boy=0}) {
    console.log(isim+" "+yas);
}