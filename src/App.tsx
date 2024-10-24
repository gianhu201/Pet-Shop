import Navbar from "@/scenes/navbar";
import Home from "@/scenes/home";
import OurClasses from "@/scenes/ourClasses";
import Benefits from "@/scenes/benefits";
import ContactUs from "@/scenes/contactUs";
import Footer from "@/scenes/footer";
import Product from "@/scenes/product";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";
import './index.css'; 
import Cart from "@/scenes/cart";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
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
          <Route path="/product" element={<Product />} />
          <Route path="/benefits" element={<Benefits setSelectedPage={setSelectedPage} />} />
          <Route path="/our-classes" element={<OurClasses setSelectedPage={setSelectedPage} />} />
          <Route path="/contact-us" element={<ContactUs setSelectedPage={setSelectedPage} />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
