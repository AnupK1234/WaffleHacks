import { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import logo from "../assets/Logi.png"

const Navbar = () => {
  const navbarRef = useRef(null);
  const { user, logout } = useContext(AuthContext);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (navbarRef.current) {
      if (offset > 0) {
        navbarRef.current.classList.add("bg-[#F6E199]");
        navbarRef.current.classList.remove("bg-yellow-50");
      } else {
        navbarRef.current.classList.add("bg-yellow-50");
        navbarRef.current.classList.remove("bg-[#F6E199]");
      }
    }
  };

  const handleUserImageClick = () => {
    setShowDropdown(true);
    setTimeout(() => {
      setShowDropdown(false);
    }, 3000); // Hide dropdown after 3 seconds
  };

  //console.log("User detial: ", user);

  // Add event listener for scroll
  window.addEventListener("scroll", handleScroll);

  return (
    <>
      <nav
        ref={navbarRef}
        className="bg-yellow-50 border-gray-200 sticky top-0 z-10"
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src={logo}
              className="h-10 border border-black rounded-full"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              MealMates
            </span>
          </a>
          {/* <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="w-8 h-8 rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw4xIzlTTRJKIQB1tq1Jbs5Rfj7hU6h1UtPg&s"
                alt="user photo"
              />
            </button>
            <div
              className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
              id="user-dropdown"
            >
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 dark:text-white">
                  Bonnie Green
                </span>
                <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                  name@flowbite.com
                </span>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Earnings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
            <button
              data-collapse-toggle="navbar-user"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-user"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div> */}
          <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            {user ? (
              <div className="flex items-center space-x-3">
                <img
                  onClick={handleUserImageClick}
                  className="w-8 h-8 rounded-full"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw4xIzlTTRJKIQB1tq1Jbs5Rfj7hU6h1UtPg&s"
                  alt="user photo"
                />
                {/* Drop down */}
                {showDropdown && (
                  <div
                    className="absolute top-16 right-[150px] z-50 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                    id="user-dropdown"
                  >
                    <div className="px-4 py-3">
                      <span className="block text-sm text-gray-900 dark:text-white">
                        {user.fullname}
                      </span>
                      <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                        {user.email}
                      </span>
                    </div>
                    <ul className="py-2" aria-labelledby="user-menu-button">
                      <li>
                        <Link to="/admin/dashboard">
                        <span
                          
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                          Dashboard
                        </span>
                        </Link>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                          Settings
                        </a>
                      </li>
                      <li>
                        <span
                          onClick={logout}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                          Sign out
                        </span>
                      </li>
                    </ul>
                  </div>
                )}
                {/* <button
                  onClick={logout}
                  className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900"
                >
                  Logout
                </button> */}
              </div>
            ) : (
              <Link to="/signin">
                <button className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900">
                  Login
                </button>
              </Link>
            )}
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-user"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-[#1D1818] rounded md:bg-transparent md:p-0"
                  aria-current="page"
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-[#1D1818] rounded md:bg-transparent md:p-0"
                >
                  Food
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-[#1D1818] rounded md:bg-transparent md:p-0"
                >
                  Search Nearby Restaurants
                </a>
              </li>
              <li>
                <Link
                  to="/contactus"
                  className="block py-2 px-3 text-[#1D1818] rounded md:bg-transparent md:p-0"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
