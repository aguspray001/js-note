const methodMahasiswa = {
  makan: function (porsi) {
    this.energy += porsi;
    console.log(`halo ${this.nama}, selamat makan!`);
  },
  main: function (jam) {
    this.energy -= jam;
    console.log(`halo ${this.nama}, selamat bermain!`);
  },
  tidur: function (jam) {
    this.energy += jam * 2;
    console.log(`halo ${this.nama}, selamat tidur!`);
  },
};

function Mahasiswa(nama, energy) {
  let mahasiswa = Object.create(methodMahasiswa); //mirip pewarisan/inheritance
  mahasiswa.nama = nama;
  mahasiswa.energy = energy;
  return mahasiswa; //return objectnya, soalnya fungsi
}

let sandhika = Mahasiswa("sandhika", 10);
