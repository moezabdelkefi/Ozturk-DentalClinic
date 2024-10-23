import React, { useState, useEffect } from "react";
import HeaderTopV1 from "./HeaderTopV1";
import MainMenu from "./MainMenu";
import HeaderSidebarMenu from "./HeaderSidebarMenu";
import HeaderLogoV3 from "./HeaderLogoV3";
import HeaderSearch from "./HeaderSearch";

const HeaderV4 = ({ logoColor = false }) => {
  // Sticky Menu
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Search Bar
  const [openSearch, setOpenSearch] = useState(false);

  const searchOpen = (event) => {
    event.preventDefault();
    setOpenSearch(!openSearch);
  };

  const searchClose = () => {
    setOpenSearch(false);
  };

  // Sidebar Menu
  const [navbarClass, setNavbarClass] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const addClasses = () => {
    setNavbarClass(true);
    setIsSidebarOpen(true);
    document.body.classList.add("on-side");
  };

  const removeClasses = () => {
    setNavbarClass(false);
    setIsSidebarOpen(false);
    document.body.classList.remove("on-side");
  };

  // Mobile Menu
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(true);
    document.body.classList.add("no-fade");
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.classList.remove("no-fade");
  };

  // Mobile DropDown
  const toggleSubMenu = (e) => {
    e.preventDefault();
    const listItem = e.target.parentElement;
    const subMenu = listItem.querySelector("ul.dropdown-menu");
    if (subMenu) {
      listItem.classList.toggle("on");
      subMenu.style.maxHeight =
        subMenu.style.maxHeight === "20000px" ? "0" : "20000px";
    }
  };

  const toggleMegaMenu = (e) => {
    e.preventDefault();
    const listItem = e.target.parentElement;
    const megaMenu = listItem.querySelector(".content");
    if (megaMenu) {
      megaMenu.classList.toggle("d-block");
      listItem.classList.toggle("on");
    }
  };

  // Dark Mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("bg-dark", "text-light");
    } else {
      document.body.classList.remove("bg-dark", "text-light");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <style>
        {`
          /* The switch - the box around the slider */
          .switch {
            display: inline-flex;
            align-items: center;
            --width-of-switch: 3.5em;
            --height-of-switch: 2em;
            --size-of-icon: 1.4em;
            --slider-offset: 0.3em;
            position: relative;
            width: var(--width-of-switch);
            height: var(--height-of-switch);
          }

          /* Hide default HTML checkbox */
          .switch input {
            opacity: 0;
            width: 0;
            height: 0;
          }

          /* The slider */
          .slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #f4f4f5;
            transition: .4s;
            border-radius: 30px;
          }

          .slider:before {
            position: absolute;
            content: "";
            height: var(--size-of-icon);
            width: var(--size-of-icon);
            border-radius: 20px;
            left: var(--slider-offset);
            top: 50%;
            transform: translateY(-50%);
            background: linear-gradient(40deg, #ff0080, #ff8c00 70%);
            transition: .4s;
          }

          input:checked + .slider {
            background-color: #303136;
          }

          input:checked + .slider:before {
            left: calc(100% - (var(--size-of-icon) + var(--slider-offset)));
            background: #303136;
            box-shadow: inset -3px -2px 5px -2px #8983f7, inset -10px -4px 0 0 #a3dafb;
          }

          /* Responsive styles */
          @media (max-width: 767px) {
            .switch {
              --width-of-switch: 2.5em; /* Adjust size for smaller screens */
              --height-of-switch: 1.5em;
              --size-of-icon: 1em;
              --slider-offset: 0.2em;
            }
          }
        `}
      </style>
      <HeaderTopV1 />
      <header>
        <nav
          className={`navbar mobile-sidenav navbar-default validnavs dark ${
            isSticky ? "sticked" : "no-background"
          }`}
        >
          <div className="container d-flex justify-content-between align-items-center">
            <HeaderLogoV3 logoColor={logoColor} openMenu={openMenu} />
            <MainMenu
              isOpen={isOpen}
              closeMenu={closeMenu}
              toggleSubMenu={toggleSubMenu}
              toggleMegaMenu={toggleMegaMenu}
            />
            <HeaderSidebarMenu
              removeClasses={removeClasses}
              isSidebarOpen={isSidebarOpen}
              addClasses={addClasses}
              searchOpen={searchOpen}
            />
          </div>
          <div className={`overlay-screen ${isOpen ? "opened" : ""}`}></div>
        </nav>
      </header>
    </>
  );
};

export default HeaderV4;