"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
const generateToken = (_id, email = "", expiresIn = process.env.JWT_EXPIRE_IN, jwtSecret = process.env.JWT_SECRET) => {
    return new Promise((resolve, reject) => {
        const payload = {
            _id,
            email,
        };
        jwt.sign(payload, jwtSecret, {
            expiresIn: expiresIn,
        }, (error, toke) => {
            if (error) {
                console.log(error);
                reject("No se pudo generar el token");
            }
            else
                resolve(toke);
        });
    });
};
exports.default = generateToken;
//# sourceMappingURL=jwt.js.map