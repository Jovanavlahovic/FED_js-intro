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
var niz_decimalnih = [0.1, 0.001, 0.02, 0.003];
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

console.log("Najmanji element u nizu je: " + najmanji;
