import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="bg-white  shadow-md ">
      <div className=" container mx-auto p-4 flex justify-between ">
        <Link to="/" className="text-2xl font-bold">
          GS
        </Link>
        <div>
          <Link to="/" className="mr-4">
            Work
          </Link>
          <Link to="/about" className="mr-4">
            About
          </Link>
          <Link to="/contact" className="mr-4">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
