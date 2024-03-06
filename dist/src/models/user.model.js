"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
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
const UserModel = (0, mongoose_1.model)("users", UserSchema);
exports.default = UserModel;
//# sourceMappingURL=user.model.js.map