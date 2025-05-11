import { useState, useEffect } from "react";

export default function ProductoForm({onSubmit}){
    const [productoDato, setProductoDato] = useState({
        id: '',
        descripcion: '',
        precioUnitario: '',
        descuento: '',
        precioConDescuento: 0,
        stock: ''
    });

    const actualizarCampo = (e) => {
        const {name, value} = e.target;
        setProductoDato(dato => ({...dato, [name]: value}));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const precioUnitario = Number(productoDato.precioUnitario);
        const descuento = Number(productoDato.descuento);
        const stock = Number(productoDato.stock);

        if (precioUnitario < 0) {
        alert('El precio tiene que ser mayor que 0');
        return;
        }
        if (descuento < 0 || descuento > 100) {
        alert('Tiene que ser un porcentaje entre 0 y 100');
        return;
        }
        if (stock < 0) {
        alert('Tiene que ser un número mayor que 0');
        return;
        }
        if (!productoDato.descripcion.trim()) {
        alert('Tiene que tener descripcion');
        return;
        }

        const nuevoProducto = {
            ...productoDato,
            id: Number(productoDato.id),
            precioUnitario: Number(productoDato.precioUnitario),
            descuento: Number(productoDato.descuento),
            stock: Number(productoDato.stock),
            precioConDescuento: productoDato.precioUnitario * (1 - productoDato.descuento / 100)
        };

        onSubmit(nuevoProducto);

        //limpia el formulario para ingresar un nuevo producto;
        setProductoDato({
            id: '',
            descripcion: '',
            precioUnitario: '',
            descuento: '',
            stock: ''
        });

    };
    console.log('agreando un producto',productoDato);

return(

    <div>
        <form onSubmit={handleSubmit}>
            <input type="number" name="id" placeholder="id" value={productoDato.id} onChange={actualizarCampo} required></input>
            <input type="text" name="descripcion" placeholder="descripcion" value={productoDato.descripcion} onChange={actualizarCampo} required></input>
            <input type="number" name="precioUnitario" placeholder="precio unitario" value={productoDato.precioUnitario} onChange={actualizarCampo} required></input>
            <input type="number" name="descuento" placeholder="Descuento (%)" value={productoDato.descuento} onChange={actualizarCampo} required></input>
            <input type="number" name="stock" placeholder="Stock" value={productoDato.stock} onChange={actualizarCampo} required></input>
            <button type="submit">agregar producto</button>
        </form>
    </div>

);




}