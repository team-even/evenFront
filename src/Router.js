import { Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/HomePage"
import Detail from "./pages/Detail"
import { Payment } from "./pages/Payment"
export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/detail/:id' element={<Detail />}/>
      <Route path='/detail/:id/payment' element={<Payment />}/>
    </Routes>
  )
}