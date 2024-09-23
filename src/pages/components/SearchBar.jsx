import React, { useEffect, useState } from "react";

const Navbar = ({ setFilter, currentCountry }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full flex items-center py-5 fixed top-0 z-20 transition-all duration-300 ${
        scrolled ? "bg-gray-950 opacity-85" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <a className={`navbar-brand text-white font-bold transition-opacity duration-300 ${scrolled ? "opacity-100" : "opacity-0"}`}>
          {currentCountry}
        </a>
        <form className="input-group w-auto">
          <input
            type="search"
            className="form-control rounded bg-gray-800 text-white px-3 py-2"
            placeholder="Search"
            aria-label="Search"
            onChange={(e) => setFilter(e.target.value)}
          />
          <span className="input-group-text border-0 text-white px-2">
            <i className="fas fa-search"></i>
          </span>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
