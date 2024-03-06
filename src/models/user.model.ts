import { Model, Schema, model } from "mongoose";

const UserSchema = new Schema({
  firstName: { type: String, require: true },
  lastName: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  documentType: { type: String, require: true },
  documentNumber: { type: String, require: true, uniqued: true },
  rol: { type: String, require: true },
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

const UserModel: Model<any> = model("users", UserSchema);
export default UserModel;
