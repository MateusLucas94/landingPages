import { Route, Routes } from 'react-router-dom'
import Agro from './pages/agro'

function App() {


  return (
    <Routes>
      <Route path="/agro" element = { <Agro/> } />
    </Routes>  
  )
}

export default App
