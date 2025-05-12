import { useState } from "react";

function MostrarProducto (props) {

    const [producto,setProducto] = useState(props.producto);

    return(
            <tr key={producto.id}>
            <td>{producto.id}</td>
            <td>{producto.descripcion}</td>
            <td>${producto.precioUnitario}</td>
            <td>{producto.descuento}%</td>
            <td>${producto.precioConDescuento.toFixed(2)}</td>
            <td>{producto.stock}</td>
            </tr>
    )
} 

export default MostrarProducto;