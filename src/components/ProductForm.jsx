import { useMutation, useQueryClient } from "@tanstack/react-query";
// hook, recibe el objeto, tiene que ver con el backend y manejar datos, enviar y recibir
// el otro hook es para recargar la pagina cuando se envie algo creo, y comparar cosas, creo que lo que esta mostrado y lo que no, con datos cache, trae datos nuevos, los compara y los actualiza, en vez de hacer otra peticion get, mejor trae la que necesita y la muestra creo, pone los datos en la cache para no mandarlos a llamar de nuevo en caso de un reinicio de la pagina
import { createProducts } from "../api/productsAPI";

const ProductForm = () => {

  const queryClient=useQueryClient()


  // lo explico mejor este hook en Products
  // el mutation creo que se usara para manejar errores, creo que no jaja
  // este use mutation es para crear datos, hice otro para eliminar en Products
  const addProductMutation= useMutation({
    mutationFn: createProducts,
    // funcion en caso de que el producto haya sido añadido
    onSuccess:()=>{
      console.log("Product added")
      queryClient.invalidateQueries("products")
      // este producto ha cambiado asi que vuelvelo a pedir
    }
  });

  function handleSubmit(e) {
    e.preventDefault();

    // console.log(e.target.name.value);

    // un metodo que extrae valores del formulario automaticamente
    const formData = new FormData(e.target);
    const product = Object.fromEntries(formData); //retorna un objeto

    // console.log(product)
    // manda un objeto, con el ...product se compia ese objeto para añadir, y se pone lo del stock
    addProductMutation.mutate({...product,inStock:true})
    // el id si lo genera
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" />

      <label htmlFor="description">Description</label>
      <input type="text" id="description" name="description" />

      <label htmlFor="price">Price</label>
      <input type="number" id="price" name="price" />

      <button>Add Product</button>
    </form>
  );
};

export default ProductForm;

// 32:50, hacer funcion para mandar lo del form al backend
