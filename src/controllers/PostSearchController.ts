import { Request, Response } from "express"
import { postSearchService } from "../services/search.service";


export default async function PostSearchController(req: Request, res: Response)  {
    try {
      const { status, message, result } = await postSearchService(req.body);
      return res.status(status).json({ message, result });
    } catch (error) {
      console.error(error)
      return res.status(500).json(error);
    }
  };

