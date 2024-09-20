import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa"; // Importing React Icon

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-900 via-gray-900 to-black p-4 shadow-lg">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        {/* Brand Name */}
        <h1 className="text-3xl font-bold text-white transition-transform transform hover:scale-105">
          MovieApp
        </h1>

        {/* Search Form */}
        <form className="flex items-center w-full sm:w-auto mt-4 sm:mt-0">
          <input
            type="text"
            placeholder="Search movies..."
            className="w-full sm:w-64 p-2 rounded-l-full border-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all bg-gray-800 text-white placeholder-gray-400"
          />
          <button className="bg-blue-500 text-white p-2 rounded-r-full hover:bg-blue-600 transition-colors flex items-center">
            <FaSearch className="mr-1" />
            <span className="hidden sm:inline">Search</span>
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
