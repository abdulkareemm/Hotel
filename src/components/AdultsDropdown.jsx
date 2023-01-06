import React, { useContext } from "react";
// room context
import { RoomContext } from "../context/RoomProvider";

// headLess ui menu
import { Menu } from "@headlessui/react";

// react
import { BsChevronDown } from "react-icons/bs";

const lis = [
  { name: "1 Adults" },
  { name: "2 Adults" },
  { name: "3 Adults" },
  { name: "4 adults" },
];
const AdultsDropdown = () => {
  return (
    <Menu as="div" className="w-full h-full bg-white relative">
      {/* btn */}
      <Menu.Button className="w-full h-full flex items-center justify-between px-8">
        adults
        <BsChevronDown className="text-base text-accent-hover" />
      </Menu.Button>

      {/* items */}
      <Menu.Items
        as="ul"
        className="bg-white absolute w-full flex flex-col z-40"
      >
        {lis.map((li, idx) => {
          return (
            <Menu.Item
              as="li"
              key={idx}
              className="border-b last-of-type:border-b-0 h-12 hover:bg-accent hover:text-white w-full flex justify-center items-center cursor-pointer"
            >
              {li.name}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default AdultsDropdown;
