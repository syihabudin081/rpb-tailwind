import React from "react";
import { Navbar } from "flowbite-react";

function Nav() {
  return (
    // <Navbar fluid={true} className="absolute z-50 left-0 right-0">
    //   <Navbar.Brand href="https://flowbite.com/">
    //     <span className="self-center whitespace-nowrap text-2xl font-bold dark:text-white mx-6">
    //       RPB STORE
    //     </span>
    //   </Navbar.Brand>
    //   <Navbar.Toggle />
    //   <Navbar.Collapse className="p-5 mx-6">
    //     <Navbar.Link href="/" className="font-bold" >
    //       Home
    //     </Navbar.Link>
    //     <Navbar.Link href="/product" className="font-bold">About</Navbar.Link>
    //     <Navbar.Link href="/navbars" className="font-bold">Services</Navbar.Link>
    //     <Navbar.Link href="/navbars" className="font-bold">Pricing</Navbar.Link>
    //     <Navbar.Link href="/navbars" className="font-bold">Contact</Navbar.Link>
    //   </Navbar.Collapse>
    // </Navbar>
    <nav
      className="
  
  z-50
  w-full
  flex flex-wrap
  items-center
  justify-between
  py-4
  bg-blue-600
  text-gray-500
  hover:text-gray-700
  focus:text-gray-700
  
  navbar navbar-expand-lg navbar-light
  "
    >
      <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
        <button
          className="
navbar-toggler
text-gray-500
border-0
hover:shadow-none hover:no-underline
py-2
px-2.5
bg-transparent
focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline
    "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="bars"
            className="w-6"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
            ></path>
          </svg>
        </button>
        <div
          className="collapse navbar-collapse flex-grow items-center"
          id="navbarSupportedContent"
        >
          <a
            className="
  flex
  items-center
  text-gray-900
  hover:text-gray-900
  focus:text-gray-900
  mt-2
  lg:mt-0
  mr-1
"
            href="#"
          >
            <span className="self-center whitespace-nowrap text-2xl font-bold dark:text-white mx-6">
              RPB STORE
            </span>
          </a>
          {/* Left links */}

          {/* Left links */}
        </div>
        {/* Collapsible wrapper */}
        {/* Right elements */}
        <ul className="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
          <li className="nav-item p-2">
            <a className="nav-link text-black font-bold p-0" href="/">
              Home
            </a>
          </li>
          <li className="nav-item p-2">
            <a className="nav-link text-black font-bold p-0" href="/product">
              Product
            </a>
          </li>
          <li className="nav-item p-2">
            <a className="nav-link text-black font-bold p-0" href="#">
              Projects
            </a>
          </li>
        </ul>
        {/* Right elements */}
      </div>
    </nav>
  );
}

export default Nav;
