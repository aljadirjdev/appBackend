import { Model, Schema, model } from "mongoose";

const CustomerSchema = new Schema({
  firstName: { type: String, require: true },
  lastName: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  documentType: { type: String, require: true },
  documentNumber: { type: String, require: true, uniqued: true },
  country: { type: String, require: true },
  city: { type: String, require: true },
  address: { type: String, require: true },
  typeUser: { type: String, require: true },
  status: { type: Boolean, require: true },

  createAt: {
    type: Date,
    default: Date.now(),
  },
  updateAt: {
    type: Date,
    default: Date.now(),
  },
});
const CustomerModel: Model<any> = model("customers", CustomerSchema);
export default CustomerModel;
