//Soal!!

/*suatu perusahaan memberikan biaya tunjangan anak, batas masksimal hanya 3 anak
saja. setiap anak mendapatkan tunjungan 10% dari gaji pokok. gaji pokok sebesar
Rp1.000.000 buatlah program menghitung tunjangan anak.*/

function input(jumlahanak){
    var jumlahanak;
    var maksimalanak = 3;                      //maksimal anak 3
    var gajipokok =1000000;                    // gajipokok Rp1.000.000
    var tunjangananak = 100000;                // mendapatkan 10% dari gaji pokok
    if(jumlahanak <= 3){
        total= jumlahanak * tunjangananak;
        total= total + gajipokok;
        console.log(total);
    }else{
        total= tunjangananak * maksimalanak;
        total= total + gajipokok;
        console.log(total);
    }
}
input(2)