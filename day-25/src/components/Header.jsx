import React from "react";

const Header = () => {
  return (
    <div>
      <header class="text-gray-400 bg-gray-900 body-font fixed w-screen">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <span class="ml-7 text-xl">Robix</span>
          </a>
          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a class="mx-10 hover:text-white" href="#home">
              Home
            </a>
            <a class="mx-10 hover:text-white" href="#hero">
              Hero
            </a>
            <a class="mx-10 hover:text-white" href="#testi">
              Testimonial
            </a>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
