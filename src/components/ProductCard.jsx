import axios from "axios";
import React, { useEffect, useState } from "react";

function ProductCard() {
  const [data, setData] = useState();

  const fetchdata = async () => {
    console.log("aaaa");
    try {
      let res = await axios.get("https://fakestoreapi.com/products");

      setData(res.data);
    } catch (error) {
      alert("error");
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  useEffect(() => {
    console.log();
  }, [data]);

  return (
    <div className="flex flex-col justify-center items-center content-center mt-7">
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5  my-7 ">
        {/*Card 1*/}

        {data != null &&
          data.map((res) => {
            return (
              <div class="hover:scale-110 max-w-sm bg-[#F5F5F5] border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 flex flex-col p-3">
                <div
                  class="flex flex-col justify-center items-center content-center"
                  style={{ height: "200px" }}
                >
                  <img
                    src={res.image}
                    class="w-32 h-32 self-center justify-center m-10 mb-1 object-contain"
                    height="200px"
                    width="100%"
                    alt="itemimage"
                  />
                </div>
                <h1 class="px-3  text-center text-base font-normal mx-auto ">
                  ${res.price}
                </h1>
                <h1 class=" text-center text-lg font-semibold  mx-auto mb-10 ">
                  {res.title}
                </h1>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default ProductCard;
