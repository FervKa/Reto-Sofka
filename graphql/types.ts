import { gql } from "apollo-server-express";

const typeDefs = gql`
    type Jugador{
        _id: ID!,
        nombre: String!,
        apellido: String!,
        puntaje: String!
    }   

    type Query{
        Jugadores:[Jugador]
    }

`;



export { typeDefs }