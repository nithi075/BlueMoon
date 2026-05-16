import { useState, useEffect } from "react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import "./Navbar.css";

import logo from "../../assets/logo.png";

export default function Navbar() {

  const [menuOpen, setMenuOpen] =
    useState(false);

  const [scrolled, setScrolled] =
    useState(false);

  /* SCROLL EFFECT */

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );

  }, []);

  /* BODY LOCK */

  useEffect(() => {

    document.body.style.overflow =
      menuOpen ? "hidden" : "auto";

  }, [menuOpen]);

  /* MENU ITEMS */

  const navItems = [

    {
      name: "HOME",
      href: "#home",
    },

    {
      name: "ABOUT US",
      href: "#about",
    },

    {
      name: "SERVICES",
      href: "#services",
    },

    {
      name: "FEATURED",
      href: "#featured",
    },

    {
      name: "PORTFOLIO",
      href: "#portfolio",
    },

    {
      name: "PACKAGES",
      href: "#packages",
    },

    {
      name: "CONTACT",
      href: "#contact",
    },

  ];

  return (

    <>
      {/* NAVBAR */}

      <motion.nav

        className={`navbar ${
          scrolled
            ? "navbar-scroll"
            : ""
        }`}

        initial={{
          y: -100,
        }}

        animate={{
          y: 0,
        }}

        transition={{
          duration: 0.8,
          ease: [0.25, 1, 0.5, 1],
        }}
      >

        <div className="navbar-container">

          {/* LOGO */}

          <a
            href="#home"
            className="logo-wrapper"
          >

            <img
              src={logo}
              alt="Logo"
              className="logo-img"
            />

          </a>

          {/* DESKTOP MENU */}

          <div className="desktop-menu">

            {navItems.map(
              (item, index) => (

                <a
                  href={item.href}
                  key={index}
                  className="nav-link"
                >
                  {item.name}
                </a>

              )
            )}

          </div>

          {/* CTA */}

          <a
            href="#contact"
            className="desktop-cta"
          >
            LET'S TALK
          </a>

          {/* MENU BUTTON */}

          <div

            className={`menu-btn ${
              menuOpen
                ? "active"
                : ""
            }`}

            onClick={() =>
              setMenuOpen(!menuOpen)
            }
          >

            <div className="btn-line"></div>
            <div className="btn-line"></div>

          </div>

        </div>

      </motion.nav>

      {/* MOBILE MENU */}

      <AnimatePresence>

        {menuOpen && (

          <motion.div

            className="mobile-overlay"

            initial={{
              opacity: 0,
            }}

            animate={{
              opacity: 1,
            }}

            exit={{
              opacity: 0,
            }}
          >

            {/* GRAIN */}

            <div className="grain-overlay"></div>

            {/* GLOW */}

            <div className="menu-glow"></div>

            {/* PANEL */}

            <motion.div

              className="mobile-menu-container"

              initial={{
                x: "100%",
              }}

              animate={{
                x: 0,
              }}

              exit={{
                x: "100%",
              }}

              transition={{
                duration: 0.8,
                ease: [0.19, 1, 0.22, 1],
              }}
            >

              {/* TOP */}

              <div className="mobile-top">

                <img
                  src={logo}
                  alt="Logo"
                  className="mobile-logo"
                />

                <button

                  className="close-btn"

                  onClick={() =>
                    setMenuOpen(false)
                  }
                >
                  ✕
                </button>

              </div>

              {/* MENU */}

              <div className="mobile-menu-list">

                {navItems.map(
                  (item, index) => (

                    <motion.div

                      key={index}

                      className="mobile-item-wrapper"

                      initial={{
                        opacity: 0,
                        x: 50,
                      }}

                      animate={{
                        opacity: 1,
                        x: 0,
                      }}

                      transition={{
                        delay: 0.08 * index,
                        duration: 0.5,
                      }}
                    >

                      <a

                        href={item.href}

                        onClick={() =>
                          setMenuOpen(false)
                        }
                      >

                        <span className="mobile-num">

                          {String(
                            index + 1
                          ).padStart(2, "0")}

                        </span>

                        <span className="mobile-text">
                          {item.name}
                        </span>

                      </a>

                    </motion.div>

                  )
                )}

              </div>

              {/* FOOTER */}

              <div className="mobile-footer">

                <div className="mobile-socials">

                  <a href="#">
                    INSTAGRAM
                  </a>

                  <a href="#">
                    YOUTUBE
                  </a>

                  <a href="#">
                    WHATSAPP
                  </a>

                </div>

                <p className="mobile-credit">
                  CINEMATIC STORYTELLING
                </p>

              </div>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </>
  );
}