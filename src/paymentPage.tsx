import { Cart } from "@chec/commerce.js/types/cart";
import { useState, useEffect } from "react";
import { commerce } from "./components/productContainer/lib/commerce";
import { Link } from "react-router-dom";

const PaymentPage = () => {
  const [cart, setCart] = useState<Cart>();

  const fetchCart = async () => {
    const x = await commerce.cart.retrieve();
    setCart(x);
  };

  useEffect(() => {
    fetchCart();
  });

  return (
    <div className="w-[500px] flex flex-col gap-5 p-5 h-fit absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 rounded-sm border-[1px] border-black">
      <h1 className="text-3xl mx-auto">Checkout</h1>
      <div className="flex flex-row ">
        <div className="flex flex-row justify-between gap-2 mx-auto text-sm">
          <div className="w-8 h-8 bg-blue-800 rounded-full border-none text-white flex">
            <p className="m-auto">&#10003;</p>
          </div>
          <p className="m-auto">shopping address</p>
          <div className="w-32 h-[2px] m-auto bg-black"></div>

          <p className="m-auto">payment detail</p>
          <div className="w-8 h-8 bg-blue-800 rounded-full border-none text-white flex">
            <p className="m-auto">2</p>
          </div>
        </div>
      </div>
      <div>
        <p>Order summary</p>
        <div className="flex flex-col gap-5 mt-6">
          {cart?.line_items.map((product) => (
            <div className="flex flex-row justify-between w-full">
              <div className="flex flex-col w-fit h-fit">
                <p className="line-clamp-1 text-black/90 w-72 text-sm">
                  {product.name}
                </p>
                <p className="text-black/50 mt-1">
                  Quanity: {product.quantity}
                </p>
              </div>
              <p className=" my-auto">{product.price.formatted_with_symbol}</p>
            </div>
          ))}
          <p>total {cart?.subtotal.formatted_with_symbol}</p>
          <div className="w-full h-[1px] bg-black"></div>
          <div className="flex flex-row justify-between">
            <p>payment methods</p>
            <div className="border-[1px] rounded-sm border-black w-40 h-8 flex">
              <p className="m-auto text-black/50 text-sm ">just static</p>
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <Link
              to={"/checkout"}
              className="px-4 py-2 border-[1px] rounded-sm text-sm border-black"
            >
              BACK
            </Link>
            <button className="px-4 py-2 bg-blue-800 text-white rounded-sm text-sm ">
              pay: {cart?.subtotal.formatted_with_symbol}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
