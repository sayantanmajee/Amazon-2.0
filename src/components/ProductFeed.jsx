import React from "react";
import Product from "./Product";

function ProductFeed({ products }) {
  return (
    // populate first 4 grid elements
    <div className="grid grid-flow-row-dense sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-36 mx-auto">
      {products
        .slice(0, 4)
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
        ))}

      {/* populate a fill span image  */}
      <img
        className="sm:col-span-full"
        src="https://links.papareact.com/dyz"
        alt="img"
      />

      {/* populate rest of the elements in the grid */}
      <div className="md:col-span-2">
        {products
          .slice(4, 5)
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
          ))}
      </div>

      {products
        .slice(5, products.length)
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
        ))}
    </div>
  );
}

export default ProductFeed;
