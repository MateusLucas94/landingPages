import { Route, Routes } from "react-router-dom";
import Agro from "./Pages/Agro/Agro";
import Pneus from "./Pages/Pneus/Pneu";
import Escap from "./Pages/Escap/Escap";
// import "./index.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Agro />} />
      <Route path="/pneus" element={<Pneus />} />
      <Route path="/escap" element={<Escap />} />
    </Routes>
  );
}

export default App;
