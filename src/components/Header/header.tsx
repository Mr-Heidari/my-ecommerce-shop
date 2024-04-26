import { useEffect, useState } from "react";
import { commerce } from "../productContainer/lib/commerce.ts";
import { Cart } from "@chec/commerce.js/types/cart";

import CartComponent from "./cart.tsx";
import Menu from "./menu.tsx";
import SearchProducts from "./SearchProducts.tsx";

type props = {
  setCategories: React.Dispatch<React.SetStateAction<string[]>>;
};

const Header = ({ setCategories }: props) => {
  const [openCart, setOpenCart] = useState(false);
  const [cart, setCart] = useState<Cart>();
  const fetchCart = async () => {
    const x = await commerce.cart.retrieve();
    setCart(x);
  };
  useEffect(() => {
    fetchCart();
  });
  return (
    <>
      <div className="z-20 w-full flex justify-between flex-row h-16 shadow-md top-0 fixed max-sm:h-12 bg-gray-50">
        <div className="my-auto ml-10 max-sm:ml-5 flex flex-row">
          <p className=" ">My-ECommerce</p>
        </div>
        <div className="w-fit h-fit  my-auto mr-10 max-sm:mr-5 flex flex-row gap-5">
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
