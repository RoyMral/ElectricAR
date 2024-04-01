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
import ARModel from "./Components/Model3D/ARModel";

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
        {/******************* EÓLICA **********************/}
        <Route
          path="/tipoeolica/3deolicaone"
          element={
            <ARModel
              values={{ x2: 60, y2: 90, z2: -90, scale: 0.03 }}
              pathModel="/src/assets/ar/eolica/eolica2/torre-eolica2.gltf"
            />
          }
        ></Route>
        ****************** GEOTERMICA *********************
        <Route
          path="/tipogeotermica/3dgeotermicaone"
          element={
            <ARModel
              values={{ x2: 50, y2: 90, z2: -90, scale: 1.5 }}
              pathModel="https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/scene.gltf"
            />
          }
        ></Route>
        <Route
          path="/tipogeotermica/3dgeotermicatwo"
          element={
            <ARModel
              values={{ x2: 50, y2: 90, z2: -90, scale: 0.09 }}
              pathModel="/src/assets/ar/geotermica/geo3/geotermica3.gltf"
            />
          }
        ></Route>
        {/******************* SOLAR **********************/}
        <Route
          path="/tiposolar/3dsolarone"
          element={
            <ARModel
              values={{ x2: 50, y2: 90, z2: -90, scale: 1 }}
              pathModel="/src/assets/ar/solar/solar2/solar2.gltf"
            />
          }
        ></Route>
        {/******************* HIDROELÉCTRICA **********************/}
        <Route
          path="/tipohidro/3dhidroone"
          element={
            <ARModel
              values={{ x2: 50, y2: 90, z2: -90, scale: 1 }}
              pathModel="/src/assets/ar/hidro/scene.gltf"
            />
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
