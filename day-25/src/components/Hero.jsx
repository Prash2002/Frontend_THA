import React from "react";

const Hero = () => {
  return (
    <section class="text-gray-600 body-font mx-20" id="hero">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center ">
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 ">
          <img
            class="object-cover object-center rounded m-auto"
            alt="hero"
            src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
          />
        </div>
        <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Lorem ipsum dolor sit
            <br class="hidden lg:inline-block" />
            amet consectetur
          </h1>
          <p class="mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
            autem nesciunt ab, repellat aliquid nostrum ipsam incidunt laborum
            quo iusto, saepe ullam hic consectetur dicta, vero maxime labore
            possimus rem.
          </p>
          <div class="flex justify-center">
            <button class="inline-flex text-white bg-gray-900 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded text-lg">
              Button
            </button>
            <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Button
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
