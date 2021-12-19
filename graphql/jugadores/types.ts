import { gql } from "apollo-server-express";

const typeJugadores = gql`
    type Jugador{
        _id: ID!,
        nombre: String!,
        apellido: String!,
        puntaje: String!
    }   

    type Query{
        Jugadores:[Jugador]
    }

    type Mutation{
        crearJugador(
            nombre: String!,
            apellido: String!,
            puntaje: String!
        ):Jugador
    }

`;


export { typeJugadores }