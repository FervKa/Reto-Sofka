import { scienceModel } from "../../models/preguntas-ciencia";

const resolverScience = {
  Query: {
    Sciences: async (parent, args) => {
      const science = await scienceModel.find();
      return science;
    },
  },
};

export { resolverScience };
