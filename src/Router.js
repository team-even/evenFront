import { Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/HomePage"
import Detail from "./pages/Detail"
export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/detail' element={<Detail />}/>
    </Routes>
  )
}