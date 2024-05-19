type props = {
  sort: string;
  setSort: React.Dispatch<React.SetStateAction<string>>;
  setCategories: React.Dispatch<React.SetStateAction<string[]>>;
  categories: string[];
  // fetchProducts: () => Promise<void>;
  // dataLoader:boolean
};
import { useContext } from "react";
import { ThemeContext } from "../../homepage";

const ProductscontrolBar = ({
  categories,
  setCategories,
  sort,
  setSort,
}: props) => {
  const theme: string = useContext(ThemeContext);
  const handleCategoriesClass = (categoriesname: string) => {
    if (categories[0] === "mens") {
      if (categoriesname === categories[1]) return "scale-125";
    } else if (categories[0] === "womens") {
      if (categoriesname === categories[1]) return "scale-125";
    }
  };

  return (
    <div id="controlBar">
      <div className="relative flex flex-row mx-5 h-14 mt-10 p-2 max-md:mt-5 max-md:text-xs max-sm:mx-1  justify-between text-black/60 max-mobile:justify-center ">
        {/**categories */}
        <div className=" w-fit  justify-between flex flex-row   ">
          <button
            className={
              "  p-2 px-4 transition duration-300" +
              (categories[0] === "all"
                ? (theme === "cold" ? " bg-gray-600 text-white" : "") +
                  (theme === "warm" ? " bg-orange-700  text-white" : "") +
                  (theme === "light" ? " bg-gray-500 text-white" : "") +
                  (theme === "dark" ? " bg-neutral-800 text-white/60" : "")
                : (theme === "cold" ? " bg-gray-300 text-black" : "") +
                  (theme === "warm" ? " bg-orange-300  text-black" : "") +
                  (theme === "light" ? " bg-gray-100 text-black" : "") +
                  (theme === "dark" ? " bg-neutral-300 text-black/60" : ""))
            }
            onClick={async () => {
              setCategories(["all", "all"]);
            }}
          >
            All
          </button>
          <button
            className={
              "  p-2 px-4 transition duration-300" +
              (categories[0] === "mens"
                ? (theme === "cold" ? " bg-gray-600 text-white" : "") +
                  (theme === "warm" ? " bg-orange-700  text-white" : "") +
                  (theme === "light" ? " bg-gray-500 text-white" : "") +
                  (theme === "dark" ? " bg-neutral-800 text-white/60" : "")
                : (theme === "cold" ? " bg-gray-300 text-black" : "") +
                  (theme === "warm" ? " bg-orange-300  text-black" : "") +
                  (theme === "light" ? " bg-gray-100 text-black" : "") +
                  (theme === "dark" ? " bg-neutral-300 text-black/60" : ""))
            }
            onClick={async () => {
              setCategories(["mens", "all"]);
            }}
          >
            Mens
          </button>
          <button
            className={
              "  p-2 px-4 transition duration-300" +
              (categories[0] === "womens"
                ? (theme === "cold" ? " bg-gray-600 text-white" : "") +
                  (theme === "warm" ? " bg-orange-700  text-white" : "") +
                  (theme === "light" ? " bg-gray-500 text-white" : "") +
                  (theme === "dark" ? " bg-neutral-800 text-white/60" : "")
                : (theme === "cold" ? " bg-gray-300 text-black" : "") +
                  (theme === "warm" ? " bg-orange-300  text-black" : "") +
                  (theme === "light" ? " bg-gray-100 text-black" : "") +
                  (theme === "dark" ? " bg-neutral-300 text-black/60" : ""))
            }
            onClick={async () => {
              setCategories(["womens", "allw"]);
            }}
          >
            Womens
          </button>
          <button
            className={
              "  p-2 px-2 transition duration-300" +
              (categories[0] === "backpack"
                ? (theme === "cold" ? " bg-gray-600 text-white" : "") +
                  (theme === "warm" ? " bg-orange-700  text-white" : "") +
                  (theme === "light" ? " bg-gray-500 text-white" : "") +
                  (theme === "dark" ? " bg-neutral-800 text-white/60" : "")
                : (theme === "cold" ? " bg-gray-300 text-black" : "") +
                  (theme === "warm" ? " bg-orange-300  text-black" : "") +
                  (theme === "light" ? " bg-gray-100 text-black" : "") +
                  (theme === "dark" ? " bg-neutral-300 text-black/60" : ""))
            }
            onClick={async () => {
              setCategories(["backpack", "all"]);
            }}
          >
            Backpack
          </button>
        </div>
        {/**specifices category  DesktopVersion*/}
        <div className="w-[22%] max-xl:w-[40%] max-lg:hidden">
          {/**mensCategories */}
          {categories[0] === "mens" ? (
            <div className="flex flex-row justify-between h-10 p-1">
              <button
                className={
                  "transition-transform duration-500 " +
                  handleCategoriesClass("all")
                }
                onClick={() => {
                  setCategories(["mens", "all"]);
                }}
              >
                all
              </button>
              <span className="  my-auto">/</span>
              <button
                className={
                  "transition-transform duration-500 " +
                  handleCategoriesClass("mens-shoes")
                }
                onClick={() => {
                  setCategories(["mens", "mens-shoes"]);
                }}
              >
                shoes
              </button>
              <span className="  my-auto">/</span>
              <button
                className={
                  "transition-transform duration-500 " +
                  handleCategoriesClass("mens-shirt-t-shirt")
                }
                onClick={() => {
                  setCategories(["mens", "mens-shirt-t-shirt"]);
                  console.log("asasasa");
                }}
              >
                shirts
              </button>
              <span className="  my-auto">/</span>
              <button
                className={
                  "transition-transform duration-500 " +
                  handleCategoriesClass("mens-watches")
                }
                onClick={() => {
                  setCategories(["mens", "mens-watches"]);
                }}
              >
                watches
              </button>
              <span className="  my-auto">/</span>
              <button
                className={
                  "transition-transform duration-500 " +
                  handleCategoriesClass("mens-jacket")
                }
                onClick={() => {
                  setCategories(["mens", "mens-jacket"]);
                }}
              >
                jackets
              </button>
            </div>
          ) : (
            <></>
          )}
          {/**womensCategories */}
          {categories[0] === "womens" ? (
            <div className="flex flex-row justify-between h-10 p-1">
              <button
                className={
                  "transition-transform duration-500 " +
                  handleCategoriesClass("allw")
                }
                onClick={() => {
                  setCategories(["womens", "allw"]);
                }}
              >
                all
              </button>
              <span className="  my-auto">/</span>
              <button
                className={
                  "transition-transform duration-500 " +
                  handleCategoriesClass("womens-shoes")
                }
                onClick={() => {
                  setCategories(["womens", "womens-shoes"]);
                  console.log(categories);
                }}
              >
                shoes
              </button>
              <span className="  my-auto">/</span>
              <button
                className={
                  "transition-transform duration-500 " +
                  handleCategoriesClass("womens-dress")
                }
                onClick={() => {
                  setCategories(["womens", "womens-dress"]);
                }}
              >
                dress
              </button>
              <span className="  my-auto">/</span>
              <button
                className={
                  "transition-transform duration-500 " +
                  handleCategoriesClass("womens-watches")
                }
                onClick={() => {
                  setCategories(["womens", "womens-watches"]);
                }}
              >
                watches
              </button>
              <span className="  my-auto">/</span>
              <button
                className={
                  "transition-transform duration-500 " +
                  handleCategoriesClass("womens-bags")
                }
                onClick={() => {
                  setCategories(["womens", "womens-bags"]);
                }}
              >
                bags
              </button>
            </div>
          ) : (
            <></>
          )}
        </div>
        {/**sorts */}
        <div className="w-[10%] flex flex-row justify-between max-sm:justify-end text-gray-800 max-xl:w-[15%] max-lg:w-[20%] max-sm:w-[30%] max-mobile:absolute max-mobile:top-[88px] max-mobile:right-2">
          <span className="font-semibold my-auto mx-auto max-sm:hidden ">Price</span>
          <div>
            <button
              className={
                "sm:text-3xl text-lg w-8 h-10 rounded-md  mr-1 " +
                (sort === "low-high"
                  ? (theme === "cold" ? " bg-gray-600 text-white" : "") +
                    (theme === "warm" ? " bg-orange-700  text-white" : "") +
                    (theme === "light" ? " bg-gray-500 text-white" : "") +
                    (theme === "dark" ? " bg-neutral-800 text-white/60" : "")
                  : (theme === "cold" ? " bg-gray-300 text-black" : "") +
                    (theme === "warm" ? " bg-orange-300  text-black" : "") +
                    (theme === "light" ? " bg-gray-100 text-black" : "") +
                    (theme === "dark" ? " bg-neutral-300 text-black/60" : ""))
              }
              onClick={() => setSort("low-high")}
            >
              &#10514;
            </button>
            <button
              className={
                "sm:text-3xl text-lg w-8 h-10 rounded-md mr-1 " +
                (sort === "high-low"
                  ? (theme === "cold" ? " bg-gray-600 text-white" : "") +
                    (theme === "warm" ? " bg-orange-700  text-white" : "") +
                    (theme === "light" ? " bg-gray-500 text-white" : "") +
                    (theme === "dark" ? " bg-neutral-800 text-white/60" : "")
                  : (theme === "cold" ? " bg-gray-300 text-black" : "") +
                    (theme === "warm" ? " bg-orange-300  text-black" : "") +
                    (theme === "light" ? " bg-gray-100 text-black" : "") +
                    (theme === "dark" ? " bg-neutral-300 text-black/60" : ""))
              }
              onClick={() => setSort("high-low")}
            >
              &#x2913;
            </button>
          </div>
        </div>
      </div>
      {/**specifices category  mobileVersion*/}
      <div className="w-[40%] ml-8 max-sm:ml-3 text-sm max-md:text-xs min-w-[200px] max-md:w-[35%] max-sm:w-[45%]  max-mobile:absolute max-mobile:ml-0 max-mobile:left-1/2 max-mobile:-translate-x-1/2 max-mobile:w-56  lg:hidden ">
        {/**mensCategories */}
        {categories[0] === "mens" ? (
          <div className="flex flex-row justify-between   h-10 p-1">
            <button
              className={
                "transition-transform duration-500 " +
                handleCategoriesClass("all")
              }
              onClick={() => {
                setCategories(["mens", "all"]);
              }}
            >
              all
            </button>
            <span className="  my-auto">/</span>
            <button
              className={
                "transition-transform duration-500 " +
                handleCategoriesClass("mens-shoes")
              }
              onClick={() => {
                setCategories(["mens", "mens-shoes"]);
              }}
            >
              shoes
            </button>
            <span className="  my-auto">/</span>
            <button
              className={
                "transition-transform duration-500 " +
                handleCategoriesClass("mens-shirt-t-shirt")
              }
              onClick={() => {
                setCategories(["mens", "mens-shirt-t-shirt"]);
              }}
            >
              shirts<script type="module" src=""></script>
            </button>
            <span className="  my-auto">/</span>
            <button
              className={
                "transition-transform duration-500 " +
                handleCategoriesClass("mens-watches")
              }
              onClick={() => {
                setCategories(["mens", "mens-watches"]);
              }}
            >
              watches
            </button>
            <span className="  my-auto">/</span>
            <button
              className={
                "transition-transform duration-500 " +
                handleCategoriesClass("mens-jacket")
              }
              onClick={() => {
                setCategories(["mens", "mens-jacket"]);
              }}
            >
              jackets
            </button>
          </div>
        ) : (
          <></>
        )}
        {/**womensCategories */}
        {categories[0] === "womens" ? (
          <div className="flex flex-row justify-between h-10 p-1">
            <button
              className={
                "transition-transform duration-500 " +
                handleCategoriesClass("allw")
              }
              onClick={() => {
                setCategories(["womens", "allw"]);
              }}
            >
              all
            </button>
            <span className="  my-auto">/</span>
            <button
              className={
                "transition-transform duration-500 " +
                handleCategoriesClass("womens-shoes")
              }
              onClick={() => {
                setCategories(["womens", "womens-shoes"]);
                console.log(categories);
              }}
            >
              shoes
            </button>
            <span className="  my-auto">/</span>
            <button
              className={
                "transition-transform duration-500 " +
                handleCategoriesClass("womens-dress")
              }
              onClick={() => {
                setCategories(["womens", "womens-dress"]);
              }}
            >
              dress
            </button>
            <span className="  my-auto">/</span>
            <button
              className={
                "transition-transform duration-500 " +
                handleCategoriesClass("womens-watches")
              }
              onClick={() => {
                setCategories(["womens", "womens-watches"]);
              }}
            >
              watches
            </button>
            <span className="  my-auto">/</span>
            <button
              className={
                "transition-transform duration-500 " +
                handleCategoriesClass("womens-bags")
              }
              onClick={() => {
                setCategories(["womens", "womens-bags"]);
              }}
            >
              bags
            </button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default ProductscontrolBar;
