"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const connection_1 = require("./database/connection");
const customers_route_1 = __importDefault(require("./routes/customers.route"));
const users_route_1 = __importDefault(require("./routes/users.route"));
const auth_route_1 = __importDefault(require("./routes/auth/auth.route"));
// import express, { Application } from "express";
class Server {
    // Constructor
    constructor() {
        this.apiPaths = {
            customer: "/api/v1/customers",
            user: "/api/v1/users",
            auth: "/api/v1/auth",
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || "3000";
        this.middleware();
        // LLamada a la conexion de base de dato
        (0, connection_1.dbConnection)();
        // LLamada a las rutas
        this.route();
    }
    miPrimeraApi() {
        this.app.get("/", (req, resp) => resp.status(200).json({ msg: "Informacion" }));
    }
    middleware() {
        this.app.use(express_1.default.json());
        this.miPrimeraApi();
        console.log("mi primera app");
    }
    route() {
        this.app.use(this.apiPaths.customer, customers_route_1.default);
        this.app.use(this.apiPaths.user, users_route_1.default);
        this.app.use(this.apiPaths.auth, auth_route_1.default);
    }
    // Function
    listen() {
        this.app.listen(this.port, () => {
            console.log("Servidor corriendo", this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map