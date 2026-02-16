import React from "react";
import { Link } from "react-router";

import searchIcon from "../assets/icons/search.png";
import userIcon from "../assets/icons/user.png";
import favoriteIcon from "../assets/icons/carbon_favorite.png";
import cartIcon from "../assets/icons/cart.png";
import ri_menuIcon from "../assets/icons/ri_menu-2-fill.png";

const menuItems = [
  {
    id: 1,
    text: "Home",
    link: "/",
  },
  {
    id: 2,
    text: "Shop",
    link: "/shop",
  },
  {
    id: 3,
    text: "Product",
    link: "/product",
  },
  {
    id: 4,
    text: "Pages",
    link: "/pages",
  },
  {
    id: 5,
    text: "Blog",
    link: "/blog",
  },
];

const Header = () => {
  return (
    <header className="bg-white py-7.5">
      <nav>
        <div className="container">
          <div className="flex justify-between gap-6 items-center py-2">
            <div>
              <img src="/logo.png" alt="logo" />
            </div>
            <div>
              <ul className="flex items-center justify-center gap-6">
                {menuItems.map((item) => {
                  return (
                    <li key={item.id}>
                      <Link
                        className="text-black-d0a text-sm font-medium font-jost"
                        to={item.link}
                      >
                        {item.text}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="flex justify-end gap-4">
              <IconBox icon={searchIcon} />
              <IconBox icon={userIcon} />
              <IconBox icon={favoriteIcon} count />
              <IconBox icon={cartIcon} count />
            </div>
          </div>
        </div>
      </nav>
      <div className="container mt-3">
        <div className="grid grid-cols-[40px_148px_1fr] gap-2.5 items-center">
          <button>
            <img src={ri_menuIcon} alt="icon" />
          </button>
          <div>
            <select name="" id="">
              <option value="All-DEPARTMENTS" className="uppercase">
                All DEPARTMENTS
              </option>
              <option value="Fashion" className="uppercase">
                Fashion
              </option>
            </select>
          </div>
          <div>
            <form action="" className="grid grid-cols-[1fr_120px_77px] h-10">
              <input className="w-full" type="text" placeholder="Search..." />

              <select name="" id="" className="mr-3">
                <option value="All-DEPARTMENTS" className="uppercase">
                  All DEPARTMENTS
                </option>
                <option value="Fashion" className="uppercase">
                  Fashion
                </option>
              </select>

              <button className="bg-black-d0a text-white p-1 flex items-center justify-center">
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.75 17.75L13.5533 13.5533M15.75 8.25C15.75 4.10786 12.3921 0.75 8.25 0.75C4.10786 0.75 0.75 4.10786 0.75 8.25C0.75 12.3921 4.10786 15.75 8.25 15.75C12.3921 15.75 15.75 12.3921 15.75 8.25Z"
                    stroke="#FEFEFE"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
};

function IconBox({ icon, count = false }) {
  return (
    <button className="size-6 flex items-center justify-center cursor-pointer relative">
      <img src={icon} alt="icon" />

      {count && (
        <span className="size-4 rounded-full flex items-center justify-center bg-red-500 text-white text-[10px] absolute -top-0.5 -right-2 z-10">
          0
        </span>
      )}
    </button>
  );
}

export default Header;
