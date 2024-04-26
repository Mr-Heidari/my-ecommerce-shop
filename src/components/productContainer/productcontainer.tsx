import { useState, useEffect } from "react";
import ProductscontrolBar from "./productscontrolBar";

import { commerce } from "./lib/commerce";
import { Product } from "@chec/commerce.js/types/product.js";

type props = {
  categories: string[];
  setCategories: React.Dispatch<React.SetStateAction<string[]>>;
  sortBy: string;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
};
const Productcontainer = ({
  categories,
  setCategories,
  sortBy,
  setSortBy,
}: props) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<unknown>(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const handleAddToCart = async (productId: string, quanity: number) => {
    await commerce.cart.add(productId, quanity);
  };

  const fetchProducts = async () => {
    setIsLoaded(false);
    try {
      const { data } = await commerce.products.list({
        limit: 100,
        
      });
      {/**setProducts on LocaleStorage */}
      localStorage.setItem("products",JSON.stringify(data))
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
      localStorage.removeItem("products")
      setIsLoaded(true);
      setError(error);
    }
  };

  useEffect(() => {
    fetchProducts();

    console.log(localStorage.getItem('products'));
  }, [categories, sortBy]);

  return (
    <div>
      <ProductscontrolBar
        setCategories={setCategories}
        categories={categories}
        sort={sortBy}
        setSort={setSortBy}
      ></ProductscontrolBar>
      <div className="fit mx-10  flex flex-row flex-wrap mt-5 justify-evenly gap-4 h-fit">
        {error === null ? (
          isLoaded ? (
            products.map((product) => (
              <div key={product.created}>
                <div className="relative  font-semibold text-gray-700 border-4   border-black/20 w-60 bg-white  h-[430px] rounded-md overflow-hidden">
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
                  </div>

                  <div className="absolute bottom-0 w-full h-32 bg-zinc-700 p-4  rounded-sm bg-gradient-to-t transition-transform duration-300  ">
                    <p className=" w-52 line-clamp-1 mb-5 text-white/90 text-sm">
                      {product.name}
                    </p>
                    <p className=" inline text-orange-300">price:</p>
                    <span className="text-orange-300">
                      {product.price.formatted_with_symbol}
                    </span>
                    <span
                      className="absolute right-4 bottom-4 bg-addtocartIcone w-8 h-8 bg-contain bg-no-repeat cursor-pointer"
                      onClick={() => handleAddToCart(product.id, 1)}
                    ></span>
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
