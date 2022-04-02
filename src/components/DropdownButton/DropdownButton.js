import { createPopper } from "@popperjs/core";
import React from "react";

const DropdownButton = ({ color }) => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start"
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  // bg colors
  let bgColor;
  color === "white"
    ? (bgColor = "bg-white-700")
    : (bgColor = "bg-" + color + "-500");
  return (
    <>
      <div className="flex justify-end flex-wrap">
        <div className="w-full sm:w-6/12 md:w-4/12">
          <div className="flex justify-end w-full">
            <button
              className={
                "text-black font-normal focus:ring  focus:ring-red-400 border px-4 rounded-md" +
                bgColor
              }
              type="button"
              ref={btnDropdownRef}
              onClick={() => {
                dropdownPopoverShow
                  ? closeDropdownPopover()
                  : openDropdownPopover();
              }}
            >
              {color === "white" ? "Top Recent" : color + " Dropdown"}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
              
            <div
              ref={popoverDropdownRef}
              className={
                (dropdownPopoverShow ? "block " : "hidden ") +
                (color === "white" ? "bg-white " : bgColor + " ") +
                "text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1"
              }
              style={{ minWidth: "9rem" }}
            >
              <a
                href="#pablo"
                className={
                  "text-sm px-2 font-normal block w-full whitespace-nowrap bg-transparent " +
                  (color === "white" ? " text-slate-700" : "text-white")
                }
                onClick={e => e.preventDefault()}
              >
                Recently Added
              </a>
              <a
                href="#pablo"
                className={
                  "text-sm px-2 font-normal block w-full whitespace-nowrap bg-transparent " +
                  (color === "white" ? " text-slate-700" : "text-white")
                }
                onClick={e => e.preventDefault()}
              >
                Featured
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function DropdownRender() {
  return (
    <>
      <DropdownButton color="white" />
    </>
  );
}