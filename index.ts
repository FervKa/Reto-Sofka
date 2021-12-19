import conectadBD from "./db/db";
/* import { jugadorModel } from "./models/jugador"; */
import { ApolloServer } from "apollo-server-express";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { typeDefs } from "./graphql/types";
import { matematicaModel } from "./models/preguntas-matematicas";
import { resolvers } from "./graphql/resolvers";

dotenv.config();

const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
});

const app = express();

app.use(express.json());

app.use(cors());

app.listen({ port: process.env.PORT || 4000 }, async () => {
  await server
    .start()
    .then(() => {
      console.log(`🚀  Server ready`);
    })
    .catch((e) => {
      console.log("No se pudo iniciar el servidor", e);
    });

  await conectadBD();
  server.applyMiddleware({ app });
  /* matematicaModel
    .create({
      pregunta: "Pregunta prueba",
      respuesta_correcta: "Holi",
      respuesta_ncrr1: "Nani",
      respuesta_ncrr2: "Omaw",
      respuesta_ncrr3: "awdawd",
    })
    .then((respuesta) => {
      console.log(respuesta);
    }); */
  /* matematicaModel.find().then((respuesta) => {
    console.log(respuesta);
  }); */
});
