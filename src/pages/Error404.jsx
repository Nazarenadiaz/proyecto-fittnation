import { cambiarTituloPagina } from "../helpers/encabezados";

const Error404 = () => {
  cambiarTituloPagina("error");
  return (
    <>
      <h1 className="text-center mt-5">Pagina no encontrada :( </h1>
    </>
  );
};

export default Error404;
