import { jugadorModel } from "../models/jugador";

const resolvers = {
    Query: {
        Jugadores: async (parent, args) => {
            const jugadores = await jugadorModel.find();
            return jugadores;
        }
    },

    Mutation: {
        crearJugador: async (parent, args) => {
            const jugadorCreado = await jugadorModel.create({
                nombre: args.nombre,
                apellido: args.apellido,
                puntaje: args.puntaje,
            });
            return jugadorCreado;
        }
    }
}

export { resolvers }