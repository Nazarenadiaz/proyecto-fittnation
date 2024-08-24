import { Routes, Route } from "react-router-dom";
import PaginaPrincipal from "../pages/PaginaPrincipal";
import SobreNosotros from "../pages/SobreNosotros";
import Contacto from "../pages/Contacto";
import InicioDeSesion from "../pages/InicioDeSesion";
import Registro from "../pages/Registro";
import Error404 from "../pages/Error404";
import DetalleDelProducto from "../pages/DetalleDelProducto";
const Rutas = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<PaginaPrincipal />} />
        <Route path="/detalle-producto/:id" element={<DetalleDelProducto />} />
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/inicio-sesion" element={<InicioDeSesion />} />
        <Route path="/registrarse" element={<Registro />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
};

export default Rutas;
