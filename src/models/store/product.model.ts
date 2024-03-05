import { Document, Model, Schema, Types, model } from "mongoose";

interface detailInterface {
  weight: string; //peso
  measurement: string; //medidas
  price: number; //precio
  stock: number;
}
// FABRICANTE
interface makerInterface {
  nameMaker: String;
  nit: String;
  country: String;
  address: String;
  phone: String;
  zipCode: String;
}

interface reviewsInterface {
  msg: String;
  createAt: Date;
  punctuation: number;
}

interface productInterface extends Document {
  nameProduct: string;
  descriptionProduct: "string";
  instruction: string;
  // Interfaces aplicadas
  detailInterface: detailInterface;
  makerInterface: makerInterface;
  reviewsInterface: reviewsInterface;
  usuario: Types.ObjectId;
}

const ProductSchema = new Schema<productInterface>({
  nameProduct: { type: String },
  descriptionProduct: { type: String },
  instruction: { type: String },
  detailInterface: {
    type: Object,
    require: true,
  },
  makerInterface: {
    type: Object,
    require: true,
  },
  reviewsInterface: {
    type: Object,
  },
  usuario: { type: Schema.Types.ObjectId, ref: "usuario" },
});
const StoreModel: Model<any> = model("products", ProductSchema);
export default StoreModel;
