import Image from "next/image";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, reduceCartItemQuantity, } from '../slices/basketSlice'
import { selectCartQuantity } from '../slices/basketSlice'
import { useEffect } from "react";
import { toast } from 'react-toastify';


function CheckoutProduct({ index, id, title, price, rate, description, category, image, hasPrime }) {

    const cartQuantity = useSelector(selectCartQuantity);
    const dispatch = useDispatch()

    //inline arrow function for adding item from cart
    const increaseItemCount = () => {

        const product = { index, id, title, price, rate, description, category, image, hasPrime }

        //push item to redux store
        dispatch(addToCart(product));
        toast.success(`${title} quantity increased.`)

        
    }

    const decreaseItemCount = () => {

        const product = { index, id, title, price, rate, description, category, image, hasPrime }

        // decrease the item count until item quantity = 1
        if (cartQuantity[index] > 1) {
            dispatch(reduceCartItemQuantity(product));
            toast.warn(`${title} quantity decreased.`)
        }
    }

    //inline arrow function for removing items from cart
    const removeItemFromCart = () => {

        toast.warn(`${title} Removed from cart`)
        //remove item from redux store
        dispatch(removeFromCart({ id }));   

    }



    return (
        <div className="flex flex-col justify-center items-center">

            <div className="grid grid-cols-5 bg-white">
                <Image src={image} height={150} width={150} objectFit="contain" />

                {/* middle */}
                <div className="grid col-span-4 sm:col-span-3 text-black mx-5">

                    <div className="text-xl"><p>{title}</p></div>

                    <p className="text-xs line-clamp-3">{description}</p>

                    <div className="pt-2 space-y-2 flex flex-col my-3">
                        <div className="select-none flex justify-start items-center">
                            <span onClick={decreaseItemCount} className={`${cartQuantity[index] === 1 ? "cursor-not-allowed bg-gradient-to-t from-gray-500 to-gray-300" : "cursor-pointer active:bg-slate-400"} border-none px-3 items-center justify-center bg-slate-300 rounded-l-md text-xl font-bold  `}>-</span>
                            <span className="flex items-center justify-center w-14 border-y-2 border-x outline-gray-400 border-gray-400 px-5 font-bold">{cartQuantity[index]}</span>
                            <span onClick={increaseItemCount} className=" cursor-pointer px-3 items-center border-none justify-center bg-slate-300 rounded-r-md text-xl font-bold active:bg-slate-400">+</span>
                        </div>
                        <span className="text-2xl bold">
                            {"₹" + (Math.floor(price * 10) + ".00")}
                        </span>
                    </div>
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


                </div>
                {/* right */}
                <div className="hidden sm:flex flex-col space-y-5 mr-3 my-auto justify-self-end">

                    {/* <button onClick={increaseItemCount} className="p-2 text-sm button">Count +</button> */}
                    <button onClick={removeItemFromCart} className="p-2 text-xs button">Remove from Cart</button>
                </div>


            </div>

            <div className="sm:hidden my-auto space-x-8 justify-self-center">

                {/* <button onClick={increaseItemCount} className="p-2 text-sm button">Count +</button> */}
                <button onClick={removeItemFromCart} className="p-2 text-sm button">Remove from Cart</button>
            </div>
        </div>
    )
}

export default CheckoutProduct