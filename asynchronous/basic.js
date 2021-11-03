console.log("satu");
setTimeout(() => {
  console.log("dua");
}, 0);
console.log("tiga");

// output:
// "satu"
// "tiga"
// "dua"

// penjelasan:
// setTimeout merupakan webAPI sehingga saat diproses dalam v8 engine, d
// ia akan ditampung di dalam web API, kemudian ditampung di dalam callback queue,
// sebelum dieksekusi di stack.
