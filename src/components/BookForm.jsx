import React from 'react';

// components
import {AdultsDropdown, CheckIn, CheckOut, KidsDropdown} from './';



const BookForm = () => {
  return (
    <form className="h-[300px]  w-full lg:h-[70px] ">
      <div className="flex flex-col w-full h-full lg:flex-row">
        <div className="flex-1 border-1">
          <CheckIn />
        </div>
        <div className="flex-1 border-1">
          <CheckOut />
        </div>
        <div className="flex-1 border-1">
          <AdultsDropdown />
        </div>
        <div className="flex-1 border-1">
          <KidsDropdown />
        </div>
      </div>
    </form>
  );
};

export default BookForm;
