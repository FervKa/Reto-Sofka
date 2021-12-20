import { culturaModel } from "../../models/preguntas-cultura";

const resolverCultura = {
  Query: {
    Culturas: async (parent, args) => {
      const culturas = await culturaModel.find();
      return culturas;
    },
  },
};

export { resolverCultura };
