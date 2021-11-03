function Mahasiswa(nama, energy) {
  this.nama = nama;
  this.energy = energy;
  this.makan = function (porsi) {
    this.energy += porsi;
    console.log(`halo ${this.nama}, selamat makan!`);
  };
  this.main = function (jam) {
    this.energy -= jam;
    console.log(`halo ${this.nama}, selamat bermain!`);
  };
}

let sandhika = new Mahasiswa("sandhika", 10);

// pada constructor function sudah tidak perlu deklarasi variable object, langsung pake this,
// dan harus pakai keyword new saat instansiasi
