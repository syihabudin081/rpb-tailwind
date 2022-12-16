import React from "react";
import ProductCard from "../components/ProductCard";

function Product() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="text-4xl font-bold text-black my-7 w-1/2 mx-auto self-start">
          Our<span className="text-blue-500"> Product </span>
        </div>
        <div className="text-lg w-1/2">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
    <ProductCard/>
    </>
  );
}

export default Product;
