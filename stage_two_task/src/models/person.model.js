import { model, Schema } from "mongoose";

const personSchema = new Schema(
  {
    name: { type: String, required: true },
  },
  { timestamps: true }
);

const Person = model("Person", personSchema);

export default Person;
