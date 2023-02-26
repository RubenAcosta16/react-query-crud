import Products from "./components/Producs";
import ProductsForm from "./components/ProductForm";

function App() {
  return (
    <div>
      <a href="https://tanstack.com/query/v4/docs/react/installation">
        instalacion
      </a>

      <a href="https://tanstack.com/query/v4/docs/react/devtools">
        devtools, cosa que tambien se usa
      </a>

      <p>luego: npm i json-server</p>

      <p>ojo con esta parte 11:43</p>
      <p>luego ejecutamos en el npm nombre base de datos: npm run -name-</p>

      <p>luego instalar axios: npm i axios</p>

      <ProductsForm />
      <Products />
    </div>
  );
}

export default App;
