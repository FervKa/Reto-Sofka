import { resolverScience } from "./ciencias/resolvers";
import { resolversCine } from "./cine/resolvers";
import { resolversJugadores } from "./jugadores/resolversJugadores";
import { resolversMatematias } from "./matematicas/resolversMatematicas";
import { resolversTecnologias } from "./tecnologia/resolvers";

export const resolvers = [
  resolversJugadores,
  resolversMatematias,
  resolverScience,
  resolversTecnologias,
  resolversCine,
];
