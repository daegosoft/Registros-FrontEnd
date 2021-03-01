export class Registro {
    id: number;
    name : string;
    lastName: string;
    procesar: boolean;

    constructor(){
        this.id = 0;
        this.name = '';
        this.lastName = '';
        this.procesar = false;
    }
    /*constructor(nombre: string, lastName: string){
        this.id = 0;
        this.name = nombre;
        this.lastName = lastName;
        this.procesar = false;
    }*/
}
