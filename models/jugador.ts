import { Schema, model } from "mongoose";

interface Jugador {
    nombre: string;
    apellido: string;
    puntaje: string;
}


const jugadorSchema = new Schema<Jugador>({
    nombre: {
        type: String,
        required: true,
    },
    apellido: {
        type: String,
        required: true,
    },
    puntaje: {
        type: String,
        required: true,

    }
});


const jugadorModel = model("Jugador", jugadorSchema, "Jugadores");

export { jugadorModel };