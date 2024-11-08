/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="container p-8 mt-2 mx-auto">
        <header className="flex flex-row justify-between items-center">
          <div className="flex flex-row">
            <img src="/src/Components/img/logo.png" alt="logo" />
            <div className="ml-2">
              <h1 className="text-4xl font-medium">Bookoe</h1>
              <h3 className="text-sm ml-1 font-light">Rekomendasi Bukumu</h3>
            </div>
          </div>
          <nav className="flex flex-row gap-10">
            <ul className="flex flex-row gap-10 items-center text-xl">
              <li className="hover:underline">
                <Link to={"/"}>All</Link>
              </li>
              <li className="hover:underline">
                <Link to={"/latest"}>Latest</Link>
              </li>
              <li className="hover:underline">
                <Link to={"/top_picks"}>Top Picks</Link>
              </li>
            </ul>
            <div>
              <input type="text" placeholder=" Serch by author" className="border w-[402px] h-[50px]" />
            </div>
            <div>
              <button className="border rounded-lg outline outline-1 text-xl text-button p-2">Edit List</button>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
};
export default Navbar;
