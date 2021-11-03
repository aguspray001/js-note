let mahasiswa = {
    nama: "shandika galih",
    energy: 10,
    makan: function(porsi){
        this.energy = this.energy+porsi;
        console.log(`halo ${this.nama}, selamat makan!`);
    }
}

// kalau di dalam object pakai keyword this untuk reference property-nya

// problem: tidak efektif untuk object yang banyak, karena harus deklarasi terus menerus