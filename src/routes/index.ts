import { Router } from "express";
import searchRoute from "./search.routes";

const mainRouter = Router()

mainRouter.use('/search', searchRoute)

export default mainRouter
