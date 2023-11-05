import {  useState } from "react";
import { BiMenu } from "react-icons/bi";
import { DropDownMenuLanding } from "./DropDownMenuLanding";

export const NavbarLanding = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>  
      <nav className="flex bg-white z-50 absolute top-0 w-full items-center  flex-row shadow justify-between px-4 py-4 border-b-2 border-gray-300">
        <div>
          <h2>Logo</h2>
        </div>
        <ul className="text-3xl lg:hidden">
          <li>
            <button onClick={() => setIsOpen(!isOpen)}>
              <BiMenu />
            </button>
          </li>
        </ul>
        <ul className="hidden lg:flex flex-row gap-4 text-2xl">
          <li>
            <a href="">Characteristics</a>
          </li>
          <li>
            <a href="">How does it work?</a>
          </li>
          <li>
            <a href="">About us</a>
          </li>
        </ul>
      </nav>
      <DropDownMenuLanding isOpen={isOpen} onClose={handleClose} />;
    </>
  );
};
