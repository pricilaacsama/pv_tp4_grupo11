import { useState } from "react";

function MostrarProducto (props) {

    const [producto,setProducto] = useState(props.producto);

    return(
        <div>
            <p>ID: {producto.id} - {producto.descripcion} - ${producto.precioUnitario} - Stock {producto.stock}</p>
        </div>
    )
}

export default MostrarProducto;