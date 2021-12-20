import { gql } from "apollo-server-express";

const typesCine = gql`

type Cine {
    _id: ID!
    pregunta: String,
    respuesta_correcta: String,
    respuesta_ncrr1: String,
    respuesta_ncrr2: String,
    respuesta_ncrr3: String,
}

type Query {
    Cines : [Cine]
}

`;

export {typesCine}