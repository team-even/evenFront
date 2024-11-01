import { Route, Routes } from "react-router-dom";
import { Payment } from "./pages/Payment";
import MyPage from "./pages/MyPage";
import Badge from "./pages/Badge";
import HomePage from "./pages/HomePage";
import Detail from "./pages/Detail";
export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/detail/:id/payment" element={<Payment />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/badge" element={<Badge />} />
    </Routes>
  );
}
