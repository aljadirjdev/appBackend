"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const checkValidator_1 = require("../middleware/checkValidator");
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const validateJWT_1 = __importDefault(require("../middleware/validateJWT"));
const route = (0, express_1.Router)();
route.post("/", validateJWT_1.default, [
    (0, express_validator_1.check)("password", "El campo  es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("email", "El campo Email es obligatorio").not().isEmpty().isEmail(),
    (0, express_validator_1.check)("typeUser", "El campo Tipo de usuario es obligatorio")
        .not()
        .isEmpty(),
    (0, express_validator_1.check)("status", "El campo Statu es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("rol", "El campo Pais es obligatorio").not().isEmpty(),
    checkValidator_1.checkValidator,
], user_controller_1.default);
exports.default = route;
//# sourceMappingURL=users.route.js.map