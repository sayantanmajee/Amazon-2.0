import Image from "next/image";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from '../slices/basketSlice'

function CheckoutProduct({ id, title, price, rate, description, category, image, hasPrime }) {

    const dispatch = useDispatch()

    //inline arrow function for adding item from cart
    const increaseItemCount = () => {

        const product = {id, title, price, rate, description, category, image, hasPrime}

        //push item to redux store
        dispatch(addToCart(product));
    }

    //inline arrow function for removing items from cart
    const removeItemFromCart = () => {

        //remove item from redux store
        dispatch(removeFromCart({id}));


    


    }

    return (
        <div className="flex flex-col justify-center items-center">

            <div className="grid grid-cols-5 bg-white">
                <Image src={image} height={150} width={150} objectFit="contain" />

                {/* middle */}
                <div className="grid col-span-4 sm:col-span-3 text-black mx-5">
                    <div className="text-xl"><p>{title}</p></div>

                    <p className="text-xs line-clamp-3">{description}</p>
                    <div className="flex space-x-6 my-3 items-center">
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

                    <button onClick={increaseItemCount} className="p-2 text-sm button">Count +</button>
                    <button onClick={removeItemFromCart} className="p-2 text-xs button">Remove from Cart</button>
                </div>


            </div>

            <div className="sm:hidden my-auto space-x-8 justify-self-center">

                <button onClick={increaseItemCount} className="p-2 text-sm button">Count +</button>
                <button onClick={removeItemFromCart} className="p-2 text-sm button">Remove from Cart</button>
            </div>
        </div>
    )
}

export default CheckoutProduct