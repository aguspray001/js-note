function Mahasiswa(nama, energy) {
  //   let this = Object.create(Mahasiswa.prototype);
  this.nama = nama;
  this.energy = energy;
  //   return this;
}

Mahasiswa.prototype.makan = function (porsi) {
  this.energy += porsi;
  return `Halo ${this.nama}, selamat makan`;
};

Mahasiswa.prototype.main = function (jam) {
    this.energy -= jam;
    return `Halo ${this.nama}, selamat main`;
  };

let sandhika = new Mahasiswa("shandika", 10)

// prototype => parent kelas yang digunakan secara tidak langsung sebagai pewarisan