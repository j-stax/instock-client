import './App.scss'
import Modal from 'react-modal'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Warehouses from './pages/Warehouses/Warehouses'
import WarehouseDetails from './pages/WarehouseDetails/WarehouseDetails'
import AddNewWarehouse from './pages/AddNewWarehouse'
import EditWarehouse from './pages/EditWarehouse'
import Inventories from './pages/Inventories/Inventories'
import SelectField from './components/SelectField/SelectField'

Modal.setAppElement("#root")

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<SelectField label="TEST" options={["option1", "option2"]} defaultValue="Choose one..." />} />
          {/* <Route path="/" element={<Navigate to="/warehouses" />} /> */}
          <Route path="/warehouses" element={<Warehouses />} />
          <Route path="/warehouses/:id" element={<WarehouseDetails />} />
          <Route path="/warehouses/:id/add" element={<AddNewWarehouse />} />
          <Route path="/warehouses/:id/edit" element={<EditWarehouse />} />
          <Route path="/inventories" element={<Inventories />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
