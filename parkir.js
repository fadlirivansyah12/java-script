//Soal!!

/*pak dani ingin menentukan biaya parkir yang dihitung berdasarkan lama
parkir. lama parkir dihitung dari selisih jam masuk dan jam keluar di input. Biaya
parkir 2 jam pertama yaitu 2.000 perjam, perjam berikutnya 500.*/

function parkir(lamaparkir){
    var lamaparkir;
    var tarifparkir=2000;                         //tarif parkir Rp2.000 
    var tarifberikut=500;                         //tarif berikut Rp500
    if (lamaparkir > 2){                          
     total = lamaparkir * tarifberikut;
     total = total - 1000;
     total = total + tarifparkir;
     console.log(total);
    }else{
        console.log(tarifparkir);
    }
}
parkir(5)                                          //input lama lama parkir