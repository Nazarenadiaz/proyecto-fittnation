/*use- hooks-funcion nativa - (use params es para el id)*/
/*custome-hooks- las funciones que creo le agrego el "use" adelante */

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useApiFakeStore } from "../helpers/api";
import CardC from "../components/CardC";

const DetalleDelProducto = () => {
  const params = useParams();
  const [producto, setProducto] = useState({});

  const obtenerproducto = async () => {
    const producto = await useApiFakeStore(params.id);
    setProducto(producto);
  };

  useEffect(() => {
    obtenerproducto();
  }, []);

  return (
    <>
      <CardC
        urlImagen={producto.image}
        titulo={producto.title}
        precio={producto.price}
        descripcion={producto.description}
        alternativo={producto.category}
      />
    </>
  );
};

export default DetalleDelProducto;
