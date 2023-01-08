import React, { useContext } from "react";

// context
import { RoomContext } from "../context/RoomProvider";

// components
import Room from "./Room";

// loader
import {SpinnerDotted} from "spinners-react"

const Rooms = () => {
  const { rooms , loading } = useContext(RoomContext);
  return (
    <section className="py-24">
    {/* overlay & spinner */}
    {loading && (
      <div className="h-screen fixed botom-0 top-0 bg-black/90 w-full z-50 flex justify-center items-center ">
        <SpinnerDotted color="white"/>
      </div>
    )}
      <div className="container mx-auto lg:px-0">
      <div className="text-center">
        <div className="font-tertiary uppercase text-[15px] tracking-[6px]">
          Hotel & Spa Adina
        </div>
        <h2 className="font-primary text-[45px] mb-4">Room & Suites</h2>
      </div>
        {/* grid */}
        <div className="grid grid-cols-1 max-w-sm mx-auto gap-[30px] lg:grid-cols-3 lg:max-w-none lg:mx-0">
          {rooms.map((room) => (
            <Room key={room.id} room={room}/>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Rooms;
