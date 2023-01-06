import React from "react";
import { BookForm, HeroSlider, Rooms } from "../components";

//components

const Home = () => {
  return (
    <>
    <HeroSlider />
      <div className="container mx-auto relative">
      <div className="bg-accent/20 mt-4 p-4 lg:shadow-xl lg:absolute lg:-top-12 lg:left-0 lg:right-0 lg:p-0 lg:z-30 lg:-top-12">
        <BookForm />
      </div>
        
      </div>

      <Rooms />
    </>
  );
};

export default Home;
