import React, { useState } from "react";
import Product from "./Product";
import ReactPaginate from "react-paginate";
import Image from "next/image";
import {GrPrevious, GrNext} from 'react-icons/gr'

function ProductFeed({ products }) {
  //pagination -
  const [pageNumber, setPageNumber] = useState(0);

  //will display 7 products per page
  const productPerPage = 8;
  const pagesVisited = pageNumber * productPerPage;

  const displayProducts = products
    .slice(pagesVisited, pagesVisited + productPerPage)
    .map(({ id, title, category, description, image, price, rating }) => (
      <Product
        key={id}
        id={id}
        title={title}
        price={price}
        description={description}
        category={category}
        image={image}
        rating={rating}
      />
    ));

  //ceil will round up the number
  const pageCount = Math.ceil(products.length / productPerPage);

  const ChangePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <div className="grid grid-flow-row-dense sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-36 mx-auto green-600 bg-green">
        {displayProducts}
      </div>
      <ReactPaginate
        previousLabel={<GrPrevious className=""/>}
        nextLabel={<GrNext className=""/>}
        pageCount={pageCount}
        onPageChange={ChangePage}
        containerClassName="flex text-xl text-gray-500 items-center space-x-8 p-14 justify-center items-center text-3xl select-none"
        pageClassName="flex items-center bg-gray-100 rounded-md transition ease-out hover:bg-gray-200  active:scale-90"
        pageLinkClassName="px-3 py-1"
        activeClassName="bg-teal-300 transition ease-out hover:bg-teal-400 text-white"
        previousClassName="flex items-center transition ease-out hover:bg-gray-200 rounded-md active:scale-90"
        previousLinkClassName="px-2 py-2"
        nextClassName="flex items-center transition ease-out hover:bg-gray-200 rounded-md active:scale-90"
        nextLinkClassName="px-2 py-2"
        // activeClassName="bg-teal-400 rounded px-3 py-1 text-white"
        // previousClassName="flex items-center transition ease-out hover:scale-150 px-3 py-1 active:scale-100"
        // nextClassName="flex items-center transition ease-out hover:scale-150 px-3 py-1 active:scale-100"
        // disabledClassName="hover:scale-100 px-3 py-1"
        // pageClassName="flex items-center transition ease-out hover:scale-150 px-3 py-1 active:scale-100"
        renderOnZeroPageCount={null}
        
      />
    </>
  );
}

export default ProductFeed;

// products
//         .slice(0, 4)
//         .map(({ id, title, category, description, image, price, rating }) => (
//           <Product
//             key={id}
//             id={id}
//             title={title}
//             price={price}
//             description={description}
//             category={category}
//             image={image}
//             rating={rating}
//           />
//         ))}

//       {/* populate a fill span image  */}
//       <img
//         className="sm:col-span-full"
//         src="https://links.papareact.com/dyz"
//         alt="img"
//       />

//       {/* populate rest of the elements in the grid */}
//       <div className="md:col-span-2">
//         {products
//           .slice(4, 5)
//           .map(({ id, title, category, description, image, price, rating }) => (
//             <Product
//               key={id}
//               id={id}
//               title={title}
//               price={price}
//               description={description}
//               category={category}
//               image={image}
//               rating={rating}
//             />
//           ))}
//       </div>

//       {products
//         .slice(5, products.length)
//         .map(({ id, title, category, description, image, price, rating }) => (
//           <Product
//             key={id}
//             id={id}
//             title={title}
//             price={price}
//             description={description}
//             category={category}
//             image={image}
//             rating={rating}
//           />
//         ))
