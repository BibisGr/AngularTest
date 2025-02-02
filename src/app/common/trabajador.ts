import { Persona } from "./persona";

export class Trabajador {
    persona: Persona;
    profesion: string;

    constructor(persona: Persona, profesion: string){
        this.persona = persona;
        this.profesion = profesion;
    }

}

