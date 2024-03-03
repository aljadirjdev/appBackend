"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
const validateJWT = (req, resp, next) => {
    const token = req.header("x-token");
    console.log(token);
    if (!token) {
        return resp.status(401).json({
            ok: false,
            msg: "No hay token en la peticion",
        });
    }
    try {
        const { _id } = jwt.verify(token, process.env.JWT_SECRET);
        req._id = _id;
        next();
    }
    catch (error) {
        return resp.status(401).json({
            ok: false,
            msg: "No hay token",
        });
    }
};
exports.default = validateJWT;
//# sourceMappingURL=validateJWT.js.map