import React from "react";
import { Navbar } from "flowbite-react";

function Nav() {
  return (
    <Navbar fluid={true} className=' bg-blue-600 absolute z-50 left-0 right-0'>
      <Navbar.Brand href="https://flowbite.com/">
        <span className="self-center whitespace-nowrap text-2xl font-bold dark:text-white mx-6">
          RPB STORE
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="p-5 mx-6">
        <Navbar.Link href="/navbars" className="font-bold" >
          Home
        </Navbar.Link>
        <Navbar.Link href="/navbars" className="font-bold">About</Navbar.Link>
        <Navbar.Link href="/navbars" className="font-bold">Services</Navbar.Link>
        <Navbar.Link href="/navbars" className="font-bold">Pricing</Navbar.Link>
        <Navbar.Link href="/navbars" className="font-bold">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Nav;
