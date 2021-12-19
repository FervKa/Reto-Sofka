import { matematicaModel } from "../../models/preguntas-matematicas";

const resolversMatematias = {
  Query: {
    Matematicas: async (parent, args) => {
      const matematicas = await matematicaModel.find();
      return matematicas;
    },
  },
};

export { resolversMatematias };
