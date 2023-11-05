import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { navbarEntry } from "../../../animations/navbarLanding";
import { Link } from "react-router-dom";

interface DropDownMenuLandingProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DropDownMenuLanding: React.FC<DropDownMenuLandingProps> = ({
  isOpen,
  onClose,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    }
  }, [isOpen]);

  const handleAnimationComplete = () => {
    if (!isOpen) {
      setIsVisible(false);
      onClose();
    }
  };

  if (!isVisible) return null;
  return (
    <motion.div
      initial="hidden"
      animate={isOpen ? "visible" : "exit"}
      variants={navbarEntry}
      onAnimationComplete={handleAnimationComplete}
      className="absolute z-40 bg-white shadow-sm border-gray-300 border-b-2 py-2 px-4 md:hidden top-[70px] w-full flex text-end flex-col"
    >
      <ul className="flex flex-col gap-1 text-lg divide-y divide-gray-300">
        <li>
          <a
            href=""
            className="block py-1 px-3 rounded hover:bg-gray-100 focus:bg-gray-100 text-gray-700 hover:text-gray-900 focus:text-gray-900"
          >
            Benefits
          </a>
        </li>
        <li>
          <Link
            to={"/login"}
            className="block py-1 px-3 rounded hover:bg-gray-100 focus:bg-gray-100 text-gray-700 hover:text-gray-900 focus:text-gray-900"
          >
            Login
          </Link>
        </li>
      </ul>
    </motion.div>
  );
};
