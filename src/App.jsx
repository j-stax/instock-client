import './App.scss'
import Modal from 'react-modal'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Warehouses from './pages/Warehouses/Warehouses'
import WarehouseDetails from './pages/WarehouseDetails/WarehouseDetails'
import Inventories from './pages/Inventories/Inventories'

Modal.setAppElement("#root")

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          {/* <Route path="/" element={<WarehouseDetails />} /> */}
          <Route path="/" element={<Warehouses />} />
          <Route path="/warehouses/:id" element={<WarehouseDetails />} />
          <Route path="/inventories" element={<Inventories />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
