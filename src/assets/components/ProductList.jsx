import { useEffect } from "react";
import MostrarProducto from "./MostrarProducto";

export default function ProductList(props) {
  const [productos,setProductos] = props.productos;

  useEffect(()=>{
    if(props.titulo.includes("Lista")){
      console.log("Mostrando la lista de Productos")
    }
    if(props.titulo.includes("Busq")){
      console.log("Mostrando barra de busqueda")
    }
  },[])
  
  if (productos.filter(prod=>prod.estado).length == 0) {
    return <p>---</p>;
  }

  return (
    <div>
      <h2>{props.titulo}</h2>
      <ul>
        {productos.filter((prod) => (prod.estado)).map((prod) =>
          <li key={prod.id}>
            <MostrarProducto producto={prod}></MostrarProducto>
          </li>
        )}
      </ul>
    </div>
  );
}
