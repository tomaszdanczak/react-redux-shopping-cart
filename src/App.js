import { Routes, Route } from "react-router-dom";
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
    </MainLayout>
  );
}
