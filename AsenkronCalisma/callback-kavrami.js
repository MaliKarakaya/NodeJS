console.log("Program Başladı");

getUser(12345,(userObject)=>{
    console.log("Getirilen user: "+userObject.ad);
getCourse(userObject.ad , (kursDizisi)=>{console.log("Kurs Dizisi: "+kursDizisi)
getComments(kursDizisi[0]);});

});


console.log("Program Bitti");

function getUser(id,callBack) {
    console.log(id+" idli user getiriliyor");
    setTimeout(()=>{
         
         callBack({id:id, ad:"Mali"});
        
    },1500);
}

function getCourse(userName,callBack)
{
    console.log(userName+" Kişisinin kursları getirelecek");
    setTimeout(()=>{
        callBack(['java','C','JavaScript','NodeJS','Android Java']);
        
    },2000);
}
function getComments(KursAdi)
{
    console.log(KursAdi+" isimli kursun yorumları getiriliyor");
    setTimeout(()=>{
        console.log("Harika Bir Kurs");
    },2000);
}