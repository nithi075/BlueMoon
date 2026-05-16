import React from "react";
import { motion } from "framer-motion";
import "./Footer.css";
import logo from "../../assets/logo.png";

const Footer = () => {

  const currentYear =
    new Date().getFullYear();

  return (

    <footer className="footer-canvas">

      {/* AMBIENT GLOW */}
      <motion.div

        className="footer-ambient-glow"

        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.25, 0.5, 0.25],
        }}

        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="footer-container">

        {/* ================= BRAND ================= */}

        <motion.div

          className="footer-brand-block"

          initial={{
            opacity: 0,
            y: 40,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
          }}

          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          {/* LOGO */}
          <div className="footer-logo-wrapper">

            <motion.img

              src={logo}

              alt="Midnight Studio Logo"

              className="footer-logo-img"

              whileHover={{
                rotate: -4,
                scale: 1.05,
              }}
            />

            <div className="footer-brand-text">

              <span className="footer-brand-name">
                BLUE MOON STUDIO
              </span>

              <span className="footer-brand-sub">
                CINEMATIC VISUAL HOUSE
              </span>

            </div>

          </div>

          {/* TAGLINE */}
          <p className="footer-tagline">
            Engineering premium cinematic experiences,
            visual narratives, and modern storytelling
            for luxury brands and creative productions.
          </p>

          {/* EMAIL */}
          <a
            href="mailto:hello@midnightstudio.com"

            className="footer-email-link"
          >
            hello@bluemoon.com
          </a>

        </motion.div>

        {/* ================= NAVIGATION ================= */}

        <motion.div

          className="footer-links-block"

          initial={{
            opacity: 0,
            y: 40,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
          }}

          transition={{
            duration: 1,
            delay: 0.15,
          }}
        >

          <h4 className="footer-block-title">
            NAVIGATION
          </h4>

          <ul className="footer-links-list">

            {[
              "Home",
              "Showreel",
              "Portfolio",
              "Services",
              "Packages",
              "Contact",
            ].map((item, i) => (

              <motion.li

                key={i}

                whileHover={{
                  x: 5,
                }}
              >

                <a

                  href={`#${item.toLowerCase()}`}

                  className="footer-link"
                >
                  {item}
                </a>

              </motion.li>

            ))}

          </ul>

        </motion.div>

        {/* ================= SOCIALS ================= */}

        <motion.div

          className="footer-socials-block"

          initial={{
            opacity: 0,
            y: 40,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
          }}

          transition={{
            duration: 1,
            delay: 0.25,
          }}
        >

          <h4 className="footer-block-title">
            CONNECT
          </h4>

          <div className="footer-social-icons">

            <motion.a

              href="https://instagram.com"

              target="_blank"

              rel="noreferrer"

              className="social-icon-circle"

              whileHover={{
                y: -4,
                scale: 1.08,
              }}

              whileTap={{
                scale: 0.95,
              }}
            >
              <i className="fab fa-instagram"></i>
            </motion.a>

            <motion.a

              href="https://youtube.com"

              target="_blank"

              rel="noreferrer"

              className="social-icon-circle"

              whileHover={{
                y: -4,
                scale: 1.08,
              }}

              whileTap={{
                scale: 0.95,
              }}
            >
              <i className="fab fa-youtube"></i>
            </motion.a>

            <motion.a

              href="https://vimeo.com"

              target="_blank"

              rel="noreferrer"

              className="social-icon-circle"

              whileHover={{
                y: -4,
                scale: 1.08,
              }}

              whileTap={{
                scale: 0.95,
              }}
            >
              <i className="fab fa-vimeo-v"></i>
            </motion.a>

          </div>

          {/* STATUS */}
          <div className="footer-availability-status">

            <span className="status-indicator-dot"></span>

            Booking Open For 2026

          </div>

          {/* CTA */}
          <motion.a

            href="#contact"

            className="footer-cta-btn"

            whileHover={{
              scale: 1.03,
            }}

            whileTap={{
              scale: 0.97,
            }}
          >
            Start A Project ↗
          </motion.a>

        </motion.div>

      </div>

      {/* ================= BOTTOM BAR ================= */}

      <div className="footer-bottom-bar">

        <div className="footer-bottom-container">

          <p className="copyright-text">
            © {currentYear} Midnight Studio.
            All Rights Reserved.
          </p>

          <p className="developer-credit">
            Crafted by
            <span className="dev-name">
              {" "}SAM Web Designing
            </span>
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;