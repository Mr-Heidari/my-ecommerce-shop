import { useState, useEffect, useContext } from "react";
import ProductscontrolBar from "./productscontrolBar";

import { commerce } from "./lib/commerce";
import { Product } from "@chec/commerce.js/types/product.js";
import { ThemeContext } from "../../homepage";

type props = {
  categories: string[];
  setCategories: React.Dispatch<React.SetStateAction<string[]>>;
  sortBy: string;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
};

type map = {
  [x: string]: number;
};

const Productcontainer = ({
  categories,
  setCategories,
  sortBy,
  setSortBy,
}: props) => {
  const theme: string = useContext(ThemeContext);
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<unknown>(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [productQuanityMenu, setProductQuanityMenu] = useState<string[]>([]);
  const handleAddToCart = async (productId: string, quanity: number) => {
    await commerce.cart.add(productId, quanity);
  };

  const handleQuanity = (productName: string): number => {
    const map = productQuanityMenu.reduce(
      (acc: map, value: string) => ({
        ...acc,
        [value]: (acc[value] || 0) + 1,
      }),
      {}
    );
    return map[productName];
  };

  const fetchProducts = async () => {
    setIsLoaded(false);
    try {
      const { data } = await commerce.products.list({
        limit: 100,
      });
      {
        /**setProducts on LocaleStorage */
      }
      localStorage.setItem("products", JSON.stringify(data));
      const filterProducts = data.filter((product) => {
        for (let i = 0; i < product.categories.length; i++) {
          if (categories[0] === "mens" || categories[0] === "womens") {
            console.log(categories[0]);
            if (product.categories[i].slug === categories[1]) {
              return product;
            }
          } else if (categories[0] === "backpack") {
            if (product.categories[i].slug === categories[0]) {
              console.log(categories[0]);
              return product;
            }
          } else {
            return product;
          }
        }
      });
      setError(null);
      setProducts(
        filterProducts.sort((a, b): number => {
          if (sortBy === "low-high") {
            if (a.price.raw > b.price.raw) {
              return -1;
            }
            return 1;
          } else {
            if (a.price.raw > b.price.raw) {
              return 1;
            }
            return -1;
          }
        })
      );
      setIsLoaded(true);
    } catch (error) {
      localStorage.removeItem("products");
      setIsLoaded(true);
      setError(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [categories, sortBy]);

  return (
    <div>
      <ProductscontrolBar
        setCategories={setCategories}
        categories={categories}
        sort={sortBy}
        setSort={setSortBy}
      ></ProductscontrolBar>
      <div className=" mx-5 h-[1px] bg-black/40 mt-5 max-mobile:mt-20"></div>
      <div className="fit mx-10  flex flex-row flex-wrap mt-5 justify-evenly gap-4 h-fit">
        {error === null ? (
          isLoaded ? (
            products.map((product) => (
              <div key={product.created}>
                <div
                  className={
                    "relative  font-semibold text-gray-700 border-4   w-60   h-[298px] rounded-md overflow-hidden" +
                    ((theme === "cold" ? " bg-gray-200 border-black/20 " : "") +
                      (theme === "warm"
                        ? " bg-orange-200/30  border-orange-700/20 "
                        : "") +
                      (theme === "light" ? " bg-white border-black/20 " : "") +
                      (theme === "dark"
                        ? " bg-neutral-300 border-black/40"
                        : ""))
                  }
                >
                  <div className="w-full h-[298px]  shadow-[inset_0_-2px_25px_rgba(0,0,0,0.2)]">
                    {/**spinner */}
                    <div className="left-1/2 -translate-x-1/2 top-5 absolute w-48  h-64 ">
                      <div
                        role="status"
                        className=" absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
                      >
                        <svg
                          aria-hidden="true"
                          className="w-12 h-12 text-gray-200 animate-spin dark:text-gray-600 fill-gray-300"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"
                          />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"
                          />
                        </svg>
                        <span className="sr-only">Loading...</span>
                      </div>
                    </div>

                    <img
                      className="left-1/2 -translate-x-1/2 top-5 absolute w-48  bg-transparent  h-64 object-contain object-center "
                      src={
                        product.image?.url !== null ? product.image?.url : ""
                      }
                      alt=""
                    />
                    <div className={"absolute w-full h-full "+(theme === "dark" ? " bg-slate-500/20  " : "") }></div>
                  </div>
                  <div
                    className={
                      "inline w-fit absolute top-2  rounded-md p-[6px] left-2 text-white/70 text-sm" +
                      ((theme === "cold" ? " bg-slate-500/90  " : "") +
                        (theme === "warm" ? " bg-orange-600/90   " : "") +
                        (theme === "light" ? " bg-neutral-500  " : "") +
                        (theme === "dark" ? " bg-neutral-500 " : ""))
                    }
                  >
                    price :{" "}
                    <span className="text-white left-16">
                      {product.price.formatted_with_symbol}
                    </span>
                  </div>

                  <div className="absolute bottom-0 w-full h-24  from-black/30 p-4  rounded-sm bg-gradient-to-t transition-transform duration-300  ">
                    <p
                      className={
                        " transition-transform duration-500 leading-5 w-fit mt-4 max-w-40 line-clamp-2  ml-0 text-white/90 p-1 rounded-md text-xs overflow-hidden" +
                        (productQuanityMenu.includes(product.name)
                          ? " -translate-y-2/4 "
                          : " ") +
                        ((theme === "cold"
                          ? " bg-slate-800/80  text-white/90 "
                          : "") +
                          (theme === "warm" ? " bg-orange-800/90   " : "") +
                          (theme === "light" ? " bg-neutral-700  " : "") +
                          (theme === "dark" ? " bg-neutral-700 " : ""))
                      }
                    >
                      {product.name}
                    </p>

                    <span
                      className={
                        "absolute right-2 bottom-2 bg-addtocartIcone  bg-center rounded-full w-9 h-9 bg-[length:60%_60%] bg-no-repeat cursor-pointer" +
                        (productQuanityMenu.includes(product.name)
                          ? " hidden"
                          : "") +
                        ((theme === "cold"
                          ? " bg-slate-800/90 "
                          : "") +
                          (theme === "warm" ? " bg-orange-950/90   " : "") +
                          (theme === "light" ? " bg-neutral-900  " : "") +
                          (theme === "dark" ? " bg-neutral-900 " : ""))
                      }
                      onClick={() => {
                        setProductQuanityMenu([
                          ...productQuanityMenu,
                          product.name,
                        ]);
                      }}
                    ></span>

                    <div
                      className={
                        "text-white/90 bottom-2 w-52 left-3 gap-1 rounded-md flex flex-row absolute" +
                        (productQuanityMenu.includes(product.name)
                          ? " "
                          : " hidden")
                      }
                    >
                      <button
                        className="bg-black/70  w-7 text-white rounded-md"
                        onClick={() => {
                          productQuanityMenu.splice(
                            productQuanityMenu.indexOf(product.name),
                            1
                          );
                          setProductQuanityMenu([...productQuanityMenu]);
                          console.log(productQuanityMenu);
                        }}
                      >
                        -
                      </button>
                      <div
                        className="w-44 h-7 bg-black/70 text-xs text-white rounded-md flex flex-row cursor-pointer "
                        onClick={() => {
                          handleAddToCart(
                            product.id,
                            handleQuanity(product.name)
                          );
                          productQuanityMenu.splice(
                            productQuanityMenu.indexOf(product.name),
                            handleQuanity(product.name)
                          );
                          setProductQuanityMenu([...productQuanityMenu]);
                        }}
                      >
                        <p className="m-auto">
                          Quanity = {handleQuanity(product.name)} addtoCart
                        </p>{" "}
                      </div>
                      <button
                        className="bg-black/70  w-7 text-white rounded-md"
                        onClick={() => {
                          setProductQuanityMenu([
                            ...productQuanityMenu,
                            product.name,
                          ]);
                          console.log(productQuanityMenu);
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="relative w-full h-96 text-center flex flex-col">
              <p className=" my-auto">...loading</p>
            </div>
          )
        ) : (
          <>error</>
        )}
      </div>
    </div>
  );
};

export default Productcontainer;
