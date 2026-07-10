import React from "react";
import Navbar from "../components/Navbar";

const Header = () => {
  return (
    <div
      className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden"
      style={{ backgroundImage: "url('/header_img.png')" }}
      id="Header"
    >
      <Navbar />

      <div className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white [&>h2]:text-5xl [&>h2]:sm:text-6xl [&>h2]:md:text-[82px] [&>h2]:inline-block [&>h2]:max-w-3xl [&>h2]:font-semibold [&>h2]:pt-20">

        <h2>Explore homes that fit your dreams</h2>
        <div>
          <a href="#">Projects</a>
          <a href="#">Contact Us</a>
        </div>
      </div>

    </div>
  );
};

export default Header;