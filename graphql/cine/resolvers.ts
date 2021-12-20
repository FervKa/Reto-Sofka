import { cineModel } from "../../models/preguntas-cine";

const resolversCine = {
  Query: {
    Cines: async (parent, args) => {
      const cines = await cineModel.find();
      return cines;
    },
  },
};

export { resolversCine };
