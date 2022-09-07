// import { castImmutable } from 'immer'
import Image from "next/image";
import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";

function Product({ id, title, category, description, image, price, rating }) {
  const { rate, count } = rating;
  const [hasPrime] = useState(Math.random() < 0.5);

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
      <div className="my-3 bold">{"₹" + (Math.floor(price*10)+".00")}</div>
      <h4 className="mb-2 bold line-clamp-2">{title}</h4>
      <div className="flex items-center ">
        {Array(Math.floor(rate))
          .fill()
          .map((_, index) => (
            <AiFillStar key={index} className="h-5 text-yellow-500" />
          ))}
        <p className="pl-2 text-sm">{count}</p>
      </div>

      <p className="text-sm my-2 line-clamp-2">{description}</p>

      
      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-3 mb-2">
          <img
            src="https://links.papareact.com/fdw"
            height={20}
            width={40}
            alt="prime-logo"
          />
          <p className="text-xs text-gray-500">FREE Delivery</p>
        </div>
      )}
      <button className="mt-auto button">Add to Cart</button>
    </div>
  );
}

export default Product;
