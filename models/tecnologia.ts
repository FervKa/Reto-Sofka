import mongoose from "mongoose";

const { Schema, model } = mongoose;

interface Tecnologia {
  pregunta: string;
  respuesta_correcta: string;
  respuesta_ncrr1: string;
  respuesta_ncrr2: string;
  respuesta_ncrr3: string;
}

const tecnologiaSchema = new Schema<Tecnologia>({
  pregunta: {
    type: String,
  },
  respuesta_correcta: {
    type: String,
  },
  respuesta_ncrr1: {
    type: String,
  },
  respuesta_ncrr2: {
    type: String,
  },
  respuesta_ncrr3: {
    type: String,
  },
});

const tecnologiaModel = model("Tecnologia", tecnologiaSchema, "Preguntas-tecnologia");

export { tecnologiaModel };
