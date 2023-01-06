import React, { useContext } from "react";

// context
import { RoomContext } from "../context/RoomProvider";

// components
import Room from "./Room";

const Rooms = () => {
  const { rooms } = useContext(RoomContext);
  return (
    <section className="py-24">
      <div className="container mx-auto lg:px-0">
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
