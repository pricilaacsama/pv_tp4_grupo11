import { useState, useMemo, useCallback, useEffect } from 'react';
import ProductoForm from './productform';
import ProductList from './ProductList';


export default function Producto(){
 const [productos, setProductos] = useState([
  {id:1, descripcion: "cafetera", precioUnitario: 90000, descuento: 20, precioConDescuento: 90000 - 90000 * 20 / 100, stock: 20},
  {id:2, descripcion: "licuadora", precioUnitario: 75000, descuento: 25, precioConDescuento: 75000 - 75000 * 25 / 100, stock: 15},
  {id:3, descripcion: "microondas", precioUnitario: 150000, descuento: 15, precioConDescuento: 150000 - 150000 * 15 / 100, stock: 7},
  {id:4, descripcion: "tostadora", precioUnitario: 83000, descuento: 30, precioConDescuento: 83000 -83000 * 30 / 100, stock: 12},
  {id:5, descripcion: "multiprocesadora", precioUnitario: 112000, descuento: 15, precioConDescuento: 112000 - 112000 * 15 / 100, stock: 4}
 ]);


    return(
        <div>
        <h1>Gestión de productos</h1>
        <ProductoForm productos={[productos,setProductos]}></ProductoForm>
        <ProductList productos={productos}/>
        </div>

    );
    
}