"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// User
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const checkValidator_1 = require("../middleware/checkValidator");
const validateJWT_1 = __importDefault(require("../middleware/validateJWT"));
const customers_controller_1 = require("../controllers/customers.controller");
const route = (0, express_1.Router)();
route.post("/", validateJWT_1.default, [
    (0, express_validator_1.check)("firstName", "El campo Nombres es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("lastName", "El campo Apellidos es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("email", "El campo Email es obligatorio").not().isEmpty().isEmail(),
    (0, express_validator_1.check)("documentType", "El campo Tipo de documento es obligatorio")
        .not()
        .isEmpty(),
    (0, express_validator_1.check)("documentNumber", "El campo Documento es obligatorio")
        .not()
        .isEmpty(),
    (0, express_validator_1.check)("country", "El campo Pais es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("city", "El campo Ciudad es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("address", "El campo Direccion es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("typeUser", "El campo Tipo de usuario es obligatorio")
        .not()
        .isEmpty(),
    checkValidator_1.checkValidator,
], customers_controller_1.createCustomer);
route.get("/", validateJWT_1.default, customers_controller_1.getAllCustomers);
route.get("/:id", validateJWT_1.default, customers_controller_1.getOneCustomer);
route.put("/:id", validateJWT_1.default, customers_controller_1.updateCustomer);
route.delete("/:id", validateJWT_1.default, customers_controller_1.statusChangeCustomer);
exports.default = route;
//# sourceMappingURL=customers.route.js.map