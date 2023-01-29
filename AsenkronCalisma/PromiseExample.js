console.log("Başladı");
console.log("Bitti");

function getUser(id){
    return new Promise((resolve,reject)=>{
        console.log(id+" İdli User Getiriliyor");
        setTimeout(() => {
            resolve({id:id,ad:"Mali"})
        }, 1500);
    });
}
function getCourse(userName){
    return new Promise((resolve,reject)=>{
            console.log(userName + " kişinin kursları");
        setTimeout(() => {
            resolve(['java','C','JavaScript'])
        }, 2000);
              
    });
}
function getComments(courseName)
{
    return new Promise((resolve,reject)=>{
        console.log(courseName + " isimli kursun yorumları getiriliyor");
        setTimeout(() => {
            resolve("harika bir kurs");
        }, 2000);
    });
}
getUser(123)
.then(userObj=>getCourse(userObj.ad)).then(kursDizisi=>getComments(kursDizisi[0]))
.then(yorum=> console.log(yorum));