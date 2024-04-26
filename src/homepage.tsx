import { useState } from "react";

import Header from "./components/Header/header";
import Slider from "./components/sliderimage";
import Productcontainer from "./components/productContainer/productcontainer";
import Footer from "./components/footer";

const HomePage = () => {
  const [categories, setCategories] = useState<string[]>(["all", "all"]);
  const [sortBy, setSortBy] = useState<string>("low-high");

  return (
    <div>
      <Header setCategories={setCategories}></Header>
      <Slider></Slider>
      <Productcontainer
        categories={categories}
        setCategories={setCategories}
        sortBy={sortBy}
        setSortBy={setSortBy}
      ></Productcontainer>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
