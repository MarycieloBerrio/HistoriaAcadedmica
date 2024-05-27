import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from "./components/Dashboard/Dashboard.jsx"

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Login />} />  Ruta para el formulario de inicio de sesión */}
        <Route path="/*" element={<Dashboard />} />  
        {/* <Route path="/busqueda" element={<Busqueda />} />Ruta para el resto de la aplicación */}
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
