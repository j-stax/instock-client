import './App.scss'
import Modal from 'react-modal'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Warehouses from './pages/Warehouses/Warehouses'
import WarehouseDetails from './pages/WarehouseDetails/WarehouseDetails'
import AddNewWarehouse from './pages/AddNewWarehouse'
import EditWarehouse from './pages/EditWarehouse'
import Inventory from './pages/Inventory/Inventory'
import InventoryDetails from './pages/InventoryDetails/InventoryDetails'

Modal.setAppElement("#root")

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          {/* <Route path="/" element={<Navigate to="/warehouses" />} /> */}
          <Route path="/" element={<InventoryDetails />} />
          <Route path="/warehouses" element={<Warehouses />} />
          <Route path="/warehouses/:id" element={<WarehouseDetails />} />
          <Route path="/warehouses/:id/add" element={<AddNewWarehouse />} />
          <Route path="/warehouses/:id/edit" element={<EditWarehouse />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/inventory/:id" element={<InventoryDetails />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
