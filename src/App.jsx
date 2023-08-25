import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Energy from "./routes/Energy";
import Gallery from "./routes/Gallery";
import Recursos from "./routes/Recursos";
import About from "./routes/About";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/tiposdeenergia" Component={Energy}></Route>
        <Route path="/galeria" Component={Gallery}></Route>
        <Route path="/recursos" Component={Recursos}></Route>
        <Route path="/about" Component={About}></Route>
        <Route path="/*" Component={Home}></Route>
      </Routes>
    </>
  );
}

export default App;
