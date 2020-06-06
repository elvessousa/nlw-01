import express, { response } from "express";
import multer from "multer";
import { celebrate, Joi } from "celebrate";

import multerConfig from "./config/multer";
import PointsController from "./controllers/PointsController";
import ItemsController from "./controllers/ItemsController";

// Configs
const routes = express.Router();
const upload = multer(multerConfig);

// Controllers
// index, show, create, update, delete
const pointsController = new PointsController();
const itemsController = new ItemsController();

// List all items
routes.get("/items", itemsController.index);
// List all points
routes.get("/points", pointsController.index);
// List single point
routes.get("/points/:id", pointsController.show);

// Create a point
routes.post(
  "/points",
  upload.single("image"),
  celebrate(
    {
      body: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.number().required(),
        latitude: Joi.number().required(),
        longitude: Joi.number().required(),
        city: Joi.string().required(),
        uf: Joi.string().required().max(2),
        items: Joi.string().required(),
      }),
    },
    {
      abortEarly: false,
    }
  ),
  pointsController.create
);

export default routes;
