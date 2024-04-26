type props = {
  sort: string;
  setSort: React.Dispatch<React.SetStateAction<string>>;
  setCategories: React.Dispatch<React.SetStateAction<string[]>>;
  categories: string[];
  // fetchProducts: () => Promise<void>;
  // dataLoader:boolean
};

const ProductscontrolBar = ({
  categories,
  setCategories,
  sort,
  setSort,
}: props) => {
  const handleCategoriesClass = (categoriesname: string) => {
    if (categories[0] === "mens") {
      if (categoriesname === categories[1]) return "scale-125";
    } else if (categories[0] === "womens") {
      if (categoriesname === categories[1]) return "scale-125";
    }
  };

  return (
    <div id="controlBar">
      <div className=" flex flex-row mx-5 h-14 mt-10 p-2 max-md:mt-5 max-md:text-xs max-sm:mx-1  justify-between  ">
        {/**categories */}
        <div className=" w-[20%]  justify-between flex flex-row max-md:w-[35%] max-sm:w-[45%] ">
          <button
            className={
              " bg-gray-300 p-2 px-4 rounded-sm max-md:px-2" +
              (categories[0] === "all"
                ? " bg-gray-600 text-white"
                : " bg-gray-300 text-gray-800")
            }
            onClick={async() => {
              setCategories(["all", "all"]);
              
            }}
          >
            All
          </button>
          <button
            className={
              " bg-gray-300 p-2 px-4 rounded-sm max-md:px-2" +
              (categories[0] === "mens"
                ? " bg-gray-600 text-white"
                : " bg-gray-300 text-gray-800")
            }
            onClick={async() => {
              setCategories(["mens", "all"]);
              
            }}
          >
            Mens
          </button>
          <button
            className={
              " bg-gray-300 p-2 px-4 rounded-sm max-md:px-2" +
              (categories[0] === "womens"
                ? " bg-gray-600 text-white"
                : " bg-gray-300 text-gray-800")
            }
            onClick={async() => {
              setCategories(["womens", "allw"]);
              
            }}
          >
            Womens
          </button>
          <button
            className={
              " bg-gray-300 p-2 px-4 rounded-sm max-md:px-2" +
              (categories[0] === "backpack"
                ? " bg-gray-600 text-white"
                : " bg-gray-300 text-gray-800")
            }
            onClick={async() => {
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
                  console.log('asasasa')
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
                  handleCategoriesClass("bags")
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
        <div className="w-[10%] flex flex-row justify-between  text-gray-800 max-xl:w-[15%] max-lg:w-[20%] max-sm:w-[30%]">
          <span className="font-semibold my-auto mx-auto">Price</span>
          <div>
            <button
              className={
                "text-3xl w-8 h-10  mr-1 " +
                (sort === "low-high"
                  ? " bg-gray-600 text-white"
                  : " bg-gray-300 text-gray-800")
              }
              onClick={() => setSort("low-high")}
            >
              &#10514;
            </button>
            <button
              className={
                "text-3xl w-8 h-10  mr-1 " +
                (sort === "high-low"
                  ? " bg-gray-600 text-white"
                  : " bg-gray-300 text-gray-800")
              }
              onClick={() => setSort("high-low")}
            >
              &#x2913;
            </button>
          </div>
        </div>
      </div>
      {/**specifices category  mobileVersion*/}
      <div className="w-[40%] ml-8 max-sm:ml-3 text-sm max-md:text-xs min-w-[200px] max-md:w-[35%] max-sm:w-[45%]  lg:hidden">
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
