"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const user_model_1 = __importDefault(require("../models/user.model"));
const createdUser = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const { email, password } = body;
        const exitsLogin = yield user_model_1.default.findOne({
            email: email,
        });
        // Valida si existe, y si lo esta lanza el error
        if (exitsLogin) {
            resp.status(409).json({
                ok: false,
                msg: `¡Error!  Usuario  ya esta creado`,
            });
        }
        const newUser = new user_model_1.default(Object.assign({}, body));
        const salt = bcryptjs_1.default.genSaltSync(10);
        newUser.password = bcryptjs_1.default.hashSync(password, salt);
        const userCreated = yield newUser.save();
        resp.status(200).json({
            ok: true,
            msg: "Usuario creado stisfactoriamente",
            userCreated,
        });
    }
    catch (error) {
        console.error(error);
        resp.status(400).json({
            ok: false,
            msg: "Error al crear el usuario, comuniquese con el administrador",
        });
    }
});
exports.default = createdUser;
//# sourceMappingURL=user.controller.js.map