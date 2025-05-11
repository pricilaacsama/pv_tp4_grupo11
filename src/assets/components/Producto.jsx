import { useState, useMemo, useCallback, useEffect } from 'react';
import ProductoForm from './productform';
import ProductList from './ProductList';



export default function Producto(){
 const [productos, setProductos] = useState([]);


  const agregarProducto = useCallback((producto) => {
    setProductos(prev => [...prev, producto]);
  }, []);

 useEffect(() => {
    console.log("Productos actualizados:", productos);
  }, [productos]);

    return(
        <div>
        <h1>Gestión de productos</h1>
        <ProductoForm onSubmit={agregarProducto}></ProductoForm>
        <ProductList productos={productos} />
        </div>

    );
    
}