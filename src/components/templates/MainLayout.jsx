import Footer from "../organisms/Footer";
import Header from "../organisms/Header";

export default function MainLayout({ children }) {
  return (
    <div className="grid grid-rows-layout min-h-screen">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
