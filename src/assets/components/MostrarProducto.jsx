import { useEffect, useMemo, useState } from "react";
import ModificarProducto from "./ModificarProducto";

function MostrarProducto (props) {

    const [producto,setProducto] = useState(props.producto);

    return(
        <div>
            <p>ID: {producto.id} - {producto.nombre} - {producto.marca}- ${producto.precioUnitario} - Stock {producto.stock} - Dia de Descuento: ${producto.precioConDescuento}</p>
        </div>
    )
}

export default MostrarProducto;