import { useSession } from "next-auth/react";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import CheckoutProduct from "../components/CheckoutProduct";
import { useRouter } from "next/router"
import Header from "../components/Header";
import { selectItems, selectTotalAmount, selectCartTotalQuantity } from "../slices/basketSlice";

import {ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Checkout() {

  const { data: session } = useSession()
  const items = useSelector(selectItems);
  const router = useRouter();
  const totalAmount = useSelector(selectTotalAmount);
  const totalItemsCount = useSelector(selectCartTotalQuantity);



  return (


    <div className="bg-gray-200 min-h-screen">
      <Header />

      <img
        className="w-full"
        style={{ paddingTop: '6.2rem' }}
        src="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/G/31/prime/Pay/LPA/WelcomePackNew/HO_Welcome_Pack_Desktop_New._CB646447819_.jpg"
        alt="adv-mg"
      />

      <div className="mx-3">
        {/* top adv section */}
        <div className="flex flex-grow text-sm items-center space-x-4">
          <div className="flex flex-grow space-x-8 items-center">
            <img
              src="https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/G/31/img17/Home/LA/CBCC_Javed/CBCC_maple_2._CB662107477_.jpg"
              height={40}
              width={60}
              alt="adv-img"
            />

            <p className="">
              Apply & get <strong>₹250</strong> back + rewards worth{" "}
              <strong>₹1950</strong> + <strong>3%</strong> back with Amazon Pay
              ICICI Bank credit card.
            </p>
          </div>

          <button className="flex-none w-20 text-xs bg-white shadow-md border rounded-lg p-1 hover:bg-gray-100 active:bg-blue-100 active:border-blue-200">
            Apply Now
          </button>
        </div>

        <main className="lg:flex max-w-screen-xl mx-auto space-y-5">
          {/* left section - items */}
          <div className="flex-grow m-5 shadow-sm">
            <div className="flex flex-col p-5 space-y-10 bg-white">
              {items.length === 0 ? (
                <div className="flex flex-col space-y-24">

                <h1 className="text-center md:text-start text-3xl border-b-2 pb-4">Your Cart is Empty</h1>
                <button onClick={() => router.push("/")} className="md:m-auto md:max-w-sm button px-24 ">Go Back To Store</button>
                </div>
              ) : (
              <h1 className="text-center md:text-start text-3xl border-b-2 pb-4">Shopping Cart</h1>
              )}
              {/* <h1 className="text-3xl border-b-2 pb-4">
                {items.length === 0 ? "Your Cart is Empty" : "Shopping Cart"}
              </h1> */}

              {items.map((item, index) => (
                <CheckoutProduct
                  key={index}
                  index={index}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  rate={item.rate}
                  description={item.description}
                  category={item.category}
                  image={item.image}
                  hasPrime={item.hasPrime}
                />
              ))}
            </div>

          </div>

          {/* Right section - subtotal */}
          {items.length > 0 && (
            <div className="flex flex-col space-y-5 bg-white p-10 shadow-md">
              {items.length >= 0 && (
                <>
                  <h2 className="whitespace-nowrap font-bold justify-start items-center flex">Subtotal ({totalItemsCount} items):
                    <span className="text-2xl bold">&nbsp;
                      {"₹" + (Math.floor(totalAmount * 10) + ".00")}
                    </span>

                  </h2>

                  <button className={`button mt-2 p-2 ${!session && 'from-gray-300 to-gray-500 border-gray-200 text-black text-base cursor-not-allowed active:from-gray-400 active:to-gray-500 active:border-gray-400'}`} >
                    {!session ? 'sign in to checkout' : "Proceed to Checkout"}
                  </button>
                </>
              )}
            </div>
          )}

        </main>
      </div>

      <ToastContainer autoClose={2000} pauseOnHover closeOnClick theme="colored" newestOnTop={true} />
    </div>
  );
}

export default Checkout;
