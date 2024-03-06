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
exports.newToken = exports.login = void 0;
const user_model_1 = __importDefault(require("../../models/user.model"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jwt_1 = __importDefault(require("../../helpers/jwt"));
const login = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const userLogin = yield user_model_1.default.findOne({ email });
        if (!userLogin) {
            return resp.status(401).json({
                ok: false,
                msg: "Credenciales no validas",
            });
        }
        // Validar password
        const validatePassword = bcryptjs_1.default.compareSync(password, userLogin.password);
        if (!validatePassword) {
            return resp.status(401).json({
                ok: false,
                msg: "Usuario y contraseña incorrecto",
            });
        }
        // generate token
        const token = yield (0, jwt_1.default)(userLogin._id, userLogin.email);
        resp.status(200).json({ ok: true, user: userLogin, token });
    }
    catch (error) {
        resp.status(400).json({
            ok: false,
            error,
            msg: "Pongase en contacto con el admin",
        });
    }
});
exports.login = login;
const newToken = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req._id;
    if (typeof id === "undefined") {
        throw new Error("No existe id");
    }
    const user = yield user_model_1.default.findById(id);
    // Generate token
    const token = yield (0, jwt_1.default)(id.toString());
    try {
        resp.json({
            ok: true,
            token,
            user,
        });
    }
    catch (error) {
        resp.status(401).json({
            ok: false,
            error,
            msg: "Comuniquese con el administrador",
        });
    }
});
exports.newToken = newToken;
//# sourceMappingURL=auth.controller.js.map