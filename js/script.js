var vreme = 10;

if(vreme < 10){
    console.log('Dobro jutro!');
} else if(vreme > 12 && vreme < 16) {
    console.log("Vreme je za caj!");
}
else{
    console.log("Dobar dan!");
}

var dan = 5;

switch(dan){
    case 5:
        console.log("petak");
        break;
    case 6:
        console.log("subota");
        break;
    case 0:
        console.log("nedelja");
        break;
    default:
        console.log("radni dan");
}

for(var i = 0; i < 10; i++){
    console.log("i je " + i);
}

for(let i = 1; i < 20; i++){
    if(i == 5){
        continue;
    }
    if(i == 16){
        break;
    }
}

var x = 3;
var y= -4;
var z = x-y;

if((x+y) > 0){
    console.log("Zbir prve dve je pozitivan broj");
} else{
    console.log("Zbir prve dve je negativan broj");
}

if((x+z) > 15 && y < 0){
    console.log("Proizvod prve i trece je veci od 15 i druga varijable je negativna");
} else if((x+z) > 15 || y > 0){
    console.log("Proizvod prve i trece je broj veci od 15 ili je druga varijabla pozitivna");
}


//provera vrednosti x po zadatim parametrima
switch(x){
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("Zadata vrednost je izmedju 1 i 5 i zadata vrednost je " + x);
        break;
    case 8:
    case 9:
    case 10:
        console.log("Zadata vrednost je izmedju 8 i 10");
    default:
        console.log("Zadata vrednost nije u navedenom opsegu");
}


x=-7;
y=1;
while(x+y < 0){
   y++;
   console.log(x+y);
}

//ispis brojva deljivih sa 2
for(var i = 0; i < 11; i++){
    if(i%2==0){
        console.log(i);
    }
}


//ispis elemenata niza
var niz = ["saab", "volvo", "mercedes"];

for(let i = 0; i < niz.length; i++){
    console.log(niz[i]);
}

//provera da li se u nizu nalazi red 'volvo'
for(let i = 0; i < niz.length; i++){
    if(niz[i] == 'volvo'){
       break;
    }
    console.log(niz[i]);
}

//ispis brojeva deljivih sa 3
for(var i = 0; i <= 20; i++){
    if(i%3==0){
        console.log(i);
    }
}

//izracunavanje srednje vrednosti niza
var nizBrojeva = [1,2,3,4,5,6];
var srednjaVr = 0;
var zbir = 0;

for(var i = 0; i < nizBrojeva.length; i++){
    zbir+=nizBrojeva[i];
}
srednjaVr = zbir/nizBrojeva.length;
console.log(srednjaVr);

//provera da li niz sadrzi broj 5
for(var i = 0; i < nizBrojeva.length; i++){
    if(nizBrojeva[i] == 5){
        console.log("Niz sadrzi broj 5");
    }
}


//provera simetricnosti niza
for(var i = 0; i < nizBrojeva.length/2; i++){
        if(nizBrojeva[i] != nizBrojeva[nizBrojeva.length - i - 1]){
            console.log("Niz nije simetrican");
            break;
        } else{
            console.log("Niz je simetrican");
        }
}

//pronalazak najveceg decimalnog broja u nizu
var niz_decimalnih = [0.1, 0.02, 0.003, 0.001];
var najveci = niz_decimalnih[0];

for(var i in niz_decimalnih){
    if(niz_decimalnih[i] > najveci){
        najveci = niz_decimalnih[i];
    }
}

console.log("Najveci element u nizu je: " + najveci);


//pronalazak najveceh decimalnog broja u nizu
var najmanji = niz_decimalnih[0];

for(var i in niz_decimalnih){
    if(niz_decimalnih[i] < najmanji){
        najmanji = niz_decimalnih[i];
    }
}

console.log("Najmanji element u nizu je: " + najmanji);

//odredjivanje broja nula u redu niza
var m = [ [1,2,0,3],
            [0,2,0,3],
            [3,4,5,7],
            [5,0,0,9]];

var brojac = 0;

for(var i = 0; i < m.length;i++){
    for(var j = 0; j < m[0].length; j++){
        if(m[i][j] === 0){
            brojac++;
        }
    }
    console.log("Broj nula u redu " + i + " je " + brojac);
    brojac = 0;
}

//odredjivanje najveceg broja na glavnoj dijagonali niza
var najveci = m[0][0];

for(var i = 0; i < m.length;i++){
    for(var j = 0; j < m[i].length; j++){
        if(i === j){
            if(m[i][j] > najveci){
                najveci = m[i][j];
            }
        }
    }
}

console.log("Najveci broj na glavnoj dijagonali niza je: " + najveci);

//kreiranje matrice
var matrica = [];
var kol = 3;
var vrsta = 3;

for(var i = 0; i < vrsta; i++){
    matrica[i] = [];
    for(var j = 0; j < kol; j++){
        matrica[i][j] = j+1;
    }
}
console.log(matrica);

//spajanje dva niza
var vocke1 = ["banana", "kruska", "jabuka"];
var vocke2 = ["tresnja", "sljiva", "jagoda"];
var sveVocke = vocke1.slice();

for(var i = 0; i < vocke2.length; i++){
    sveVocke.push(vocke2[i]);
}

console.log(vocke1);

//spajanje niza bez duplikata
var vocke1 = ["banana", "kruska", "jabuka", "sljiva"];
var vocke2 = ["tresnja", "sljiva", "jagoda", "kupina", "malina"];
var sveVocke = vocke1.slice();

for(var i in vocke2){
    if(!sveVocke.includes(vocke2[i])){
        sveVocke.push(vocke2[i]);
    }
}

//kreiranje dva niza, benzin i dizel 
//i dodavanje elemenata na osnovu drugih vrednosti

var automobili = [ ["mercedes", "b"], ["opel", "d"], 
["toyota", "d"], ["bmw", "b"], ["volvo", "d"]];
var dizel = [];
var benzin = [];

for (var i in automobili){
    if(automobili[i][1] == 'b'){
        benzin.push(automobili[i][0]);
    } else{
        dizel.push(automobili[i][0]);
    }
}

// Dat je spisak zaposlenih i njihove godine u sledecem obliku:
var zaposleni = [
    ["pera", "jova", "marko"],
    [28,      31,     19]
  ];

  // Ispisati svakog zaposlenog i koliko svaki zaposleni ima godina
  for(var i in zaposleni){
      console.log("Zaposleni: " + zaposleni[0][i] + ", godine: " + zaposleni[1][i]);
  }

  // U spisku zaposlenih naci koliko jova ima godina
  for(var i in zaposleni){
      if(zaposleni[0][i] == 'jova'){
          console.log("Jova ima " + zaposleni[1][i]);
      }
  }

  // Naci srednju vrednost godina zaposlenih
  var zbir = 0;
  var srVrednost = 0;
  for(var i in zaposleni[1]){
    zbir += zaposleni[1][i];
  }
  console.log(zbir);
  srVrednost = zbir/zaposleni[1].length;

//izracunati i podesiti plate ostalih zaposlenih tako da:
// tehnicar ima 70% plate inzenjera
// doktor ima platu tehnicara + pola plate inzenjera
var zaposleni = [
    ["pera",      "jova",     "marko"],
    [28,          31,         39],
    ["inzenjer",  "tehnicar", "doktor"],
    [700,         0,        0]
  ];

var plataInzenjera = 0;
for(var i = 0; i < zaposleni[2].length; i++){
    if(zaposleni[2][i] == 'inzenjer'){
        plataInzenjera = zaposleni[3][i];
    }
}

var plataTehnicara = plataInzenjera *0.7;
var plataDoktora = plataTehnicara + plataInzenjera/2;
for(var i = 0; i < zaposleni[2].length; i++){
    if(zaposleni[2][i] == 'tehnicar'){
        zaposleni[2][i] = plataTehnicara;
    }
    if(zaposleni[2][i] == 'doktor'){
        zaposleni[2][i] = plataDoktora;
    }
}




//funkcije


var korisnici = [];

function podeli(args){
    var podaci = args.split("|");
    korisnici.push(podaci);
}

podeli('marko|markovic');
podeli('pera|peric');


function ispisiKorisnike(korisnici){
    for(var i = 0; i < korisnici.length; i++){
        document.write("Korisnik: <br>")
            document.write("Korisnicko ime: " + korisnici[i][0] +"<br>");
            document.write("Lozinka je: " + korisnici[i][1] + "<br><br>");
    }
}

ispisiKorisnike(korisnici);