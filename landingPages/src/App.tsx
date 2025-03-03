import { Route, Routes } from "react-router-dom";
import Agro from "./Pages/Agro/Agro";
import Pneus from "./Pages/Pneu/Pneu";
import Escap from "./Pages/Escap/Escap";

function App() {
  return (
    <Routes>
      <Route path="/agro" element={<Agro />} />
      <Route path="/pneus" element={<Pneus />} />
      <Route path="/escap" element={<Escap />} />
    </Routes>
  );
}

export default App;
