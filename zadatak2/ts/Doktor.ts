/// <reference path="Radnik.ts" />

class Doktor extends Radnik{
    constructor(ime: string, godine: number, zanimanje: string, osnovica: number){
        super(ime, godine, zanimanje, osnovica);
    }

    public get plata():number{
        return this._osnovica*1.13;
    }
}