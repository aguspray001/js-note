class Mahasiswa{
    constructor(nama, energy){
        this.nama = nama;
        this.energy = energy;
    }

    makan(porsi){
        this.energy+=porsi;
        return `Halo ${this.nama}, selamat makan!`
    }

    main(jam){
        this.energy-=jam;
        return `Halo ${this.nama}, selamat main!`
    }

    tidur(jam){
        this.energy+=jam*2;
        return `Halo ${this.nama}, selamat tidur!`
    }
}