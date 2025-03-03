import { Route, Routes } from 'react-router-dom'
import Agro from './Pages/agro'
import Pneus from './Pages/pneu'
import Escap from './Pages/escap'

function App() {


  return (
    <Routes>
      <Route path="/agro" element = { <Agro/> } />
      <Route path="/pneus" element={<Pneus />} />
      <Route path="/escap" element={<Escap />} />
    </Routes>  
  )
}

export default App
