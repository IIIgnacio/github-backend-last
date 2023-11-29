import { Request, Response } from "express";
import { updateSearchService } from "../services/search.service";


export default async function UpdateSearchController(req: Request, res: Response)  {
  const { params } = req;

    try {
      const { status, message, result } = await updateSearchService(Number(params.id)); 
      res.status(201).json({ mensaje: 'Datos actualizados correctamente', datos: result });
      return res.status(status).json({ message, result });
    } catch (error) {
      return res.status(500).json(error);
    }
  };
