//fetch
// axios

import axios from "axios";

// se pone el localhost para no ponerlo mas despues
const productsAPI = axios.create({
  baseURL: "http://localhost:3000/products",
//   la url se puede hacer asi
});

// asincrono porque los productos pueden tardar en llegar
// funcion get para traer productos
export const getProducts = async () => {
  // esto como ya puse la url arriba pues solo pongo el resto, lo concatena con lo de arriba para hacer la url completa
  const res = await productsAPI.get("/");

  // console.log(res)

  return res.data;
};

export const createProducts = (product) => {
  productsAPI.post("/", product);
};


export const deleteProducts=(id)=>{
    productsAPI.delete(`/${id}`)
}