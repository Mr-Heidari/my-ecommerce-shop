import { useRef, useState } from "react";

import { Product } from "@chec/commerce.js/types/product.js";

const SearchProducts = () => {
  const [searchIsVisible, setSearchIsVisible] = useState(false);
  const [searchResult, setSearchResult] = useState<Product[]>([]);
  const products = useRef<Product[]>(
    JSON.parse(localStorage.getItem("products") as string)
  );

  const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value) {
      setSearchResult(
        products.current?.filter((item) => {
          return item.name.match(event.target.value);
        })
      );
    } else {
      setSearchResult([]);
    }
  };

  return (
    <>
      <div className=" max-md:hidden">
        <div
          className={
            "absolute w-full h-screen bg-black/30 z-20 " +
            (searchIsVisible ? " left-0 top-0 " : " hidden")
          }
          onClick={() => {
            setSearchIsVisible(false);
          }}
        ></div>
        <div
          className={
            "absolute right-44 top-14 p-3 z-20 flex flex-col gap-2 w-96 h-[90vh] bg-white overflow-scroll overflow-x-hidden" +
            (searchIsVisible ? " " : " hidden")
          }
        >
          {searchResult?.length !== 0 ? (
            searchResult?.map((product) => (
              <div className=" mx-0 h-16 bg-slate-200 p-2 flex flex-row cursor-pointer" key={product.id}>
                <img
                  src={product.image?.url}
                  className="bg-gray-400 w-12 h-12 object-contain object-center"
                  alt=""
                />
                <div className="ml-4">
                  <p className="w-64 line-clamp-1 ">{product.name}</p>
                  <p>price:{product.price.formatted_with_symbol}</p>
                </div>
              </div>
            ))
          ) : (
            <>no Product Found</>
          )}
        </div>
        <div className=" z-20">
          <div className="flex flex-row ">
            <div className="w-fit h-fit">
              <input
                onChange={(event) => {
                  handleSearchInput(event);
                }}
                id="search"
                type="text"
                placeholder="SearchProdcut"
                className={
                  " transition-all duration-200 px-3 outline-none " +
                  (searchIsVisible
                    ? " w-80 h-8 border-2 border-gray-400  rounded-md "
                    : " w-0 h-0")
                }
              />
            </div>
            <label
              htmlFor="search"
              className="w-8 h-8  bg-searchIcone bg-contain bg-no-repeat"
              onClick={() => {
                setSearchIsVisible((prev) => !prev);
              }}
            ></label>
          </div>
        </div>
      </div>
      {/**Mobile Version */}
      <div className=" md:hidden mt-2 flex flex-col">
        <div className="w-full h-fit">
          <input
            onChange={(event) => {
              handleSearchInput(event);
            }}
            id="search"
            type="text"
            placeholder="SearchProdcut"
            className={" px-3 outline-none w-full h-8 border-2 border-gray-400 rounded-md"}
          />
        </div>
        <div
          className={
            " pt-2 flex flex-col gap-2 w-full h-screen bg-white overflow-x-hidden overflow-scroll" 
          }
        >
          {searchResult?.length !== 0 ? (
            searchResult?.map((product) => (
              <div className=" mx-0 h-16 bg-slate-200 p-2 flex flex-row cursor-pointer" key={product.id}>
                <img
                  src={product.image?.url}
                  className="bg-gray-400 w-12 h-12 object-contain object-center max-mobile:hidden"
                  alt=""
                />
                <div className="ml-4">
                  <p className="w-32 line-clamp-1 ">{product.name}</p>
                  <p>price:{product.price.formatted_with_symbol}</p>
                </div>
              </div>
            ))
          ) : (
            <>no Product Found</>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchProducts;
