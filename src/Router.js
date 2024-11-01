import { Route, Routes } from "react-router-dom";
import { Payment } from "./pages/Payment";
import MyPage from "./pages/MyPage";
import Badge from "./pages/Badge";
import HomePage from "./pages/HomePage";
import Detail from "./pages/Detail";
import PurchaseHistory from "./pages/PurchaseHistory";
import Ranking from "./components/Ranking";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/detail/:id/payment" element={<Payment />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/badge" element={<Badge />} />
      <Route path="/purchaseStatus" element={<PurchaseHistory />} />
      <Route path="/ranking" element={<Ranking />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}
