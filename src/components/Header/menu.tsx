import { useContext, useState } from "react";
import { Link } from "react-scroll";
import { ThemeContext } from "../../homepage";
import SearchProducts from "./SearchProducts";

type props = {
  setCategories: React.Dispatch<React.SetStateAction<string[]>>;
};

const Menu = ({ setCategories }: props) => {
  const [menuIsVidible, setMenuIsVisible] = useState(false);
  const theme: string = useContext(ThemeContext);

  return (
    <div className="my-auto cursor-pointer">
      <div
        className="w-8 h-8 bg-contain bg-no-repeat  bg-menuIcone  "
        onClick={() => setMenuIsVisible((prev) => !prev)}
      ></div>
      <div
        className={
          "absolute left-0 top-0  h-screen z-20 bg-black/30" +
          (menuIsVidible ? " w-full" : " w-0")
        }
        onClick={() => setMenuIsVisible((prev) => !prev)}
      ></div>
      <div
        className={
          "h-screen  absolute w-[20%] max-md:w-[45%] max-sm:w-[55%] max-sm:text-sm z-20 top-0 transition-all duration-300" +
          (menuIsVidible
            ? " right-0 "
            : " right-[-20%] max-md:right-[-45%] max-sm:right-[-55%]") +
          (theme === "cold" ? " bg-gray-200 " : "") +
          (theme === "warm" ? " bg-orange-200  " : "") +
          (theme === "light" ? " bg-white " : "") +
          (theme === "dark" ? " bg-neutral-900 " : "")
        }
      >
        <div className=" w-full flex flex-col h-fit p-5 ">
          <Link
            to={"controlBar"}
            smooth={true}
            duration={200}
            className={
              "" +
              (theme === "cold" ? " text-black/90 " : "") +
              (theme === "warm" ? " text-black/90  " : "") +
              (theme === "light" ? " text-black/90 " : "") +
              (theme === "dark" ? " text-white/50 " : "")
            }
          >
            Categories
          </Link>
          <span className=" w-full h-[1px] mt-2 bg-black/50"></span>
          <Link
            to="controlBar"
            smooth={true}
            duration={200}
            className={
              " p-2  mt-2 cursor-pointer   rounded-md " +
              (theme === "cold"
                ? "hover:bg-gray-700  hover:text-gray-200 text-gray-700 bg-gray-100 "
                : "") +
              (theme === "warm"
                ? "hover:bg-orange-700 hover:text-gray-200 text-gray-700 bg-orange-100 "
                : "") +
              (theme === "light"
                ? " hover:bg-neutral-700  hover:text-neutral-200 text-gray-700 bg-neutral-200 "
                : "") +
              (theme === "dark"
                ? "hover:bg-white/80 hover:text-black/80 text-white/50 bg-neutral-700"
                : "")
            }
            onClick={() => {
              setCategories(["mens", "all"]);
              setMenuIsVisible(false);
            }}
          >
            mens
          </Link>
          <Link
            to="controlBar"
            smooth={true}
            duration={200}
            className={
              " p-2  mt-2 cursor-pointer   rounded-md " +
              (theme === "cold"
                ? "hover:bg-gray-700  hover:text-gray-200 text-gray-700 bg-gray-100 "
                : "") +
              (theme === "warm"
                ? "hover:bg-orange-700 hover:text-gray-200 text-gray-700 bg-orange-100 "
                : "") +
              (theme === "light"
                ? " hover:bg-neutral-700  hover:text-neutral-200 text-gray-700 bg-neutral-200 "
                : "") +
              (theme === "dark"
                ? "hover:bg-white/80 hover:text-black/80 text-white/50 bg-neutral-700"
                : "")
            }
            onClick={() => {
              setCategories(["womens", "allw"]);
              setMenuIsVisible(false);
            }}
          >
            womens
          </Link>
          <Link
            to="controlBar"
            smooth={true}
            duration={200}
            className={
              " p-2  mt-2 cursor-pointer   rounded-md " +
              (theme === "cold"
                ? "hover:bg-gray-700  hover:text-gray-200 text-gray-700 bg-gray-100 "
                : "") +
              (theme === "warm"
                ? "hover:bg-orange-700 hover:text-gray-200 text-gray-700 bg-orange-100 "
                : "") +
              (theme === "light"
                ? " hover:bg-neutral-700  hover:text-neutral-200 text-gray-700 bg-neutral-200 "
                : "") +
              (theme === "dark"
                ? "hover:bg-white/80 hover:text-black/80 text-white/50 bg-neutral-700"
                : "")
            }
            onClick={() => {
              setCategories(["backpack", "all"]);
              setMenuIsVisible(false);
            }}
          >
            backpack
          </Link>
          <Link
            to="controlBar"
            smooth={true}
            duration={200}
            className={
              " p-2  mt-2 cursor-pointer   rounded-md " +
              (theme === "cold"
                ? "hover:bg-gray-700  hover:text-gray-200 text-gray-700 bg-gray-100 "
                : "") +
              (theme === "warm"
                ? "hover:bg-orange-700 hover:text-gray-200 text-gray-700 bg-orange-100 "
                : "") +
              (theme === "light"
                ? " hover:bg-neutral-700  hover:text-neutral-200 text-gray-700 bg-neutral-200 "
                : "") +
              (theme === "dark"
                ? "hover:bg-white/80 hover:text-black/80 text-white/50 bg-neutral-700"
                : "")
            }
            onClick={() => {
              setCategories(["all", "all"]);
              setMenuIsVisible(false);
            }}
          >
            all
          </Link>
          <span className=" w-full h-[1px] mt-2 bg-black/50 md:hidden"></span>
          <div className="md:hidden">
            <SearchProducts></SearchProducts>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
