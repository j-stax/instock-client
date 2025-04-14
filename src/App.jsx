import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Warehouses from './pages/Warehouses/Warehouses'
import './App.scss'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Warehouses />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
