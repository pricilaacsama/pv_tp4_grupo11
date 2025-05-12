import { useState, useEffect } from "react";

export default function ProductoForm(props){
    const [productos, setProductos] = props.productos;
    const [productoDato, setProductoDato] = useState({
        descripcion: '',
        precioUnitario: '',
        descuento: '',
        stock: ''
    });


    const actualizarCampo = (e) => {
        const {name, value} = e.target;
        setProductoDato(dato => ({...dato, [name]: value}));
    };

//genera el id automaticamente
    const obtenerNuevoId = () => {
    return ((productos.length > 0 ? Math.max(...productos.map(t => t.id)): 0) + 1);
    }

    const agregarProducto = (producto) => {
    setProductos(productos => [...productos, producto]);
  };

    useEffect(() => {
        console.log("Productos actualizado:", productos);
    }, [productos]);

    const enviarFormulario = (e) => {
        e.preventDefault();

        const precioUnitario = Number(productoDato.precioUnitario);
        const descuento = Number(productoDato.descuento);
        const stock = Number(productoDato.stock);

        if (precioUnitario < 0) {
        alert('El precio tiene que ser mayor que 0');
        return;
        }
        if (descuento < 0 || descuento > 100) {
        alert('El descuento tiene que ser un porcentaje entre 0 y 100');
        return;
        }
        if (stock <= 0) {
        alert('El stock tiene que ser un numero mayor o igual que 0');
        return;
        }
        if (!productoDato.descripcion.trim()) {
        alert('Tiene que tener descripcion');
        return;
        }

//convierte a numero las variables:
        const nuevoProducto = {
            ...productoDato,
            id: obtenerNuevoId(),
            precioUnitario: Number(productoDato.precioUnitario),
            descuento: Number(productoDato.descuento),
            stock: Number(productoDato.stock),
            precioConDescuento: precioUnitario * (1 - descuento / 100)
        };

        agregarProducto(nuevoProducto);

        //limpia el formulario para ingresar un nuevo producto;
        setProductoDato({
            descripcion: '',
            precioUnitario: '',
            descuento: '',
            stock: ''
        });

    };
    

return(

    <div>
        <form onSubmit={enviarFormulario}>
            <input type="text" name="descripcion" placeholder="descripcion" value={productoDato.descripcion} onChange={actualizarCampo} required></input>
            <input type="number" name="precioUnitario" placeholder="precio unitario" value={productoDato.precioUnitario} onChange={actualizarCampo} required></input>
            <input type="number" name="descuento" placeholder="Descuento (%)" value={productoDato.descuento} onChange={actualizarCampo} required></input>
            <input type="number" name="stock" placeholder="Stock" value={productoDato.stock} onChange={actualizarCampo} required></input>
            <button type="submit">agregar producto</button>
        </form>
    </div>

);




}