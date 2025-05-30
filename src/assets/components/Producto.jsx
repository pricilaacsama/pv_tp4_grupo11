import '../../css/Producto.css';
import { useState, useMemo, useCallback, useEffect } from 'react';
import ProductoForm from './ProductForm';
import ProductList from './ProductList';
import BarraBusqueda from './BarraBusqueda2';
import ModificarProducto from './ModificarProducto';
import EliminarProducto from './EliminarProducto';


export default function Producto(){

 const [buscador,setBuscador] = useState(false);
 const [formulario,setFormulario] = useState(false)
 const [lista,setLista] = useState(false)
 const [modificar,setModificar] = useState(false);
 const [eliminado,setEliminado] = useState(false)

 const [productos, setProductos] = useState([
        {id:1, nombre: "cafetera", marca: "Philco", precioUnitario: 90000, descuento: 20, precioConDescuento: 90000 - 90000 * 20 / 100, stock: 20, estado: true},
        {id:2, nombre: "licuadora", marca: "Liliana", precioUnitario: 75000, descuento: 25, precioConDescuento: 75000 - 75000 * 25 / 100, stock: 15, estado: true},
        {id:3, nombre: "microondas", marca: "Philco", precioUnitario: 150000, descuento: 15, precioConDescuento: 150000 - 150000 * 15 / 100, stock: 7, estado: false},
        {id:4, nombre: "tostadora", marca: "Moreli", precioUnitario: 83000, descuento: 30, precioConDescuento: 83000 -83000 * 30 / 100, stock: 12, estado: false},
        {id:5, nombre: "multiprocesadora", marca: "LG", precioUnitario: 112000, descuento: 15, precioConDescuento: 112000 - 112000 * 15 / 100, stock: 4, estado: true},
        {id:6, nombre: "maquina de coser", marca: "Singer", precioUnitario: 320000, descuento: 15, precioConDescuento: 272000,stock: 6, estado: true},
        {id:7, nombre: "cocina", marca: "Florencia", precioUnitario: 490000, descuento: 10, precioConDescuento: 490000-490000*10/100,stock: 2, estado: true}
 ]);

 const activarBuscador = () => {
    setBuscador(!buscador)
    setFormulario(false)
    setLista(false)
    setModificar(false)
    setEliminado(false)
 }

 const activarFormulario = () => { 
    setFormulario(!formulario)
    setBuscador(false)
    setLista(false)
    setModificar(false)
    setEliminado(false)

 }

 const activarLista = () => {
    setLista(!lista);
    setBuscador(false)
    setFormulario(false)
    setModificar(false)
    setEliminado(false)
    console.log(productos)
 }

 const activarModificar = () => {
    setModificar(!modificar);
    setBuscador(false)
    setFormulario(false)
    setLista(false)
    setEliminado(false)
 }

 const activarEliminado = () => {
   setEliminado(!eliminado)
    setBuscador(false)
    setFormulario(false)
    setLista(false)
    setModificar(false)
 }

 useEffect (()=> {
    console.log("Hacer Click en los botones para mostrar el contenido")
 },[])

    return(
        <div className="producto-container"> 
         
        <h1>Gestión de productos</h1>
        <button onClick={activarLista}>Mostra Productos</button>
        <button onClick={activarFormulario}>Agregar Producto</button>
        <button onClick={activarBuscador}>Buscar Producto</button>
        <button onClick={activarModificar}>Modificar Producto</button>
        <button onClick={activarEliminado}>Eliminar Producto</button>
        {lista ? <ProductList productos={[productos,setProductos]} titulo={"Lista de Productos"}></ProductList> : null }
        {formulario ? <ProductoForm productos={[productos,setProductos]}></ProductoForm> : null}
        {buscador ? <BarraBusqueda productos={[productos,setProductos]}></BarraBusqueda> : null}
        {modificar ? <ModificarProducto productos={[productos,setProductos]}></ModificarProducto> : null}
        {eliminado ? <EliminarProducto productos={[productos,setProductos]}></EliminarProducto> : null}
        </div>

    );
    
}