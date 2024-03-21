import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";

import Gallery from "./routes/Gallery";
import Recursos from "./routes/Recursos";
import About from "./routes/About";
import HidroelectricaPage from "./routes/HidroelectricaPage";
import GeotermicaPage from "./routes/GeotermicaPage";
import EolicaPage from "./routes/EolicaPage";
import SolarPage from "./routes/SolarPage";
import BiomasaPage from "./routes/BiomasaPage";
import Eolica from "./Components/Model3D/Eolica";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={Home}></Route>
        {/* <Route path="/tiposdeenergia" Component={Energy}></Route> */}
        <Route path="/galeria" Component={Gallery}></Route>
        <Route path="/recursos" Component={Recursos}></Route>
        <Route path="/about" Component={About}></Route>
        <Route path="/*" Component={Home}></Route>
        {/* Rutas de submenú */}
        <Route
          path="/tipohidroelectrica"
          Component={HidroelectricaPage}
        ></Route>
        <Route path="/tipogeotermica" Component={GeotermicaPage}></Route>
        <Route path="/tipoeolica" Component={EolicaPage}></Route>
        <Route path="/tiposolar" Component={SolarPage}></Route>
        <Route path="/tipobiomasa" Component={BiomasaPage}></Route>
        {/* Rutas de Realidad Aumentada */}
        <Route path="/tipoeolica/3deolicaone" Component={Eolica}></Route>
      </Routes>
    </>
  );
}

export default App;
