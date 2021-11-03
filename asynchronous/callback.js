console.log("mulai");
$.ajax({
  url: "data/mahasiswa.json",
  success: (mhs) => {
    mhs.forEach((m) => console.log(m));
  },
  error: (e) => {
    console.log(e.responseText);
  },
});
console.log("selesai");

// callback dalam asynchronous biasanya untuk menangkap pesan error dan data ketika sukses
