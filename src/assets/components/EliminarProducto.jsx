import { useEffect, useState } from "react";
import { buscarPorId } from "./buscarProducto";
import ProductList from "./ProductList";

function EliminarProducto (props) {
    const [productos,setProductos] = props.productos
    const [idProducto,setIdProducto] = useState ('')
    const [encontrado,setEncontrado] = useState ([])

    const guardarId = (event) =>{
            setIdProducto(event.target.value)
    }

        const eliminar = () => {
        setProductos(productos.map( (prod) => {
            if(prod.id == idProducto) {
                return {...prod, estado: false};
            }
            return prod;
        }
        ))
        console.log("Se elimino logicamente el producto con ID", idProducto)
        setIdProducto("")
    }

    useEffect (() => {
        setEncontrado(buscarPorId(productos,idProducto))
    },[idProducto])

    return(
        <div>
           
                <input type="number" placeholder="ID del Producto" value={idProducto} onChange={guardarId}/>
                
                <ProductList productos={[encontrado,setEncontrado]} titulo={"Eliminar"}></ProductList>
                
                <button onClick={eliminar}>Eliminar</button>
        </div>
    )
}

export default EliminarProducto