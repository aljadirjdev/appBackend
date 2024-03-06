// User
import { Router } from "express";
import { check } from "express-validator";
import { checkValidator } from "../middleware/checkValidator";
import validateJWT from "../middleware/validateJWT";
import { createProduct } from "../controllers/product.controller";

const route = Router();
route.post(
  "/",
  validateJWT,
  [
    check("firstName", "El campo Nombres es obligatorio").not().isEmpty(),

    checkValidator,
  ],
  createProduct
);

// route.get("/", validateJWT, getAllProduct);
// route.get("/create", validateJWT, createProduct);
// route.get("/:id", validateJWT, getOneCustomer);
// route.put("/:id", validateJWT, updateCustomer);
// route.delete("/:id", validateJWT, statusChangeCustomer);

export default route;
