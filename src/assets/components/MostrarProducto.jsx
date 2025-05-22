import { useState } from "react";
import "../../css/Producto.css";

function MostrarProducto(props) {
  const [producto, setProducto] = useState(props.producto);

  return (
    <div className="producto-fila">
      <p>
        <span className="etiqueta">ID:</span> {producto.id} - 
        <span className="etiqueta"> Nombre:</span> {producto.nombre} - 
        <span className="etiqueta"> Marca:</span> {producto.marca} - 
        <span className="etiqueta"> Precio:</span> ${producto.precioUnitario} - 
        <span className="etiqueta"> Stock:</span> {producto.stock} - 
        <span className="etiqueta"> Día de Descuento:</span> ${producto.precioConDescuento}
      </p>
    </div>
  );
}

export default MostrarProducto;


/*import { useEffect, useMemo, useState } from "react";
import ModificarProducto from "./ModificarProducto";
import "../css/producto.css";

function MostrarProducto (props) {

    const [producto,setProducto] = useState(props.producto);

    return(
        <div>
            <p>ID: {producto.id} - {producto.nombre} - {producto.marca}- ${producto.precioUnitario} - Stock {producto.stock} - Dia de Descuento: ${producto.precioConDescuento}</p>
        </div>
    )
}

export default MostrarProducto;*/