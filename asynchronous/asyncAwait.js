function cobaPromise() {
  return new Promise((resolve, reject) => {
    const timer = 3000;
    if (timer < 5000) {
      setTimeout(() => {
        resolve("promise berhasil!");
      }, timer);
    } else {
      reject("promise gagal");
    }
  });
}

async function cobaAsync() {
  try {
    const coba = await cobaPromise();
    console.log(coba)
  } catch (e) {
    console.error(e);
  }
}

// console.log("satu");
cobaAsync();
// console.log("tiga");
