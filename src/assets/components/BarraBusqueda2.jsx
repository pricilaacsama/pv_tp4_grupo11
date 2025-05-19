import { useState, useEffect,useMemo } from "react";
import { buscarPorId, buscarPorNombre, buscarPorMarca } from "./buscarProducto";
import ProductList from "./ProductList";

function BarraBusqueda (props) {
    const [productos,setProductos] = props.productos
    const [opcion,setOpcion] = useState(0)
    const [buscado,setBuscado] = useState ("");
    const [resultado,setResultado] = useState([]);

    useEffect(() => {
        switch (opcion) {
            case "1": setResultado(buscarPorId(productos,buscado));break
            case "2": setResultado(buscarPorNombre(productos,buscado));break
            case "3": setResultado(buscarPorMarca(productos,buscado));break
        }
        },[opcion,buscado])

    const guardarOpcion = (event) => {
        setOpcion(event.target.value)
    }

    const guardarBuscado = (event) => {
        setBuscado(event.target.value)
    }

    return(
        <div>
            <h2>Parametros de Busqueda</h2>
           
            <label>Busqueda: </label>
            <input type="text" value={buscado} onChange={guardarBuscado}/><br />
            

            <input type="radio" name="busqueda" value = '1' onChange={guardarOpcion} checked={opcion == "1"}/>
            <label>Por ID</label><br />

            <input type="radio" name="busqueda" value = "2" onChange={guardarOpcion} checked={opcion == "2"} />
            <label>Nombre</label><br />

            <input type="radio" name="busqueda" value = "3" onChange={guardarOpcion} checked={opcion == "3"}/>
            <label>Marca</label>

            <ProductList productos={[resultado,setResultado]} titulo={"Resultado de Busqueda"}></ProductList>
        </div>
    )
}

export default BarraBusqueda