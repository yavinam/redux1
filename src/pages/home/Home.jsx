import React from "react";
import img from '../../assets/laptop.jpg'

const Home = () => {
  return (
    <div className="min-h-[70vh]">
      <header class="p-8 bg-white">
        <div class="container pt-12 pb-6 mx-auto text-center w-w-full lg:pb-20">
          <h1 class="block antialiased tracking-normal font-sans font-semibold text-blue-gray-900 !lg:leading-tight mx-auto mb-6 w-full text-3xl !leading-snug lg:max-w-3xl lg:text-5xl">Homepage</h1>
          <p class="block antialiased font-sans text-xl font-normal leading-relaxed text-inherit mx-auto w-full !text-gray-500 lg:w-10/12 lg:px-12 xl:w-9/12 xl:px-20">Welcome to our restaurant&#x27;s homepage. Explore our delicious menu and discover the flavors that will delight your taste buds.</p>
        </div>
        <div class="w-full lg:container lg:mx-auto"><img src={img} /></div>
      </header>
    </div>
  );
};

export default Home;
