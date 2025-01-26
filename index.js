//Mengambil Element Pada HTML
const sc = document.getElementById("sc");
const mn = document.getElementById("mn");
const hr = document.getElementById("hr");

/*di set 6 karna satu putaran memiliki 360 derajat dan satuan waktu terbagi pada 60
60 menit untuk 1 jam dan 60 detik untuk untuk 1 menit ( atau 360/60 - 6 ) jadi setiap 
detik dan menit akan memutar jarum sebesar 6 derajat*/
const deg = 6;

//memanggil method setinterval untuk set berulang
setInterval(() =>{
    let day = new Date();
    let ms = day.getMilliseconds() * deg;
    /*Mengkonversi milidetik ke detik 1000 mili detik = 1 detik */
    let ss = day.getSeconds() * deg + ms / 1000;
    let mm = day.getMinutes() * deg ;

    /*Kenapa 30 ? karna setiap hari mewakili 12 jam , jadi 360 derajat / 12 jam = 30 
    untuk perputaran derajat */
    let hh = day.getHours() * 30;

    //memanggil fungsi hh,mm,ss untuk memutar jarum jam menggunakan transofrm style DOM
    hr.style.transform = `rotateZ(${hh}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;


})