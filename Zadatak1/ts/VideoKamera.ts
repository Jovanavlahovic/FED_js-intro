/// <reference path="Kamera.ts" />

class VideoKamera extends Kamera{
    protected _videoCounter: number;
    constructor(megaPikseli: number, freeSpace: number, photoCounter: number){
        super(megaPikseli, freeSpace);
        this._videoCounter= 0;
    }

	public get videoCounter(): number {
		return this._videoCounter;
	}

	public set videoCounter(value: number) {
		this._videoCounter = value;
    }
    
    public snimaj(sekunde: number):boolean{
        if(this._freeSpace-(sekunde*this.megaPikseli) >=0){
            this._videoCounter++;
            this.freeSpace-= sekunde*this.megaPikseli;
            return true;
        } return false;
    }

}