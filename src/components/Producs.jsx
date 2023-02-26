// un hook de reactQuery
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getProducts, deleteProducts } from "../api/productsAPI";

const Producs = () => {

  const queryClient=useQueryClient()


  // lo que comienza con is es boolean, data es el arreglo con datos, y error los errores en arreglo creo
//   el data:products es para ponerle otro nombre, data es lo que recibiria normalmente y products el nuevo nombre
  const { isLoading, data:products, isError, error } = useQuery({
    // nombra la peticion, la consulta
    queryKey: ["products"],//trae los datos a traves de la funcion de abajo
    // query function, aqui se hace la peticion, se pone la funcion que importa datos
    queryFn: getProducts,
    // es para seleccionar datos y poder modificarlos
    // el sort es para ordenarlos, no entiendo bien que onda
    select:products=>products.sort((a,b)=>b.id-a.id)//ordena los datos
  });


  const deleteProductMutation=useMutation({
    mutationFn: deleteProducts,//funcion a ejecutar, cuando llamas el mutate ejecuta la funcion, asi que pasale los parametros que espera la funcion tambien
    onSuccess:()=>{//a fuerzas debe ejecutar una funcion al hacer lo de arriba para que funcione, en este caso un queryClient para actualizar valores al eliminar algo
    queryClient.invalidateQueries("products")//cuando llaman esto vuelve a traer los datos, los compara y muestra los cambios
    }
  })


  if(isLoading)return <div>Loading...</div>
  else if(isError)return <div>Error: {error.message}</div>


  return <div>
    {products.map(product =>(
        <div key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>

            <button onClick={()=>{deleteProductMutation.mutate(product.id)}}>delete</button>
            <input type="checkbox" />
            <label htmlFor="">In Stock</label>
        </div>
    ))}
  </div>
};

export default Producs;
