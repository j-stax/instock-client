import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Warehouses from './pages/Warehouses/Warehouses'
import Inventories from './pages/Inventories/Inventories'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Warehouses />} />
          <Route path="/inventories" element={<Inventories />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
