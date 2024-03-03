import { Model, Schema, model } from "mongoose";

interface detail {
  weight: string;
  measurement: string;
  price: number;
}

interface maker {
  name: String;
  nit: String;
  country: String;
  address: String;
  phone: String;
  zipCode: String;
}
interface reviews {
  msg: String;
  createAt: Date;
  punctuation: number;
}

interface product {
  nameProduct: string;
  descriptionProduct: "string";
  instruction: string;
  maker: maker;
  detail: detail;
  review: reviews;
}

const ProductSchema = new Schema({});
const StoreModel: Model<any> = model("products", ProductSchema);
export default StoreModel;
