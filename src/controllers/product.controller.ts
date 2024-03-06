import { Request, Response } from "express";
import ProductModel from "../models/store/product.model";
import { custonRequest } from "../middleware/validateJWT";

// Trae todos los usuarios
export const getAllProducts = async (req: Request, resp: Response) => {
  try {
    // Busca todos los users
    const products = await ProductModel.find().populate({
      path: "users",
      select: "firstName,lastName,email, documentNumber",
    });
    resp.json({
      ok: true,
      products,
    });
  } catch (error) {
    resp.status(400).json({
      ok: false,
      msg: "Error al traer los productos",
    });
  }
};

// Crea un nuevo usuario

export const createProduct = async (req: custonRequest, resp: Response) => {
  const { body } = req;
  const id = req._id;
  try {
    const newProduct = new ProductModel({ usuario: id, ...body });
    const createdProduct = await newProduct.save();

    resp.status(200).json({
      ok: true,
      msg: "producto creado",
      user: createdProduct,
    });
  } catch (error) {
    resp.status(400).json({
      ok: false,
      msg: "Error al crear el producto",
    });
  }
};

// Trae un solo usuario

// export const getOneProduct = async (req: Request, resp: Response) => {
//   try {
//     const id = req.params.id;
//     // Busca todos los userz
//     const user = await ProductModel.findById({ _id: id });
//     resp.json({
//       ok: true,
//       user,
//     });
//   } catch (error) {
//     resp.status(400).json({
//       ok: false,
//       msg: "Error al consultar el usuarios",
//     });
//   }
// };

// Actualiza un usuario
// export const updateProduct = async (req: Request, resp: Response) => {
//   try {
//     const id = req.params.id;
//     const { body } = req;
//     const productUpdate = await ProductModel.findByIdAndUpdate(id, body, {
//       new: true,
//     });

//     resp.json({
//       ok: true,
//       customer: productUpdate,
//     });
//   } catch (error) {
//     resp.status(400).json({
//       ok: false,
//       msg: "Error al actualizar el usuarios",
//     });
//   }
// };

// Cambia de estado el usuario True/False
// export const statusChangeCustomer = async (req: Request, resp: Response) => {
//   try {
//     const id = req.params.id;
//     const userUpdateStatus = await ProductModel.findByIdAndUpdate(id, {
//       new: true,
//     });
//     resp.json({
//       ok: true,
//       user: userUpdateStatus,
//     });
//   } catch (error) {
//     resp.status(400).json({
//       ok: false,
//       msg: "Error al cambiar el estado del usuarios",
//     });
//   }
// };
export { ProductModel };
