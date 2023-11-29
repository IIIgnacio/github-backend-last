import { Request, Response } from "express";
import deletedSearchService from "../services/search.service";


export default async function DeletedSearchController(req: Request, res: Response)  {
   const { params } = req;
  
    try { 
      const { status, message, result } = await deletedSearchService(Number(params.id));
      res.status(201).json({ mensaje: 'Datos borrados correctamente', datos: result });
      return res.status(status).json({ message, result });
    } catch (error) {
      return res.status(500).json(error);
    }
  };
