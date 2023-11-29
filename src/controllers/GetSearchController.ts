import { Request, Response } from "express";
import { getSearchService } from "../services/search.service";

export default async function GetSearchController(_req: Request, res: Response) {
  
  try {
    console.log('We are Looking')
    const { status, message, result } = await getSearchService();
    return res.status(status).json({ message, result });
  } catch (error) {
    return res.status(500).json(error);
  }
}

