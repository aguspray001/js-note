// promise: object yang merepresentasikan keberhasilan atau
// kegagalan sebuah event yg async di masa yg akan datang

let ditepati = true;

const janji = new Promise((resolve, reject) => {
  if (ditepati) {
    setTimeout(() => {
      resolve("ditepati!");
    }, 2000);
  } else {
    setTimeout(() => {
      reject("tidak ditepati!");
    }, 2000);
  }
});


// eksekusi promise:

console.log("mulai!");
// console.log(janji); //pending, karena tidak ditangkap resolvenya oleh then.
// console.log(janji.then(res=>console.log(janji))); //pending, tunggu 2 detik baru kemudian resolve
janji
.finally(()=>console.log("promise selesai!")) //eksekusi setelah pending selesai, sebelum then dan catch
.then(res=>console.log(`OKE: ${res}`))
.catch(err=>console.log(`OKE: ${err}`))
console.log("selesai!");

