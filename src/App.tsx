import Navbar from "@/scenes/navbar";
import Home from "@/scenes/home";
import DichVu from "@/scenes/DichVu";
import GioiThieu from "@/scenes/GioiThieu";
import LienHe from "@/scenes/LienHe";
// import Footer from "@/scenes/footer";
import Product from "@/scenes/product";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";
import './index.css'; 
import Cart from "@/scenes/cart";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.trangchu
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.trangchu);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Router>
      <div className="app bg-gray-20">
        <Navbar
          isTopOfPage={isTopOfPage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        
        <Routes>
          <Route path="/" element={<Home setSelectedPage={setSelectedPage} />} />
          <Route path="/product" element={<Product setSelectedPage={setSelectedPage} />} />
          <Route path="/gioi-thieu" element={<GioiThieu setSelectedPage={setSelectedPage} />} />
          <Route path="/dich-vu" element={<DichVu setSelectedPage={setSelectedPage} />} />
          <Route path="/lien-he" element={<LienHe setSelectedPage={setSelectedPage} />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
