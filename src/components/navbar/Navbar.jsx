import React, { useState, useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";

const Menu = () => (
  <>
    <ScrollLink to="services" smooth={true} duration={50} offset={-70}>
      <p>Services</p>
    </ScrollLink>
    <RouterLink to="/profile">
      <p>Profile</p>
    </RouterLink>
    <button
      className="cal-button navbar-laptop"
      data-cal-namespace="progressor-capital-growth-session"
      data-cal-link="pravitbh/progressor-capital-growth-session"
      data-cal-config='{"layout":"month_view"}'
    >
      <p>Schedule Meeting</p>
    </button>
  </>
);

const Phone_menu = () => (
  <>
    <ScrollLink to="services" smooth={true} duration={50} offset={-70}>
      <p>Services</p>
    </ScrollLink>
    <RouterLink to="/profile">
      <p>Profile</p>
    </RouterLink>
    <a
      href="https://cal.com/pravitbh/progressor-capital-growth-session"
      target="_blank"
      rel="noopener noreferrer"
    >
      Schedule Meeting
    </a>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled past the hero section
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({
        namespace: "progressor-capital-growth-session",
      });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <div className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <a href="/" className="navbar-logo">
        <div className="nav-logo">Progressor Capital</div>
      </a>
      <div className="nav-links">
        <div className="navbar-laptop">
          <Menu />
        </div>
      </div>

      <div className="navbar-phone">
        {toggleMenu ? (
          <RiCloseLine
            className="close-icon"
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            className="open-icon"
            onClick={() => setToggleMenu(true)}
          />
        )}

        {toggleMenu && (
          <div className="opacity">
            <div className="navbar-phone-container scale-up-center">
              <div className="navbar-phone-links">
                <Phone_menu />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
