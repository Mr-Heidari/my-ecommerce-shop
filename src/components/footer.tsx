const Footer = () => {
  return (
    <div className="w-full mt-20 h-fit bg-zinc-700 p-10">
      <div className=" flex flex-row mx-20 justify-between max-sm:flex-col max-sm:gap-5">
        <div>
          <p className=" text-2xl font-semibold text-white/80">
            PaymentMethods
          </p>
          <div className="flex flex-row  w-32 flex-wrap">
            <span className="bg-amex w-16 h-12 bg-contain bg-no-repeat"></span>
            <span className="bg-visa w-16 h-12 bg-contain bg-no-repeat"></span>
            <span className="bg-paypal w-16 h-12 bg-contain bg-no-repeat"></span>
            <span className="bg-discover w-16 h-12 bg-contain bg-no-repeat"></span>
            <span className="bg-cash w-16 h-12 bg-contain bg-no-repeat"></span>
            <span className="bg-mastercard w-16 h-12 bg-contain bg-no-repeat"></span>
          </div>
        </div>
        <div className=" flex flex-col flex-wrap gap-1 text-white/80  cursor-pointer ">
          <p className=" text-2xl font-semibold">Services</p>
          <p>ContactUs</p>
          <p>FAQs</p>
          <p>Campaigns</p>
          <p>Branding</p>
          <p>Offline</p>
        </div>
        <div className=" flex flex-col flex-wrap gap-1 text-white/80  cursor-pointer ">
          <p className=" text-2xl font-semibold">About</p>
          <p>OurStory</p>
          <p>Career</p>
          <p>Benefits</p>
          <p>Team</p>
        </div>
        <div className=" flex flex-col flex-wrap gap-1 text-white/80  cursor-pointer ">
          <p className=" text-2xl font-semibold">Legal</p>
          <p>Term & Conditions</p>
          <p>Privacy & Policy</p>
          <p>Term of use</p>
        </div>
        <div>
          <div >
            <form action="" className=" flex flex-col gap-3 w-60 items-center">
              <input
                type="text"
                className="w-full h-8 outline-none border-none rounded-md  px-3 bg-white/80"
                placeholder="EnterName"
              />
              <input
                type="text"
                className="w-full  h-8 outline-none border-none rounded-md  px-3 bg-white/80"
                placeholder="EnterEmail"
              />
              <input
                type="password"
                className="w-full  h-8 outline-none border-none rounded-md  px-3 bg-white/80"
                placeholder="EnterPasswor"
              />
              <input
                type="submit"
                value={"SignUp"}
                className="w-full  border-none bg-black/80 text-white p-2 rounded-md cursor-pointer"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
