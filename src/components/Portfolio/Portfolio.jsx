import React, { useState } from "react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import { Link } from "react-router-dom";

import "./Portfolio.css";

/* LOCAL VIDEOS */

import video1 from "../../assets/video1.mp4";
import video2 from "../../assets/video2.mp4";
import video3 from "../../assets/video3.mp4";
import video4 from "../../assets/video4.mp4";
import video5 from "../../assets/video5.mp4";

const Portfolio = () => {

  const [activeCategory, setActiveCategory] =
    useState("all");

  /* PORTFOLIO ITEMS */

  const portfolioItems = [

    {
      id: 1,

      title: "Luxury Brand Commercial",

      category: "commercial",

      tag: "BRAND ADVERTISEMENT",

      video: video1,
    },

    {
      id: 2,

      title: "Midnight Music Visual",

      category: "music-video",

      tag: "MUSIC VIDEO",

      video: video2,
    },

    {
      id: 3,

      title: "Tech Product Reveal",

      category: "commercial",

      tag: "PRODUCT AD",

      video: video3,
    },

    {
      id: 4,

      title: "Fashion Editorial Campaign",

      category: "brand-film",

      tag: "BRAND CINEMA",

      video: video4,
    },

    {
      id: 5,

      title: "Premium Automotive Reel",

      category: "music-video",

      tag: "CINEMATIC VISUAL",

      video: video3,
    },

  ];

  /* FILTERS */

  const categories = [

    {
      id: "all",
      label: "ALL WORK",
    },

    {
      id: "commercial",
      label: "COMMERCIAL ADS",
    },

    {
      id: "music-video",
      label: "MUSIC VIDEOS",
    },

    {
      id: "brand-film",
      label: "BRAND FILMS",
    },

  ];

  /* FILTER LOGIC */

  const filteredItems =
    activeCategory === "all"
      ? portfolioItems
      : portfolioItems.filter(
          (item) =>
            item.category === activeCategory
        );

  return (

    <section
      className="portfolio-section-grid"
      id="portfolio"
    >

      {/* MAIN GLOW */}

      <motion.div

        className="portfolio-main-glow"

        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.3, 0.6, 0.3],
        }}

        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="portfolio-master-container">

        {/* HEADER */}

        <motion.div

          className="portfolio-section-header"

          initial={{
            opacity: 0,
            y: 50,
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

          <span className="section-subtitle">
            OUR WORKS
          </span>

          <h2 className="section-title">
            Selected
            <span className="text-highlight">
              {" "}Productions
            </span>
          </h2>

          <p className="portfolio-section-desc">
            Premium commercials, cinematic visuals,
            branded films, and immersive storytelling
            engineered for modern luxury brands.
          </p>

          {/* FILTER TABS */}

          <div className="portfolio-filter-tabs">

            {categories.map((cat) => (

              <button

                key={cat.id}

                className={`filter-tab-btn ${
                  activeCategory === cat.id
                    ? "tab-active"
                    : ""
                }`}

                onClick={() =>
                  setActiveCategory(cat.id)
                }
              >

                {cat.label}

                {activeCategory === cat.id && (

                  <motion.div

                    layoutId="activeTabPill"

                    className="active-tab-bg-pill"

                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />

                )}

              </button>

            ))}

          </div>

        </motion.div>

        {/* GRID */}

        <motion.div

          layout

          className="portfolio-cards-masonry"

          initial="hidden"

          whileInView="visible"

          viewport={{
            once: true,
            amount: 0.08,
          }}

          variants={{

            hidden: {},

            visible: {

              transition: {
                staggerChildren: 0.14,
                delayChildren: 0.12,
              },
            },
          }}
        >

          <AnimatePresence mode="popLayout">

            {filteredItems.map((item, index) => (

              <motion.div

                layout

                key={item.id}

                className="portfolio-work-card"

                variants={{

                  hidden: {
                    opacity: 0,
                    y: 120,
                    scale: 0.84,
                    rotateX: 12,
                    filter: "blur(18px)",
                  },

                  visible: {

                    opacity: 1,
                    y: 0,
                    scale: 1,
                    rotateX: 0,
                    filter: "blur(0px)",

                    transition: {
                      duration: 1,
                      ease: [0.16, 1, 0.3, 1],
                    },
                  },
                }}

                exit={{
                  opacity: 0,
                  y: 40,
                  scale: 0.9,
                  filter: "blur(10px)",
                }}

                whileHover={{
                  y: -18,
                  scale: 1.015,
                  rotateX: -2,
                  rotateY: 2,
                }}

                whileTap={{
                  scale: 0.985,
                }}

                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 18,
                }}

                style={{
                  transformStyle: "preserve-3d",
                }}
              >

                {/* VIDEO */}

                <motion.div
                  className="card-media-viewport"
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                >

                  <motion.video

                    src={item.video}

                    className="portfolio-card-video"

                    autoPlay
                    muted
                    loop
                    playsInline

                    variants={{

                      rest: {
                        scale: 1,
                        filter: "brightness(1)",
                      },

                      hover: {
                        scale: 1.08,
                        filter: "brightness(1.05)",
                      },
                    }}

                    transition={{
                      duration: 1.2,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />

                  {/* OVERLAY */}

                  <motion.div

                    className="card-vignette-layer"

                    variants={{

                      rest: {
                        opacity: 0.62,
                      },

                      hover: {
                        opacity: 0.9,
                      },
                    }}

                    transition={{
                      duration: 0.45,
                    }}
                  />

                  {/* NOISE */}

                  <div className="portfolio-noise-layer"></div>

                  {/* BADGE */}

                  <motion.div

                    className="portfolio-floating-badge"

                    variants={{

                      rest: {
                        opacity: 0,
                        y: -12,
                      },

                      hover: {
                        opacity: 1,
                        y: 0,
                      },
                    }}

                    transition={{
                      duration: 0.35,
                    }}
                  >
                    FEATURED WORK
                  </motion.div>

                </motion.div>

                {/* CONTENT */}

                <motion.div

                  className="card-details-footer"

                  initial={{
                    opacity: 0,
                    y: 20,
                  }}

                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}

                  viewport={{
                    once: true,
                  }}

                  transition={{
                    delay: 0.2 + index * 0.05,
                    duration: 0.7,
                  }}
                >

                  <motion.span

                    className="card-meta-tag"

                    whileHover={{
                      scale: 1.05,
                    }}
                  >
                    {item.tag}
                  </motion.span>

                  <motion.h3

                    className="card-display-title"

                    whileHover={{
                      x: 5,
                    }}

                    transition={{
                      duration: 0.3,
                    }}
                  >
                    {item.title}
                  </motion.h3>

                  <motion.p

                    className="portfolio-card-subtext"

                    initial={{
                      opacity: 0,
                    }}

                    whileInView={{
                      opacity: 1,
                    }}

                    transition={{
                      delay: 0.3,
                    }}
                  >
                    Premium cinematic storytelling
                    crafted with high-end production
                    workflows and immersive visuals.
                  </motion.p>

                </motion.div>

              </motion.div>

            ))}

          </AnimatePresence>

        </motion.div>

        {/* BUTTON */}

        <motion.div

          className="portfolio-view-more"

          initial={{
            opacity: 0,
            y: 30,
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
            delay: 0.3,
          }}
        >

          <Link
            to="/gallery"
            className="portfolio-view-btn"
          >
            VIEW MORE WORKS

            <span className="view-arrow">
              ↗
            </span>
          </Link>

        </motion.div>

      </div>

    </section>

  );
};

export default Portfolio;