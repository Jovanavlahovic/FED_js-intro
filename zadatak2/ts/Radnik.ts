class Radnik{
    protected _ime: string;
    protected _godine: number;
    protected _zanimanje: string;
    protected _osnovica: number;

	protected constructor(ime: string, godine: number, zanimanje: string, osnovica: number) {
        this._ime = ime;
        this._godine = godine;
        this._zanimanje = zanimanje;
        this._osnovica = osnovica;
    }
    
    public get ime():string{
        return this._ime;
    }

    public set ime(value: string){
        this._ime = value;
    }
    public get godine():number{
        return this._godine;
    }

    public set godine(value: number){
        this._godine = value;
    }
    
    public get zanimanje():string{
        return this._zanimanje;
    }

    public set zanimanje(value: string){
        this._zanimanje = value;
    }
    
    public get osnovica():number{
        return this._osnovica;
    }

    public set osnovica(value: number){
        this._osnovica= value;
    }
    
    public get plata():number{
        return this._osnovica;
    }
}