import { useEffect, useState, useCallback } from "react";
import { buscarPorId } from "./buscarProducto";
import ProductList from "./ProductList";

function EliminarProducto (props) {
    const [productos,setProductos] = props.productos
    const [idProducto,setIdProducto] = useState ('')
    const [encontrado,setEncontrado] = useState ([])
    const [mostrarBoton, setMostrarBoton] = useState(false);

    const guardarId = (event) =>{
            const valor = event.target.value;
            setIdProducto(valor);
            setMostrarBoton(valor != "");
    }

    const eliminar = useCallback(() => {
        setProductos(productos.map((prod) => {
            if(prod.id == idProducto) {
                return {...prod, estado: false};
            }
            return prod;
        }));
        console.log("Se elimino logicamente el producto con ID", idProducto)
        setIdProducto("")
        setMostrarBoton(false);
    }, [idProducto, productos, setProductos]);

    useEffect (() => {
        setEncontrado(buscarPorId(productos,idProducto))
    },[idProducto])

    return(
        <div>
           
                <input type="number" placeholder="ID del Producto" value={idProducto} onChange={guardarId}/>
                
                <ProductList productos={[encontrado,setEncontrado]} titulo={"Eliminar"}></ProductList>
                {mostrarBoton ?
                <button onClick={eliminar}>Eliminar</button> : null}
        </div>
    )
}

export default EliminarProducto