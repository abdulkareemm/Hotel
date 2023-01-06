import React, { createContext, useState } from 'react';
// data
import {roomData} from "../data"

// creat context
export const RoomContext = createContext({

})
const RoomProvider = ({ children }) => {
  const [room,setRoom] = useState(roomData)
  return <RoomContext.Provider value={room}>{children}</RoomContext.Provider>;
};

export default RoomProvider;
