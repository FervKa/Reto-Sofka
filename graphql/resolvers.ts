import { resolverScience } from "./ciencias/resolvers";
import { resolversJugadores } from "./jugadores/resolversJugadores";
import { resolversMatematias } from "./matematicas/resolversMatematicas";

export const resolvers = [
  resolversJugadores,
  resolversMatematias,
  resolverScience,
];
