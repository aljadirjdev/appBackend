import { Request, Response } from "express";

import bcrypt from "bcryptjs";
import UserModel from "../models/user.model";

const createdUser = async (req: Request, resp: Response) => {
  try {
    const { body } = req;
    const { email, password } = body;

    const exitsLogin = await UserModel.findOne({
      email: email,
    });

    // Valida si existe, y si lo esta lanza el error
    if (exitsLogin) {
      resp.status(409).json({
        ok: false,
        msg: `¡Error!  Usuario  ya esta creado`,
      });
    }

    const newUser = new UserModel({
      ...body,
    });

    const salt = bcrypt.genSaltSync(10);
    newUser.password = bcrypt.hashSync(password, salt);

    const userCreated = await newUser.save();

    resp.status(200).json({
      ok: true,
      msg: "Usuario creado stisfactoriamente",
      userCreated,
    });
  } catch (error) {
    console.error(error);
    resp.status(400).json({
      ok: false,
      msg: "Error al crear el usuario, comuniquese con el administrador",
    });
  }
};

export default createdUser;
