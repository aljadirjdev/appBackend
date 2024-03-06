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
const product_controller_1 = require("../controllers/product.controller");
const route = (0, express_1.Router)();
route.post("/", validateJWT_1.default, [
    (0, express_validator_1.check)("firstName", "El campo Nombres es obligatorio").not().isEmpty(),
    checkValidator_1.checkValidator,
], product_controller_1.createProduct);
// route.get("/", validateJWT, getAllProduct);
// route.get("/create", validateJWT, createProduct);
// route.get("/:id", validateJWT, getOneCustomer);
// route.put("/:id", validateJWT, updateCustomer);
// route.delete("/:id", validateJWT, statusChangeCustomer);
exports.default = route;
//# sourceMappingURL=products.route.js.map