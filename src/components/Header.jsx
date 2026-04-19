import React, { useState } from "react";
import { Link } from "react-router";

import searchIcon from "../assets/icons/search.png";
import userIcon from "../assets/icons/user.png";
import favoriteIcon from "../assets/icons/carbon_favorite.png";
import cartIcon from "../assets/icons/cart.png";
import ri_menuIcon from "../assets/icons/ri_menu-2-fill.png";

const menuItems = [
  { id: 1, text: "Home", link: "/" },
  { id: 2, text: "Shop", link: "/shop" },
  { id: 3, text: "Product", link: "/product" },
  { id: 4, text: "Pages", link: "/pages" },
  { id: 5, text: "Blog", link: "/blog" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white py-4 md:py-6">
      <nav>
        <div className="container mx-auto px-4">
          
          {/* Top Bar */}
          <div className="flex justify-between items-center gap-4">
            
            {/* Logo */}
            <div className="flex items-center gap-3">
              <button
                className="lg:hidden"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <img src={ri_menuIcon} alt="menu" className="w-6" />
              </button>

              <img src="/logo.png" alt="logo" className="h-8 md:h-10" />
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:block">
              <ul className="flex items-center gap-6">
                {menuItems.map((item) => (
                  <li key={item.id}>
                    <Link
                      className="text-black text-sm font-medium font-jost hover:text-gray-600 transition"
                      to={item.link}
                    >
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Icons */}
            <div className="flex items-center gap-3 md:gap-4">
              <IconBox icon={searchIcon} />
              <IconBox icon={userIcon} />
              <IconBox icon={favoriteIcon} count />
              <IconBox icon={cartIcon} count />
            </div>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="lg:hidden mt-4 border-t pt-4">
              <ul className="flex flex-col gap-4">
                {menuItems.map((item) => (
                  <li key={item.id}>
                    <Link
                      onClick={() => setMenuOpen(false)}
                      className="text-black text-sm font-medium"
                      to={item.link}
                    >
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>

      {/* Search Section */}
      <div className="container mx-auto px-4 mt-4">
        <div className="grid grid-cols-1 md:grid-cols-[40px_160px_1fr] gap-3 items-center">
          
          {/* Menu Button (only desktop extra menu if needed) */}
          <button className="hidden md:block">
            <img src={ri_menuIcon} alt="icon" />
          </button>

          {/* Category Select */}
          <div>
            <select className="w-full h-10 border px-2 text-sm">
              <option>All Departments</option>
              <option>Fashion</option>
            </select>
          </div>

          {/* Search Form */}
          <form className="grid grid-cols-1 sm:grid-cols-[1fr_120px_60px] gap-2 h-auto sm:h-10">
            
            <input
              className="w-full border px-3 h-10"
              type="text"
              placeholder="Search..."
            />

            <select className="border px-2 h-10">
              <option>All</option>
              <option>Fashion</option>
            </select>

            <button className="bg-black text-white flex items-center justify-center h-10">
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
              >
                <path
                  d="M17.75 17.75L13.5533 13.5533M15.75 8.25C15.75 4.10786 12.3921 0.75 8.25 0.75C4.10786 0.75 0.75 4.10786 0.75 8.25C0.75 12.3921 4.10786 15.75 8.25 15.75C12.3921 15.75 15.75 12.3921 15.75 8.25Z"
                  stroke="#fff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

          </form>
        </div>
      </div>
    </header>
  );
};

function IconBox({ icon, count = false }) {
  return (
    <button className="w-6 h-6 flex items-center justify-center relative">
      <img src={icon} alt="icon" />

      {count && (
        <span className="w-4 h-4 rounded-full flex items-center justify-center bg-red-500 text-white text-[10px] absolute -top-1 -right-2">
          0
        </span>
      )}
    </button>
  );
}

export default Header;