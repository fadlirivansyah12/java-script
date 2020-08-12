//=====soal!!=====

/*sebuah pabrik busa memberi upah lembur kepada karyawan yang bekerja 
lebih dari 40 jam perminggu. tarif upah lembur perjam adalah 2 kali tarif biasa
diketahui tarif biasa 50.000 perjam. Buatlah program yang akan menghitung 
upah total yang di terimah karyawan.  */

function Karyawan(jumlahkaryawan,jumlahjam){
    var jumlahkaryawan;
    var jumlahjam;
    var tarifbiasa=50000;
    var tariflembur=100000;        //tarif lembur 100.000 karena 2 kali tarif biasa.
    var kerja=40;                  // jumlah jam biasa.
    
    lembur = kerja * tarifbiasa;
    jamlembur= jumlahjam * tariflembur;
    hasil=jamlembur + lembur;
    hasil= hasil * jumlahkaryawan;
    console.log(hasil);
}
Karyawan(1,2)                      //input jumlah karyawan dan jumlah jam.