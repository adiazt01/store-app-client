import { Link } from "react-router-dom";
import { ShapeTop } from "../shape/ShapeTop";

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4 relative">
      <ShapeTop />
      <div className="container pt-48 mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h1 className="text-2xl font-semibold">Armando Dev</h1>
          <p className="mt-2">
            Making the world a better place through design.
          </p>
        </div>
        <nav className="mt-4 md:mt-0">
          <ul className="flex space-x-4">
            <li>
              <Link to="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:underline">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="text-center mt-4 border-t-2 border-gray-700 pt-4">
        <p>© 2022 Armando Dev. All rights reserved.</p>
      </div>
    </footer>
  );
};
