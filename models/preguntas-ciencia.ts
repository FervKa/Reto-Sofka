import mongoose from "mongoose";

const { Schema, model } = mongoose;

interface Science {
  pregunta: string;
  respuesta_correcta: string;
  respuesta_ncrr1: string;
  respuesta_ncrr2: string;
  respuesta_ncrr3: string;
}

const scienceSchema = new Schema<Science>({
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

const scienceModel = model("Science", scienceSchema, "Preguntas-ciencia");

export { scienceModel };
