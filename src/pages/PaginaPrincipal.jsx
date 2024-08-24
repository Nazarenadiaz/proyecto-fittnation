import { useEffect, useState } from "react";
import CardC from "../components/CardC";
import CarouselC from "../components/CarouselC";
import { useApiFakeStore } from "../helpers/api";

import { cambiarTituloPagina } from "../helpers/encabezados";

const PaginaPrincipal = () => {
  /* document.title = "pagina principal"; en el helpers esta explicado */
  cambiarTituloPagina("paginaPrincipal");
  /*ESTADOD(STATE): son datos mutables, los datos se pueden modificar, las PROPS NO SON MUTABLES,  */

  /*  const [estado, funcionQueCambiaElValorInicialDelEstado] = useState([]); */
  const [productos, setProductos] = useState([]);

  const obtenerProductosDesdeFakeStore = async () => {
    const productos = await useApiFakeStore();
    setProductos(productos);
  };

  useEffect(() => {
    obtenerProductosDesdeFakeStore();
  }, []);

  return (
    <>
      <CarouselC />
      <div className="container">
        <div className="row">
          {productos.map((producto) => (
            <CardC
              id={producto.id}
              urlImagen={producto.image}
              titulo={producto.title}
              precio={producto.price}
              descripcion={producto.description}
              alternativo={producto.category}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default PaginaPrincipal;

/*si quiero eliminar, actulizar son funciones independiente
EJEMPLO:
const actualizar = () => {
  AQUI IRIA LA ACRUALIZACION
} */
