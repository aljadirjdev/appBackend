"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
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
const UserModel = (0, mongoose_1.model)("users", UserSchema);
exports.default = UserModel;
//# sourceMappingURL=user.model.js.map