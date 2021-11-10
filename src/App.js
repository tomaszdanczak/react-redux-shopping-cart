import { Routes, Route } from "react-router-dom";
import OrderDetailModal from "./components/organisms/OrderDetailModal";
import ProductDetailModal from "./components/organisms/ProductDetailModal";
import AdminPage from "./components/pages/AdminPage";
import HomePage from "./components/pages/HomePage";
import MainLayout from "./components/templates/MainLayout";

export default function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
      <ProductDetailModal />
      <OrderDetailModal />
    </MainLayout>
  );
}
