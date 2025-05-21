import { useState } from "react";
import { buscarPorId } from "./buscarProducto";
import "../../css/Producto.css";

function ModificarProducto(props) {
  const [productos, setProductos] = props.productos;
  const [idProducto, setIdProducto] = useState("");
  const [encontrado, setEncontrado] = useState(false);

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
    return {
      ...nuevoProducto,
      precioConDescuento:
        nuevoProducto.precioUnitario - (nuevoProducto.precioUnitario * nuevoProducto.descuento) / 100,
    };
  };

  const enviarFormulario = (event) => {
    event.preventDefault();

    const nuevoProducto = {
      nombre: productoDato.nombre === '' ? productos[idProducto - 1].nombre : productoDato.nombre,
      marca: productoDato.marca === '' ? productos[idProducto - 1].marca : productoDato.marca,
      precioUnitario:
        productoDato.precioUnitario === ''
          ? productos[idProducto - 1].precioUnitario
          : Number(productoDato.precioUnitario),
      descuento:
        productoDato.descuento === ''
          ? productos[idProducto - 1].descuento
          : Number(productoDato.descuento),
      stock:
        productoDato.stock === ''
          ? productos[idProducto - 1].stock
          : Number(productoDato.stock),
      estado: productos[idProducto - 1].estado,
      id: productos[idProducto - 1].id,
    };

    completarNuevoProducto(nuevoProducto);

    setProductos(
      productos.map((prod) =>
        prod.id === nuevoProducto.id ? { ...prod, ...nuevoProducto } : prod
      )
    );

    setEncontrado(false);
    console.log("Se modificó el producto con ID", idProducto);
    setIdProducto("");
  };

  const actualizarCampo = (e) => {
    const { name, value } = e.target;
    setProductoDato((dato) => ({ ...dato, [name]: value }));
  };

  const guardarId = (event) => {
    setIdProducto(event.target.value);
  };

  const buscar = (event) => {
    event.preventDefault();
    const resultado = buscarPorId(productos, idProducto);
    setEncontrado(resultado.length !== 0 && resultado[0].estado);
  };

  return (
    <div className="modificar-container">
      <form onSubmit={buscar} className="formulario-busqueda">
        <input
          type="number"
          placeholder="ID del Producto"
          className="input-modificar"
          value={idProducto}
          onChange={guardarId}
        />
        <button type="submit" className="boton-modificar">
          Buscar Producto a Modificar
        </button>
      </form>

      {encontrado && (
        <form onSubmit={enviarFormulario} className="formulario-modificar">
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            className="input-modificar"
            value={productoDato.nombre}
            onChange={actualizarCampo}
          />
          <input
            type="text"
            name="marca"
            placeholder="Marca"
            className="input-modificar"
            value={productoDato.marca}
            onChange={actualizarCampo}
          />
          <input
            type="number"
            name="precioUnitario"
            placeholder="Precio Unitario"
            className="input-modificar"
            value={productoDato.precioUnitario}
            onChange={actualizarCampo}
          />
          <input
            type="number"
            name="descuento"
            placeholder="Descuento (%)"
            className="input-modificar"
            value={productoDato.descuento}
            onChange={actualizarCampo}
          />
          <input
            type="number"
            name="stock"
            placeholder="Stock"
            className="input-modificar"
            value={productoDato.stock}
            onChange={actualizarCampo}
          />
          <button type="submit" className="boton-modificar">
            Modificar Producto
          </button>
        </form>
      )}
    </div>
  );
}

export default ModificarProducto;