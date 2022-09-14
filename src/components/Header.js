import React from 'react'
import Image from 'next/image';
import { Container } from 'postcss';
import { SearchIcon } from '@heroicons/react/outline/'
import { RiShoppingCartLine, RiMenuFill } from 'react-icons/ri'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/router"
import { useSelector } from 'react-redux';
import { selectItems, selectCartTotalQuantity } from '../slices/basketSlice';


function Header( {category}) {
    const { data: session } = useSession()
    const router = useRouter();
    const cartItems = useSelector(selectCartTotalQuantity);

    const handleAllButton = () => {

        return (
            console.log(category)
        )
    }

    return (
        <header className="fixed z-30 w-full">
            {/* top nav */}
            <div className='flex flex-grow items-center bg-amazon_blue p-1 py-2'>
                <div className="flex flex-grow items-center mt-1 sm:flex-grow-0">
                    <Image
                        onClick={() => router.push("/")}
                        src='https://links.papareact.com/f90'
                        alt="amazon-logo"
                        width={150}
                        height={40}
                        objectFit="contain"
                        className='cursor-pointer'
                    />
                </div>

                {/*custom search bar */}
                <div className='hidden sm:flex  items-center h-10 rounded-md flex-grow bg-yellow-400 hover:bg-yellow-500 cursor-pointer'>
                    <input className="p-2 px-4 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none" type="text"
                        placeholder="Search Amazon.in..."
                    />
                    <SearchIcon className="text-black h-12 p-4 transition ease-out hover:scale-150 active:scale-100" />
                </div>

                {/* right section */}
                <div className='text-white flex flex-row items-center text-xs md:text-sm space-x-6 mx-6 whitespace-nowrap'>
                    <div onClick={!session ? signIn : signOut} className="link">
                        <p>
                            {session ? `Hello, ${session.user.name}` : `Hello, Sign In`}
                        </p>
                        <p className='bold'>Account & Lists</p>
                    </div>
                    <div className="link">
                        <p>Returns</p>
                        <p className="bold">& Orders</p>
                    </div>
                    {/* cart icon */}
                    <div
                        onClick={() => router.push('/checkout')}
                        className="flex relative justify-center items-end link">
                        <span className="flex absolute bottom-6 left-7 rounded-full h-4 sm:h-5 w-4 sm:w-5 h justify-center items-center text-sm sm:text-lg bg-yellow-500 font-extrabold text-black">
                            {cartItems}
                        </span>
                        <RiShoppingCartLine size={40} className="" />
                        <p className="hidden sm:flex pb-1 bold">Cart</p>
                    </div>
                </div>

            </div>
            {/* bottom nav */}
            <div className="flex items-center bg-amazon_blue-light text-white text-sm space-x-3 p-2 pl-6">
                <p onClick={handleAllButton} className="link flex items-center justify-center bold">
                    <RiMenuFill className='h-6 mr-1' />
                    All
                </p>
                <p className='link'>Prime Video</p>
                <p className="link">Fresh</p>
                <p className="link">Electronics</p>
                <p className="hidden md:inline-flex link">Amazon Pay</p>
                <p className="hidden md:inline-flex link">Mobiles</p>
                <p className="hidden md:inline-flex link">Buy Again</p>
                <p className="hidden md:inline-flex link">Sell</p>
                <p className="hidden md:inline-flex link">Fashion</p>
                <p className="hidden md:inline-flex link">Gift Ideas</p>
            </div>
        </header>
    )
}

export default Header