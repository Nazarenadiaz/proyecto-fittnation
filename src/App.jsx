/*el import trae una libreria o a un modulo de esa libreria, todo lo que yo utilice lo tengo que importar*/
/*export const App = () => {}; exportacion comun y tengo mas de una funcion (con distintos nombres) */
/*export deaful App; si yo no exporto no voy a poder importar, por defecto me dice qe voy a exportar( exporta 1 archivo) */
/*el returm tien que retornar a html */
/*props= propiedades */

import { BrowserRouter } from "react-router-dom";
import Rutas from "./routes/Rutas";
import Footer from "./components/Footer";
import NavbarC from "./components/NavbarC";

const App = () => {
  /*JS */

  return (
    <>
      <BrowserRouter>
        <NavbarC />
        <Rutas />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
