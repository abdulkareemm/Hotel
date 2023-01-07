import React, { useContext } from "react";
import { RoomContext } from "../context/RoomProvider";

// components
import { AdultsDropdown, CheckIn, CheckOut, KidsDropdown } from "./";

const BookForm = () => {
  const {  handleClick } = useContext(RoomContext);
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
        {/* btn */}
        <button type="submit" className="btn btn-primary" onClick={(e)=>handleClick(e)}>
          Check Now
        </button>
      </div>
    </form>
  );
};

export default BookForm;
