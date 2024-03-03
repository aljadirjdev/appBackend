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
exports.CustomerModel = exports.statusChangeCustomer = exports.updateCustomer = exports.getOneCustomer = exports.createCustomer = exports.getAllCustomers = void 0;
const customer_model_1 = __importDefault(require("../models/customer.model"));
exports.CustomerModel = customer_model_1.default;
// Trae todos los usuarios
const getAllCustomers = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Busca todos los users
        const customers = yield customer_model_1.default.find();
        resp.json({
            ok: true,
            customers,
        });
    }
    catch (error) {
        resp.status(400).json({
            ok: false,
            msg: "Error al traer los usuarios",
        });
    }
});
exports.getAllCustomers = getAllCustomers;
// Crea un nuevo usuario
const createCustomer = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const newUser = new customer_model_1.default(body);
        const createdUser = yield newUser.save();
        resp.status(200).json({
            ok: true,
            msg: "Usuario creado",
            user: createdUser,
        });
    }
    catch (error) {
        resp.status(400).json({
            ok: false,
            msg: "Error al crear el usuario",
        });
    }
});
exports.createCustomer = createCustomer;
// Trae un solo usuario
const getOneCustomer = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        // Busca todos los userz
        const user = yield customer_model_1.default.findById({ _id: id });
        resp.json({
            ok: true,
            user,
        });
    }
    catch (error) {
        resp.status(400).json({
            ok: false,
            msg: "Error al consultar el usuarios",
        });
    }
});
exports.getOneCustomer = getOneCustomer;
// Actualiza un usuario
const updateCustomer = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const { body } = req;
        const customerUpdate = yield customer_model_1.default.findByIdAndUpdate(id, body, {
            new: true,
        });
        resp.json({
            ok: true,
            customer: customerUpdate,
        });
    }
    catch (error) {
        resp.status(400).json({
            ok: false,
            msg: "Error al actualizar el usuarios",
        });
    }
});
exports.updateCustomer = updateCustomer;
// Cambia de estado el usuario True/False
const statusChangeCustomer = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const userUpdateStatus = yield customer_model_1.default.findByIdAndUpdate(id, {
            new: true,
        });
        resp.json({
            ok: true,
            user: userUpdateStatus,
        });
    }
    catch (error) {
        resp.status(400).json({
            ok: false,
            msg: "Error al cambiar el estado del usuarios",
        });
    }
});
exports.statusChangeCustomer = statusChangeCustomer;
//# sourceMappingURL=customers.controller.js.map