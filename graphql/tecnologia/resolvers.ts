import { tecnologiaModel } from "../../models/tecnologia"; 

const resolversTecnologias = {
  Query: {
    Tecnologias: async (parent, args) => {
      const tecnologias = await tecnologiaModel.find();
      return tecnologias;
    },
  },
};

export { resolversTecnologias };