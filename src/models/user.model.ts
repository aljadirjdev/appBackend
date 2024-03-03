import { Model, Schema, model } from "mongoose";

const UserSchema = new Schema({
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  rol: { type: String, require: true },
  type: { type: String, require: true },
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
