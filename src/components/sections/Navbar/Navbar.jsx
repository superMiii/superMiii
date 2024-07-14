/* eslint-disable react/prop-types */
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";
import About from "../../pages/About/About";
import Portfolio from "../../pages/Portfolio/Portfolio";
import Service from "../../pages/Service/Service";
import { FaMoon, FaServicestack, FaSun, FaTasks, FaUser } from "react-icons/fa";
import { useState } from "react";
import { HashRouter } from "react-router-dom";

const classNameIcons = "w-5 h-5 mb-2";
const navbarData = [
  {
    id: 1,
    title: "About",
    to: "/about",
    icons: <FaUser className={classNameIcons} />,
  },
  {
    id: 2,
    title: "Services",
    to: "/services",
    icons: <FaServicestack className={classNameIcons} />,
  },
  {
    id: 3,
    title: "Works",
    to: "/works",
    icons: <FaTasks className={classNameIcons} />,
  },
];

const Navbar = () => {
  const [dark, setDark] = useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  return (
    <HashRouter>
      <div className="z-10 sticky top-0 justify-center hidden md:flex">
        <nav
          className="md:mx-8 mb-3 px-6 py-2 bg-white dark:bg-zinc-900 shadow rounded-full md:w-fit xs:w-full bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200"
          data-aos="fade-up"
        >
          <ul className="flex flex-wrap">
            {navbarData.map((el, id) => (
              <LinkItem el={el} key={id} />
            ))}
            <li className="m-3 flex justify-center items-center">
              <button onClick={darkModeHandler}>
                {dark && <FaSun className="w-5 h-5 text-yellow-400" />}
                {!dark && <FaMoon className="w-5 h-5 text-yellow-400" />}
              </button>
            </li>
          </ul>
        </nav>
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-50 w-full h-16 bg-white dark:bg-zinc-900 md:hidden">
        <div className="grid h-full max-w-lg grid-cols-3 mx-auto font-medium">
          {navbarData.map((el, id) => (
            <LinkItem2 el={el} key={id} />
          ))}
        </div>
      </div>

      <div className="fixed bottom-24 right-6 z-50 rounded-full flex justify-center items-center w-12 h-12 bg-rose-800 md:hidden">
        <button onClick={darkModeHandler}>
          {dark && <FaSun className="w-9 h-9 text-yellow-400" />}
          {!dark && <FaMoon className="w-9 h-9 text-yellow-400" />}
        </button>
      </div>

      <Routes>
        <Route exact path="/" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/works" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
  );
};

export default Navbar;

const LinkItem = (props) => {
  const { title, to } = props.el;
  return (
    <li className="m-3">
      <NavLink
        to={to}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-gray-50 bg-rose-800 p-3 lg:px-5 rounded-full text-bold text-medium transition fade-out delay-50 duration-500"
            : "text-gray-800 dark:text-gray-50 text-medium p-3 lg:px-3 hover:text-rose-800"
        }
      >
        {title}
      </NavLink>
    </li>
  );
};

const LinkItem2 = (props) => {
  const { title, to, icons } = props.el;
  return (
    <>
      <NavLink
        to={to}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "inline-flex flex-col items-center justify-center px-5 text-rose-800 text-medium"
            : "inline-flex flex-col items-center justify-center px-5 text-gray-800 dark:text-gray-50 text-medium hover:text-rose-800 group"
        }
      >
        {icons}
        <span className="text-sm">{title}</span>
      </NavLink>
    </>
  );
};
