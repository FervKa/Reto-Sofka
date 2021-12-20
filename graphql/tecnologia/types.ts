import { gql } from "apollo-server-express";

const typeTechs = gql`
  type Tecnologia {
    _id: ID!
    pregunta: String,
    respuesta_correcta: String,
    respuesta_ncrr1: String,
    respuesta_ncrr2: String,
    respuesta_ncrr3: String,
  }

  type Query {
    Tecnologias: [Tecnologia]
  }
`;

export { typeTechs };
