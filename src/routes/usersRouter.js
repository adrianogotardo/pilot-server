import { Router } from "express";
import * as schemaValidationMiddleware from '../middlewares/schemaValidationMiddleware.js';
import * as usersSchemas from "../schemas/usersSchema.js";
import * as usersController from "../controllers/usersController.js";

const usersRouter = Router();
const PATH = "/users";

usersRouter.post(`${PATH}/register`,
    (req, res, next) => schemaValidationMiddleware.test(req, res, next, usersSchemas.register),
    usersController.registerNewUser
)

usersRouter.post(`${PATH}/login`,
    (req, res, next) => schemaValidationMiddleware.test(req, res, next, usersSchemas.loginCredentials),
    usersController.logUser
)
export default usersRouter;