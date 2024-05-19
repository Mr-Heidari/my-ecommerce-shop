import React, { useState } from "react";

const CheckoutPage = () => {
  const [inputValidation, setInputValidation] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [emailValidation, setEmailValidation] = useState(false);
  const handleInputs = (
    event: React.ChangeEvent<HTMLInputElement>
  ): boolean => {
    if (event.target.value) {
      return true;
    }
    return false;
  };

  const ValidateEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (event.target.value.match(validRegex)) {
      setEmailValidation(true);
    } else {
      setEmailValidation(false);
    }
  };

  return (
    <div>
      <div className="w-[500px] flex flex-col gap-5 p-5 h-[500px] absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 rounded-sm border-[1px] border-black">
        <h1 className="text-3xl mx-auto">Checkout</h1>
        <div className="flex flex-row ">
          <div className="flex flex-row justify-between gap-2 mx-auto text-sm">
            <div className="w-8 h-8 bg-blue-800 rounded-full border-none text-white flex">
              <p className="m-auto">1</p>
            </div>
            <p className="m-auto">shopping address</p>
            <div className="w-32 h-[2px] m-auto bg-black"></div>

            <p className="m-auto">payment detail</p>
            <div className="w-8 h-8 bg-gray-400 rounded-full border-none text-white flex">
              <p className="m-auto">2</p>
            </div>
          </div>
        </div>
        <p>shopping address</p>
        <form action="/payment">
          <div className="flex flex-row flex-wrap gap-8 w-full h-fit p-1 justify-between text-sm">
            <div>
              <input
                onChange={(event) => {
                  inputValidation[0] = handleInputs(event);
                  setInputValidation([...inputValidation]);
                  console.log(inputValidation);
                }}
                type="text"
                className="w-52 border-b-2 rounded-sm outline-none border-black/70 p-2 h-8"
                placeholder="First name*"
              />
              <p
                className={
                  "text-xs text-gray-500/50 " +
                  (inputValidation[0] ? " opacity-0" : "  ")
                }
              >
                Cant be Empty
              </p>
            </div>
            <div>
              <input
                onChange={(event) => {
                  inputValidation[1] = handleInputs(event);
                  setInputValidation([...inputValidation]);
                }}
                type="text"
                className="w-52 border-b-2 rounded-sm outline-none border-black/70 p-2 h-8"
                placeholder="Last name*"
              />
              <p
                className={
                  "text-xs text-gray-500/50 " +
                  (inputValidation[1] ? " opacity-0" : "  ")
                }
              >
                Cant be Empty
              </p>
            </div>
            <div>
              <input
                onChange={(event) => {
                  inputValidation[2] = handleInputs(event);
                  setInputValidation([...inputValidation]);
                }}
                type="text"
                className="w-52 border-b-2 rounded-sm outline-none border-black/70 p-2 h-8"
                placeholder="Address*"
              />
              <p
                className={
                  "text-xs text-gray-500/50 " +
                  (inputValidation[2] ? " opacity-0" : "  ")
                }
              >
                Cant be Empty
              </p>
            </div>
            <div>
              <input
                onChange={(event) => {
                  inputValidation[3] = handleInputs(event);
                  setInputValidation([...inputValidation]);
                  ValidateEmail(event);
                }}
                type="text"
                className="w-52 border-b-2 rounded-sm outline-none border-black/70 p-2 h-8"
                placeholder="Email*"
              />
              <p
                className={
                  "text-xs text-gray-500/50 " +
                  (inputValidation[3] ? " hidden" : "  ")
                }
              >
                Cant be Empty
              </p>
              <p
                className={
                  "text-xs text-gray-500/50 " +
                  (inputValidation[3]
                    ? emailValidation
                      ? " hidden "
                      : " "
                    : "")
                }
              >
                invalid email address
              </p>
            </div>
            <div>
              <input
                onChange={(event) => {
                  inputValidation[4] = handleInputs(event);
                  setInputValidation([...inputValidation]);
                }}
                type="text"
                className="w-52 border-b-2 rounded-sm  border-black/70 p-2 h-8"
                placeholder="City*"
              />
              <p
                className={
                  "text-xs text-gray-500/50 " +
                  (inputValidation[4] ? " opacity-0" : "  ")
                }
              >
                Cant be Empty
              </p>
            </div>
            <div>
              <input
                onChange={(event) => {
                  inputValidation[5] = handleInputs(event);
                  setInputValidation([...inputValidation]);
                }}
                type="text"
                className="w-52 border-b-2 rounded-sm outline-none border-black/70 p-2 h-8"
                placeholder="Zip /PostalCode*"
              />
              <p
                className={
                  "text-xs text-gray-500/50 " +
                  (inputValidation[5] ? " opacity-0" : "  ")
                }
              >
                Cant be Empty
              </p>
            </div>
            <div className="flex w-full">
              <input
                disabled={
                  inputValidation.every((elemnt) => elemnt === true)
                    ? emailValidation === true
                      ? false
                      : true
                    : true
                }
                type="submit"
                className="w-40 h-8 disabled:bg-gray-400 disabled:cursor-default bg-blue-800 cursor-pointer mx-auto text-white rounded-sm"
                value={"sumbit & payment"}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
