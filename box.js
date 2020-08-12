//soal!!

/*pak andi memiliki sebuah 3 box yang berbeda. box 1 memiliki sisi 10cm, 
box 2 memiliki sisi 15cm , dan box ketiga memiliki sisi 17cm. pak andi 
bingung menghitung semua sisi yang di di gabungkan menjadi satu dari 
ketiga box tersebut. buatlah sebuah program menghitung semua sisi dari
ketiga box tersebut.*/
   
          //rumus = s x s x s                     

//cara menghitung semua box

  var box1=10;
  var box2=15;
  var box3=17;  
  hasil1 = box1 * box1 * box1;
  hasil2 = box2 * box2 * box2;
  hasil3 = box3 * box3 * box3;
  hasil= hasil1 + hasil2 + hasil3;
    console.log((hasil3)+" jumlah seluruh sisi dari ketiga box tersebut");
     
 
//cara menghitung setiap box 1,2,dan 3 
  
  function box(box){
     var box;
     switch (box){
         case 1:                            //box1
             box1=10;
             hasil= box1 * box1 * box1;
             console.log(hasil);
             break;
         case 2:                            //box2
             box2=15;
             hasil= box2 * box2 * box2;
             console.log(hasil);
             break;
         case 3:                            //box3
             box3=17;
             hasil= box3 * box3 * box3;
             console.log(hasil);
             break;
     }
  }
  box(2)                                 //input box