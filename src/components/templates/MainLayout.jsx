import Footer from "../organisims/Footer";
import Header from "../organisims/Header";

export default function MainLayout({ children }) {
  return (
    <div className="grid grid-rows-layout min-h-screen">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
