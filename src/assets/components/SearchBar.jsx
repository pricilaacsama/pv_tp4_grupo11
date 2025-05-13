import { useState, useMemo } from "react";
import MostrarProducto from "./MostrarProducto";
import "../css/SearchBar.css";

function SearchBar({ productos }) {
  const [searchTerm, setSearchTerm] = useState("");

  const resultadosFiltrados = useMemo(() => {
    return productos.filter(producto =>
      producto.descripcion.toLowerCase().includes(searchTerm.toLowerCase()) ||
      producto.id.toString().includes(searchTerm)
    );
  }, [searchTerm, productos]);

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Buscar por ID o descripción"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Descuento</th>
            <th>Precio c/ Desc</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {resultadosFiltrados.map((producto) => (
            <MostrarProducto key={producto.id} producto={producto} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SearchBar;

