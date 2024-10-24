import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/LogoName.png";
import Linkk from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";


  return (
    <nav>
      <div
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-40`}>
            {/* LEFT SIDE */}
            <img alt="logo" src={Logo} className="w-1/6" />

            {/* RIGHT SIDE */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm m-5 p-5`}>
                  <Linkk
                    page="Trang Chủ"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Linkk
                    page="Đánh Giá"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Linkk
                    page="Các Bé"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Linkk
                    page="Liên Hệ"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                {/* cart */}
                <Link to="/cart">
                <div className="relative cursor-pointer">
                  <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 text-xs"></span> {/* Số lượng sản phẩm */}
                  <img src="/src/assets/cart.png" alt="Cart" className="w-8 h-8" />
                  {/* <Cart/> */}
                </div>
                </Link>



                <div className={`${flexBetween} gap-8`}>
                  
                  <ActionButton setSelectedPage={setSelectedPage}>
                  Sign In
                  </ActionButton>
                </div>
                
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          {/* CLOSE ICON */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            <Linkk
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Linkk
              page="Benefits"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Linkk
              page="Our Classes"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Linkk
              page="Contact Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
