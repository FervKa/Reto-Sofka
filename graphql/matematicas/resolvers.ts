import { preguntasModel } from "../../models/preguntas-matematicas"


const resolvers ={
    Query:{
        Matematicas: async (parents, args) =>{
            const matematicas = await preguntasModel.find();
            return matematicas;
        }
    }
}

export {resolvers}