import express from "express";
import SwaggerUi from 'swagger-ui-express';

import { usersRoutes } from "./routes/users.routes";

const app = express();
import SwaggerJson from './swagger.json';

app.use(express.json());

app.use("/users", usersRoutes);
app.use("/api-docs", SwaggerUi.serve, SwaggerUi.setup(SwaggerJson));

export { app };
