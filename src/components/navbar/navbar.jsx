import React, { useState } from "react";
import { DesktopNavItemComponent, MobileNavItemComponent } from "./nav-item";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Array of navbar links
  const links = [
    { name: "Home", href: "/" },
    { name: "Todo", href: "/todo" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold">MyBrand</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {links.map((link, index) => (
            <DesktopNavItemComponent key={link.name} link={link} />
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}>
          {/* Hamburger icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-blue-700 px-4 pb-4 space-y-2">
          {links.map((link) => (
            <MobileNavItemComponent key={link.name} link={link} />
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
