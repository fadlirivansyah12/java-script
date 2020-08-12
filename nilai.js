//soal!!

/*pak dudung ingin menentukan nilai siswa. jika nilai siswa di atas 60 maka dinyatakan 
lulus jika tidak maka siswa tersebut tidak lulus. jika nilai 85 sampai 95 
mendapatkan nilai A, nilai 80 sampai 85 mendapatkan nilai B. nilai 70 sampai 75 sama
dengan mendapatan nilai C. nilai 60 sampai 69 mendaptakan nilai D dan jika di bawah 60
maka akan mendapatkan nilai E. buatlah program menenetukan nilai siswa.*/

function nilai(nilaisiswa){
    var nilaisiswa;
    var nilai = ["A","B","C","D","E"];
    
      if (nilaisiswa >= 85 && nilaisiswa <=95){            
        console.log (nilai [0]+" Lulus");
    }else if (nilaisiswa >=80 && nilaisiswa <=85){
        console.log (nilai [1]+" lulus");
    }else if (nilaisiswa >=70 && nilaisiswa <=75){
        console.log (nilai [2]+" lulus");
    }else if (nilaisiswa >=60 && nilaisiswa <=69){
        console.log (nilai [3]+"  lulus");
    }else if (nilaisiswa < 60){                            
        console.log (nilai [4]+" tidak lulus");
    }
}
nilai(85);