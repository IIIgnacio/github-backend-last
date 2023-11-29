import { Router } from "express";
import DeletedSearchController from "../controllers/DeleteSearchController";
import GetSearchController from "../controllers/GetSearchController"; 
import PostSearchController from "../controllers/PostSearchController";
import UpdateSearchController from "../controllers/UpdateSearchController";

const searchRouter = Router();

// Routes
  searchRouter.get("/", GetSearchController)
  searchRouter.post("/", PostSearchController)
  searchRouter.put("/:id", UpdateSearchController)
  searchRouter.delete("/:id", DeletedSearchController);

export default searchRouter;

