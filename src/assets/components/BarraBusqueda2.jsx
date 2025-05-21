import { useState, useEffect, useMemo } from "react";
import { buscarPorId, buscarPorNombre, buscarPorMarca } from "./buscarProducto";
import ProductList from "./ProductList";
import "../../css/Producto.css";

function BarraBusqueda(props) {
  const [productos, setProductos] = props.productos;
  const [opcion, setOpcion] = useState("1");
  const [buscado, setBuscado] = useState("");

  const resultado = useMemo(() => {
    switch (opcion) {
      case "1":
        return buscarPorId(productos, buscado);
      case "2":
        return buscarPorNombre(productos, buscado);
      case "3":
        return buscarPorMarca(productos, buscado);
      default:
        return [];
    }
  }, [opcion, buscado, productos]);

  const guardarOpcion = (event) => {
    setOpcion(event.target.value);
  };

  const guardarBuscado = (event) => {
    setBuscado(event.target.value);
  };

  return (
    <div className="barra-busqueda-container">
      <h2 className="barra-busqueda-titulo">🔍 Parámetros de Búsqueda</h2>

      <div className="barra-busqueda-input-group">
        <label className="barra-busqueda-label">Buscar:</label>
        <input
          className="barra-busqueda-input"
          type="text"
          value={buscado}
          onChange={guardarBuscado}
        />
      </div>

      <div className="barra-busqueda-opciones">
        <label className="barra-busqueda-radio-label">
          <input
            type="radio"
            name="busqueda"
            value="1"
            onChange={guardarOpcion}
            checked={opcion === "1"}
            className="barra-busqueda-radio"
          />
          Por ID
        </label>

        <label className="barra-busqueda-radio-label">
          <input
            type="radio"
            name="busqueda"
            value="2"
            onChange={guardarOpcion}
            checked={opcion === "2"}
            className="barra-busqueda-radio"
          />
          Por Nombre
        </label>

        <label className="barra-busqueda-radio-label">
          <input
            type="radio"
            name="busqueda"
            value="3"
            onChange={guardarOpcion}
            checked={opcion === "3"}
            className="barra-busqueda-radio"
          />
          Por Marca
        </label>
      </div>

      <div className="barra-busqueda-resultados">
        <ProductList
          productos={[resultado, () => {}]}
          titulo={"Resultado de Búsqueda"}
        />
      </div>
    </div>
  );
}

export default BarraBusqueda;
/*import { useState, useEffect,useMemo } from "react";
import { buscarPorId, buscarPorNombre, buscarPorMarca } from "./buscarProducto";
import ProductList from "./ProductList";

function BarraBusqueda (props) {
    const [productos,setProductos] = props.productos
    const [opcion,setOpcion] = useState("1")
    const [buscado,setBuscado] = useState ("");
    
    const resultado = useMemo(() => {
        switch (opcion) {
            case "1": return buscarPorId(productos,buscado);break
            case "2": return buscarPorNombre(productos,buscado);break
            case "3": return buscarPorMarca(productos,buscado);break
        }
        },[opcion,buscado,productos])

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

            <ProductList productos={[resultado, () => {}]} titulo={"Resultado de Busqueda"}></ProductList>
        </div>
    )
}

export default BarraBusqueda*/