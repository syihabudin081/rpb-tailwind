import React from "react";

function Carousels() {
  return (
    <div
      id="carouselExampleCrossfade"
      class="carousel slide carousel-fade relative"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
        <button
          type="button"
          data-bs-target="#carouselExampleCrossfade"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCrossfade"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCrossfade"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner relative w-full overflow-hidden">
        <div class="carousel-item active float-left w-full">
          <div className="h-screen w-full bg-blue-600 flex items-center content-center justify-center">
            <div className="flex flex-col p-36 gap-10  ">
              <h1 className="font-extrabold text-6xl">
                TRUSTED.<br></br>
                APPAREL
              </h1>
              <h1 className="w-1/2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </h1>
              <h1 className="p-6 rounded-sm bg-black text-white text-center w-fit">Explore Now</h1>
            </div>
          </div>
        </div>
        <div class="carousel-item float-left w-full">
        <div className="h-screen w-full bg-blue-600 flex items-center content-center justify-center">
            <div className="flex flex-col p-36 gap-10  ">
              <h1 className="font-extrabold text-6xl">
                TRUSTED.<br></br>
                APPAREL
              </h1>
              <h1 className="w-1/2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </h1>
              <h1 className="p-6 rounded-sm bg-black text-white text-center w-fit">Explore Now</h1>
            </div>
          </div>
        </div>
        <div class="carousel-item float-left w-full">
        <div className="h-screen w-full bg-blue-600 flex items-center content-center justify-center">
            <div className="flex flex-col p-36 gap-10  ">
              <h1 className="font-extrabold text-6xl">
                TRUSTED.<br></br>
                APPAREL
              </h1>
              <h1 className="w-1/2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </h1>
              <h1 className="p-6 rounded-sm bg-black text-white text-center w-fit">Explore Now</h1>
            </div>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
        type="button"
        data-bs-target="#carouselExampleCrossfade"
        data-bs-slide="prev"
      >
        <span
          class="carousel-control-prev-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
        type="button"
        data-bs-target="#carouselExampleCrossfade"
        data-bs-slide="next"
      >
        <span
          class="carousel-control-next-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousels;
