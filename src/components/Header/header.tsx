import { useContext, useEffect, useState } from "react";
import { commerce } from "../productContainer/lib/commerce.ts";
import { Cart } from "@chec/commerce.js/types/cart";

import CartComponent from "./cart.tsx";
import Menu from "./menu.tsx";
import SearchProducts from "./SearchProducts.tsx";

import { ThemeContext } from "../../homepage.tsx";

type props = {
  setCategories: React.Dispatch<React.SetStateAction<string[]>>;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
};

const Header = ({ setCategories, setTheme }: props) => {
  const theme: string = useContext(ThemeContext);
  const [openCart, setOpenCart] = useState(false);
  const [cart, setCart] = useState<Cart>();
  const [showTheme, setShowTheme] = useState(false);

  const fetchCart = async () => {
    const x = await commerce.cart.retrieve();
    setCart(x);
  };

  useEffect(() => {
    fetchCart();
  });


  return (
    <>
      <div
        className={
          "z-20 w-full flex justify-between flex-row h-16 shadow-md top-0 fixed max-sm:h-12 " +
          (theme === "cold" ? " bg-gray-200 " : "") +
          (theme === "warm" ? " bg-orange-200  " : "") +
          (theme === "light" ? " bg-white " : "") +
          (theme === "dark" ? " bg-neutral-900 " : "")
        }
      >
        <div className="my-auto ml-10 max-sm:ml-5 flex flex-row relative ">
          <p className={" max-mobile:text-xs "+(theme === "dark" ? " text-white/50 " : "")}>My-ECommerce</p>

          {/**Theme  */}
          <div
            className="flex flex-row max-md:flex-col md:w-fit md:h-12 h-fit absolute max-md:left-[152px] left-36 -top-2 cursor-pointer max-mobile:-top-4 mt-[1px] max-mobile:mt-2 max-sm:mt-1 max-mobile:left-[125px] "
            onClick={() => setShowTheme((prev) => !prev)}
          >
            <div className="bg-themeIcone max-md:absolute max-md:-left-7 max-sm:top-2 w-8 h-8 max-md:w-6 max-sm:h-6 bg-no-repeat bg-contain my-auto top-3"></div>
            <div
              className={
                "w-10 h-10 max-md:w-8 max-md:h-8 bg-no-repeat rounded-full flex shadow-md  transition-color duration-500" +
                (theme === "cold" ? " bg-gray-200 " : "") +
                (theme === "warm" ? " bg-orange-200  " : "") +
                (theme === "light" ? " bg-white/90 " : "") +
                (theme === "dark" ? " bg-neutral-800 " : "")
              }
            >
              <div
                className={
                  " w-7 h-7  rounded-full m-auto flex  transition-color duration-500" +
                  (theme === "cold" ? " bg-slate-400 " : "") +
                  (theme === "warm" ? " bg-orange-400  " : "") +
                  (theme === "light" ? " bg-transparent " : "") +
                  (theme === "dark" ? " bg-transparent " : "")
                }
              >
                <div
                  className={
                    " w-3 h-3  rounded-full m-auto  transition-color duration-500" +
                    (theme === "cold" ? " bg-slate-800 " : "") +
                    (theme === "warm" ? " bg-orange-800  " : "") +
                    (theme === "light" ? " bg-neutral-800 " : "") +
                    (theme === "dark" ? " bg-white/90 " : "")
                  }
                ></div>
              </div>
            </div>
            {/** theme Menu */}
            <div
              className={
                "ml-3 max-md:ml-0 max-md:mt-2 md:transition-all md:duration-300  flex flex-row max-md:flex-col justify-between overflow-hidden  max-md:p-1 max-md:bg-neutral-600  max-md:rounded-md gap-1" +
                (showTheme ? " w-44 h-12 max-md:w-fit max-md:h-fit" : " md:w-0 max-md:h-0 max-md:p-0 ")
              }
            >
              <div
                className="bg-gray-200 w-10 h-10 max-md:w-8 max-sm:h-8 bg-no-repeat rounded-full flex shadow-md"
                onClick={() => setTheme("cold")}
              >
                <div className=" w-7 h-7 bg-slate-400 rounded-full m-auto flex">
                  <div className=" w-3 h-3 bg-slate-800 rounded-full m-auto"></div>
                </div>
              </div>
              <div
                className="bg-orange-200 w-10 h-10 max-md:w-8 max-sm:h-8 bg-no-repeat rounded-full flex shadow-md"
                onClick={() => setTheme("warm")}
              >
                <div className=" w-7 h-7 bg-orange-400 rounded-full m-auto flex">
                  <div className=" w-3 h-3 bg-orange-800 rounded-full m-auto"></div>
                </div>
              </div>
              <div
                className="bg-white/90 w-10 h-10 max-md:w-8 max-sm:h-8 bg-no-repeat rounded-full flex shadow-md"
                onClick={() => setTheme("light")}
              >
                <div className=" w-3 h-3 bg-neutral-800 rounded-full m-auto flex"></div>
              </div>
              <div
                className="bg-neutral-800 w-10 h-10 max-md:w-8 max-sm:h-8 bg-no-repeat rounded-full flex shadow-md"
                onClick={() => setTheme("dark")}
              >
                <div className=" w-3 h-3 bg-white/90 rounded-full m-auto"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-fit h-fit  my-auto mr-10  max-sm:mr-5 flex flex-row gap-5">
          <div className="max-md:hidden">
            <SearchProducts></SearchProducts>
          </div>
          <div
            className=" relative bg-cartIcone w-8 h-8 max-sm:h-8 max-sm:w-8 bg-contain cursor-pointer"
            onClick={() => setOpenCart((prev) => !prev)}
          >
            <span className="bg-red-500 p-[2px] w-fit min-w-7 h-fit rounded-full absolute -right-3 max-sm:top-0  -top-3 text-center max-sm:min-w-5 ">
              <p className="text-white max-sm:text-xs">{cart?.total_items}</p>
            </span>
          </div>
          <Menu setCategories={setCategories}></Menu>
        </div>
      </div>
      <CartComponent openCart={openCart} cart={cart}></CartComponent>\
    </>
  );
};

export default Header;
