
import { Home } from './home/Home'
import './App.css'
import { Routes, Route } from "react-router";
import { Payment } from './componetns/Payment'
function App() {


  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<Payment/>} />
  </Routes>
  )
}

export default App
