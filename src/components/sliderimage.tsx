import { useEffect, useState } from "react";

export default function Slider() {
  const [sliderImage, setSliderImage] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => setSliderImage((prev) => !prev), 3000);
    return () => clearInterval(interval);
  });
  return (
    <div className=" mt-20 w-full h-fit max-sm:mt-12 ">
      <div
        className={
          "absolute bg-no-repeat bg-center transition-all duration-500  bg-img3 max-md:bg-img1 bg-cover w-full max h-[550px] max-lg:h-[400px]  max-md:h-[300px] max-sm:h-[280px] 2kmonitor:h-[850px] 4kmonitor:h-[1280px]" +
          (sliderImage ? " ml-[100%]  " : "  ml-0 ")
        }
      ></div>
      <div
        className={
          " bg-no-repeat bg-center transition-all duration-500 bg-cover w-full bg-img4 max-md:bg-img2 h-[550px] max-lg:h-[400px] max-md:h-[300px] max-sm:h-[280px] 2kmonitor:h-[850px] 4kmonitor:h-[1280px]" +
          (sliderImage ? " ml-0 " : " -ml-[100%]  ")
        }
      ></div>
    </div>
  );
}
