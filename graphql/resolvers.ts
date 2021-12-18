import { jugadorModel } from "../models/jugador";

const resolvers = {
    Query: {
        Jugadores: async (parent, args) => {
            const jugadores = await jugadorModel.find();
            return jugadores;
        }
    }


    /* Mutation:{

    } */
}

export { resolvers }