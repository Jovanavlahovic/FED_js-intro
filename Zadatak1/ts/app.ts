/// <reference path="Kamera.ts" />

let k: Kamera = new Kamera(10,25);
console.log(k.freeSpace);
console.log(k.megaPikseli);
console.log(k.photoCounter);
console.log(k.slikaj(2));
console.log(k.slikaj(3));
console.log(k.slikaj(10));