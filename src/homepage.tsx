import { createContext, useState } from "react";

import Header from "./components/Header/header";
import Slider from "./components/sliderimage";
import Productcontainer from "./components/productContainer/productcontainer";
import Footer from "./components/footer";

export const ThemeContext = createContext<string>("");

const HomePage = () => {
  //state for save categories
  const [categories, setCategories] = useState<string[]>(["all", "all"]);

  //state for save sortproductList
  const [sortBy, setSortBy] = useState<string>("low-high");

  //state for save theme this state will sendBy ThemeContext
  const [theme, setTheme] = useState<string>("cold");

  return (
    //homepage Container and change background color with themestate
    <div
      className={
        "w-full h-fit" +
        (theme === "cold" ? " bg-gray-200 " : "") +
        (theme === "warm" ? " bg-orange-100/70" : "") +
        (theme === "light" ? " bg-white" : "") +
        (theme === "dark" ? " bg-black/40" : "")
      }
    >
      {/** send theme to all component by themcontext */}
      <ThemeContext.Provider value={theme}>
        <Header setCategories={setCategories} setTheme={setTheme}></Header>
        <Slider></Slider>
        <Productcontainer
          categories={categories}
          setCategories={setCategories}
          sortBy={sortBy}
          setSortBy={setSortBy}
        ></Productcontainer>
        <Footer></Footer>
      </ThemeContext.Provider>
    </div>
  );
};

export default HomePage;
