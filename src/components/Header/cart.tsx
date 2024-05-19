import { Cart } from "@chec/commerce.js/types/cart";
import { commerce } from "../productContainer/lib/commerce";
import { useContext, useState } from "react";
import { LineItem } from "@chec/commerce.js/types/line-item";

import { ThemeContext } from "../../homepage";
import { Link } from "react-router-dom";

type props = {
  openCart: boolean;
  cart: Cart | undefined;
};
const CartComponent = ({ openCart, cart }: props) => {
  const theme: string = useContext(ThemeContext);

  return (
    <div
      className={
        "fixed z-30 w-full mt-16 h-screen  bg-black/40" +
        (openCart ? " " : " hidden")
      }
    >
      <div
        className={
          " mx-5 h-fit max-h-[90vh] p-5 flex  flex-col gap-2 overflow-auto" +
          (theme === "cold" ? " bg-gray-500 " : "") +
          (theme === "warm" ? " bg-orange-300  " : "") +
          (theme === "light" ? " bg-white " : "") +
          (theme === "dark" ? " bg-neutral-600 " : "")
        }
      >
        {cart?.line_items.map((product) => (
          <Items key={product.id} product={product}></Items>
        ))}
        <div className="flex flex-row justify-between">
          <p className="my-auto">
            totalPrice:{cart?.subtotal.formatted_with_symbol}
          </p>
          <Link to={'/checkout'} className="p-2 border-2 border-gray-500 bg-white text-gray-900 hover:bg-gray-900 hover:text-white rounded-md">
            checkOut
          </Link>
        </div>
      </div>
    </div>
  );
};

type itemProps = {
  product: LineItem;
};

const Items = ({ product }: itemProps) => {
  const theme: string = useContext(ThemeContext);
  const [loader, setLoader] = useState({
    loader: true,
    loaderType: "",
  });
  const [error, setError] = useState<unknown>(null);

  const handleRemoveFromCart = async (productId: string) => {
    setLoader({
      loader: false,
      loaderType: "...Removing Product",
    });

    try {
      await commerce.cart.remove(productId);
      setLoader({
        loader: true,
        loaderType: "...Removing Product",
      });
    } catch (error) {
      setError(error);
      setLoader({
        loader: true,
        loaderType: "...Removing Product",
      });
    }
  };

  const handleUpdateCart = async (productId: string, quanity: object) => {
    setLoader({
      loader: false,
      loaderType: "...Updating Product",
    });

    try {
      await commerce.cart.update(productId, quanity);
      setLoader({
        loader: true,
        loaderType: "...Updating Product",
      });
    } catch {
      setError(error);
      setLoader({
        loader: true,
        loaderType: "...Updating Product",
      });
    }
  };

  return (
    <div
      className={
        "relative flex flex-row p-2 gap-2 border-2   rounded-md " +
        (theme === "cold" ? " bg-gray-700  text-white border-white/50" : "") +
        (theme === "warm" ? " bg-orange-700  text-white border-white/50" : "") +
        (theme === "light" ? " bg-white/90 " : "") +
        (theme === "dark" ? " bg-neutral-600 text-white/70 border-black/50" : "")
      }
    >
      {error === null ? (
        <div
          className={
            "absolute w-full h-full top-0 left-0 border-2 border-black text-xl bg-white/70 text-center z-20 font-semibold " +
            (loader.loader ? " hidden" : " ")
          }
        >
          <p className=" pt-5">{loader.loaderType}</p>
        </div>
      ) : (
        <>check your network</>
      )}
      <img
        src={product.image?.url}
        className=" w-16 h-16 object-contain object-center bg-white"
        alt=""
      />
      <div className="flex flex-col justify-between">
        <p className="line-clamp-1 max-lg:w-96 max-md:w-60 max-sm:text-sm max-sm:w-32  overflow-hidden">
          {product.name}
        </p>
        <p>
          <span
            className="text-2xl mr-2 cursor-pointer"
            onClick={() =>
              handleUpdateCart(product.id, {
                quantity: product.quantity - 1,
              })
            }
          >
            -
          </span>
          {product.quantity}
          <span
            className="text-xl ml-2  cursor-pointer"
            onClick={() =>
              handleUpdateCart(product.id, {
                quantity: product.quantity + 1,
              })
            }
          >
            +
          </span>
        </p>
      </div>
      <div>
        <span
          className="absolute right-0 top-0 w-[10%] h-full bg-gray-700/50 border-gray-700/50 bg-deleteIcone bg-[length:40%_80%] bg-no-repeat bg-center rounded-sm cursor-pointer max-md:min-w-20 max-sm:min-w-9 max-sm:bg-[length:100%_100%]"
          onClick={() => handleRemoveFromCart(product.id)}
        ></span>
      </div>
    </div>
  );
};
export default CartComponent;
