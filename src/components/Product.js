// import { castImmutable } from 'immer'
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../slices/basketSlice"

function Product({ id, title, category, description, image, price, rating }) {
  const { rate, count } = rating;
  const [hasPrime, setHasPrime] = useState(null);
  const [randomNum, setRandomNum] = useState(null);
  const dispatch = useDispatch()


  const min = 100;
  const max = 1000;

  useEffect(() => {
    setHasPrime(Math.random() < 0.5);
    setRandomNum(Math.floor(Math.random() * (max - min) + min));


  }, []);

  const addItemToCart = () => {
    const product = {
      id, title, category, description, image, price, rating, hasPrime
    }

    //sending the product as an action to the REDUX store ..basket slice
    dispatch(addToCart(product));

  }

  // Create our number formatter.
  //   var formatter = new Intl.NumberFormat("en-US", {
  //     style: "currency",
  //     currency: "INR",

  //     // These options are needed to round to whole numbers if that's what you want.
  //     //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //     //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  //   });

  return (
    <div className="flex flex-col sm: relative m-5 bg-white z-30 p-10 rounded-md">
      <p className="absolute top-2 right-3 text-sm italic">{category}</p>
      <Image
        src={image}
        height={200}
        width={200}
        objectFit="contain"
        alt="product-img"
      />
      <div className="flex space-x-6 my-3 items-center">
        <span className="text-2xl bold">
          {"₹" + (Math.floor(price * 10) + ".00")}
        </span>
        <span className="line-through text-xs text-gray-500">
          {"₹" + (Math.floor(price * 10) + randomNum + ".00")}
        </span>
      </div>

      <h4 className="mb-2 bold line-clamp-2">{title}</h4>
      <div className="flex items-center ">
        {/* populating filled star according to rating value */}
        {Array(Math.round(rate))
          .fill()
          .map((_, index) => (
            <AiFillStar key={index} className="h-5 text-yellow-500" />
          ))}
        {/* populating nonfiled star (5-rate) */}
        {Array(5 - Math.round(rate))
          .fill()
          .map((_, index) => (
            <AiOutlineStar key={index} className="h-5 text-yellow-500" />
          ))}

        <p className="pl-2 text-sm">{count}</p>
      </div>

      <p className="text-sm my-2 line-clamp-2">{description}</p>

      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-3 mb-2">
          <Image
            src="https://links.papareact.com/fdw"
            height={40}
            width={40}
            alt="prime-logo"
            objectFit="contain"
          />
          <p className="text-xs text-gray-500">FREE Delivery</p>
        </div>
      )}
      <button onClick={addItemToCart} className="mt-auto button">Add to Cart</button>
    </div>
  );
}

export default Product;
