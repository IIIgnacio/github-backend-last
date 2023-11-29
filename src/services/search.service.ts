import { Search } from "../models/Search";
import { ResponseI } from "../utils/Response.interface";


export async function getSearchService(): Promise<ResponseI> {
  console.log('ea')
  try {
    const search = await Search.find();
    console.log(search);
    if (!search) {
      return {
        status: 404,
        message: "No se encontraron resultados",
      };
    }
    const getSearch = await Search.findOne();
    return {
      status: 200,
      result: getSearch,
    };
  } catch (error) {
    console.log(error);
    return {
      status: 500,
      result: error,
    };
  }
}




export async function postSearchService(body: {
  body: any;
}): Promise<ResponseI> {
   const search = await Search.find();
   if (!search) {
     return {
      status: 404,
       message: "No se podido crear con resultados",
     };
  }
  const postSearch = await Search.create(body);
  return {
    status: 200,
    result: postSearch,
  };
}




export default async function deletedSearchService(
  id: number
): Promise<ResponseI> {
  const search = await Search.findOne({ where: { id } });
  if (!search) {
    return {
      status: 404,
      message: "No se podido borrar el resultado",
    };
  }
  const searchDeleted = await Search.deleteOne({ where: { id } });
  return {
    status: 204,
    result: searchDeleted,
  };
}

export async function updateSearchService(id: number): Promise<ResponseI> {
  const search = await Search.findOne();
  if (!search) {
    return {
      status: 404,
      message: "Se ah actualizado el resultado",
    };
  }
  const searchUpdated = await Search.updateOne();
  return {
    status: 200,
    result: searchUpdated,
  };
}
