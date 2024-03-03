import express, { Application, Request, Response } from "express";
import { dbConnection } from "./database/connection";
import customersRoute from "./routes/customers.route";
import userRoute from "./routes/users.route";
import authRoute from "./routes/auth/auth.route";

// import express, { Application } from "express";
class Server {
  private app: Application;
  private port: string;
  private apiPaths = {
    customer: "/api/v1/customers",
    user: "/api/v1/users",
    auth: "/api/v1/auth",
  };
  // Constructor
  constructor() {
    this.app = express();
    this.port = process.env.PORT || "3000";
    this.middleware();

    // LLamada a la conexion de base de dato
    dbConnection();
    // LLamada a las rutas
    this.route();
  }

  miPrimeraApi() {
    this.app.get("/", (req: Request, resp: Response) =>
      resp.status(200).json({ msg: "Informacion" })
    );
  }
  middleware() {
    this.app.use(express.json());
    this.miPrimeraApi();
    console.log("mi primera app");
  }

  route(): void {
    this.app.use(this.apiPaths.customer, customersRoute);
    this.app.use(this.apiPaths.user, userRoute);
    this.app.use(this.apiPaths.auth, authRoute);
  }

  // Function
  listen(): void {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo", this.port);
    });
  }
}
export default Server;
