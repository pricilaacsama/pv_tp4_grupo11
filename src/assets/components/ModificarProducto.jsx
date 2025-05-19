import { useState } from "react";
import { buscarPorId } from "./buscarProducto";


function ModificarProducto (props) {

    const [productos,setProductos] = props.productos;

    const [idProducto,setIdProducto] = useState("");
    const [encontrado, setEncontrado] = useState(false)

    const [productoDato, setProductoDato] = useState({
        id: 0,
        nombre: '',
        marca: '',
        precioUnitario: '',
        precioConDescuento: '',
        descuento: '',
        stock: '',
        estado: false
    });


    const completarNuevoProducto = (nuevoProducto) => {
        return {...nuevoProducto, precioConDescuento: nuevoProducto.precioUnitario - nuevoProducto.precioUnitario * nuevoProducto.descuento / 100}
    }

    const enviarFormulario = (event) => {
        event.preventDefault();
        
        const nuevoProducto = {
        nombre: productoDato.nombre ==='' ? productos[idProducto-1].nombre : productoDato.nombre,
        marca: productoDato.marca ==='' ? productos[idProducto-1].marca : productoDato.marca,
        precioUnitario: productoDato.precioUnitario ==='' ? productos[idProducto-1].precioUnitario : Number.productoDato.precioUnitario,
        descuento: productoDato.descuento ==='' ? productos[idProducto-1].descuento : Number.productoDato.descuento,
        stock: productoDato.stock === '' ? productos[idProducto-1].stock : Number.productoDato.stock,
        estado: productos[idProducto-1].estado,
        id: productos[idProducto-1].id,
        };

        completarNuevoProducto(nuevoProducto)

        setProductos(productos.map(prod => {
            if(prod.id == nuevoProducto.id) {
                return {...prod, ...nuevoProducto};
            }
            return prod;
        }
        ))
        setEncontrado(false)
        console.log("Se modifico el producto con ID ",idProducto)
        setIdProducto("")
    }

     const actualizarCampo = (e) => {
        const {name, value} = e.target;
        setProductoDato(dato => ({...dato, [name]: value}));
    };

    const guardarId = (event) =>{
        setIdProducto(event.target.value)
    }

    const buscar = (event) => {
        event.preventDefault();
        if(buscarPorId(productos,idProducto).length !== 0) {
            buscarPorId(productos,idProducto)[0].estado ? setEncontrado(true) : setEncontrado(false);
        }
        else {
            setEncontrado(false)
        }
    }

    return( 
        <div>
            <form onSubmit={buscar}>
                <input type="number" placeholder="ID del Producto" value={idProducto} onChange={guardarId}/>
                <button type="submit">Buscar Producto a Modificar</button>
            </form>
            {encontrado ? <form onSubmit={enviarFormulario}>
                <input type="text" name="nombre" placeholder="nombre" value={productoDato.nombre} onChange={actualizarCampo} ></input><br />
                <input type="text" name="marca" placeholder="marca" value={productoDato.marca} onChange={actualizarCampo} /><br />
                <input type="number" name="precioUnitario" placeholder="precio unitario" value={productoDato.precioUnitario} onChange={actualizarCampo} ></input><br />
                <input type="number" name="descuento" placeholder="Descuento (%)" value={productoDato.descuento} onChange={actualizarCampo} ></input><br />
                <input type="number" name="stock" placeholder="Stock" value={productoDato.stock} onChange={actualizarCampo} ></input><br />
                <button type="submit">Modificar producto</button>
            </form> : null }
        </div>
    )
}

export default ModificarProducto;