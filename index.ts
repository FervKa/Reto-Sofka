import conectadBD from "./db/db";
/* import { jugadorModel } from "./models/jugador"; */
import { ApolloServer } from "apollo-server-express";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { typeDefs } from "./graphql/types";
import { matematicaModel } from "./models/preguntas-matematicas";
import { resolvers } from "./graphql/resolvers";
import { scienceModel } from "./models/preguntas-ciencia";

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
      pregunta: "Tengo 50 tapas, recojo otras 6 y doy 34",
      respuesta_correcta: "22",
      respuesta_ncrr1: "72",
      respuesta_ncrr2: "50",
      respuesta_ncrr3: "26",
    })
    .then((respuesta) => {
      console.log(respuesta);
    }); */
  /* matematicaModel.find().then((respuesta) => {
    console.log(respuesta);
  }); */

  /* scienceModel.create({
    pregunta: "¿En qué galaxia se encuentra la Tierra?",
    respuesta_correcta: "En la Vía Láctea.",
    respuesta_ncrr1:"En el Centurión de Orión.",
    respuesta_ncrr2: "En Andrómeda.",
    respuesta_ncrr3: "En Asgard."
  }) */
});
