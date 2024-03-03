import { Request, Response } from "express";
import CustomerModel from "../models/customer.model";

// Trae todos los usuarios
export const getAllCustomers = async (req: Request, resp: Response) => {
  try {
    // Busca todos los users
    const customers = await CustomerModel.find();
    resp.json({
      ok: true,
      customers,
    });
  } catch (error) {
    resp.status(400).json({
      ok: false,
      msg: "Error al traer los usuarios",
    });
  }
};

// Crea un nuevo usuario
export const createCustomer = async (req: Request, resp: Response) => {
  try {
    const { body } = req;
    const newUser = new CustomerModel(body);
    const createdUser = await newUser.save();

    resp.status(200).json({
      ok: true,
      msg: "Usuario creado",
      user: createdUser,
    });
  } catch (error) {
    resp.status(400).json({
      ok: false,
      msg: "Error al crear el usuario",
    });
  }
};

// Trae un solo usuario
export const getOneCustomer = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    // Busca todos los userz
    const user = await CustomerModel.findById({ _id: id });
    resp.json({
      ok: true,
      user,
    });
  } catch (error) {
    resp.status(400).json({
      ok: false,
      msg: "Error al consultar el usuarios",
    });
  }
};

// Actualiza un usuario
export const updateCustomer = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    const { body } = req;
    const customerUpdate = await CustomerModel.findByIdAndUpdate(id, body, {
      new: true,
    });

    resp.json({
      ok: true,
      customer: customerUpdate,
    });
  } catch (error) {
    resp.status(400).json({
      ok: false,
      msg: "Error al actualizar el usuarios",
    });
  }
};

// Cambia de estado el usuario True/False
export const statusChangeCustomer = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    const userUpdateStatus = await CustomerModel.findByIdAndUpdate(id, {
      new: true,
    });
    resp.json({
      ok: true,
      user: userUpdateStatus,
    });
  } catch (error) {
    resp.status(400).json({
      ok: false,
      msg: "Error al cambiar el estado del usuarios",
    });
  }
};
export { CustomerModel };
