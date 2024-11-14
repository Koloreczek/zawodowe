function AktywujPole(main) {
   var pole1 = document.getElementById('main1');
   var pole2 = document.getElementById('main2');
   var pole3 = document.getElementById('main3');
   if (main ==="klient"){
    pole1.style.display = "block";
    pole2.style.display = "none";
    pole3.style.display = "none";
   }

   if (main ==="adres"){
    pole1.style.display = "none";
    pole2.style.display = "block";
    pole3.style.display = "none";
   }
   if (main ==="kontakt"){
    pole1.style.display = "none";
    pole2.style.display = "none";
    pole3.style.display = "block";
   }

}
var progres = 4;
function zaktualizujPasekPostepu(){
    var postep = document.getElementById("postep");
    if(progres<100){
        progres += 12;
    }
    if(progres>100){
        progres = 100;
    }
    postep.style.width = progres + "%";
}

function pobierzdane(){
    imie = document.getElementById("imie").value;
    nazwisko = document.getElementById("nazwisko").value;
    data = document.getElementById("data").value;
    ulica = document.getElementById("ulica").value;
    numer = document.getElementById("numer").value;
    miasto = document.getElementById("miasto").value;
    telefon = document.getElementById("telefon").value;
    rodo = document.getElementById("rodo").value;
    console.log(imie, nazwisko, data, ulica, numer, miasto, telefon, rodo);
}
