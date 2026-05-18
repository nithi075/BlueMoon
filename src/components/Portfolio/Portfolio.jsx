import React, { useState } from "react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import { Link } from "react-router-dom";

import "./Portfolio.css";

/* VIDEOS */

import video1 from "../../assets/video1.mp4";
import video2 from "../../assets/video2.mp4";
import video3 from "../../assets/video3.mp4";
import video4 from "../../assets/video4.mp4";
import video5 from "../../assets/video5.mp4";

const Portfolio = () => {

  const [activeCategory, setActiveCategory] =
    useState("all");

  /* =========================================================
     VIDEO OVERLAY
  ========================================================= */

  const [selectedVideo, setSelectedVideo] =
    useState(null);

  /* =========================================================
     ITEMS
  ========================================================= */

  const portfolioItems = [

    {
      id: 1,

      title: "Luxury Cafe Launch",

      category: "social-campaign",

      tag: "INSTAGRAM CAMPAIGN",

      video: video1,
    },

    {
      id: 2,

      title: "Fashion Brand Reels",

      category: "reels",

      tag: "SHORT FORM CONTENT",

      video: video2,
    },

    {
      id: 3,

      title: "Restaurant Content System",

      category: "social-campaign",

      tag: "SOCIAL MEDIA MANAGEMENT",

      video: video3,
    },

    {
      id: 4,

      title: "Creator Growth Campaign",

      category: "brand-identity",

      tag: "PERSONAL BRANDING",

      video: video4,
    },

    {
      id: 5,

      title: "Real Estate Visual Campaign",

      category: "reels",

      tag: "CINEMATIC REELS",

      video: video5,
    },

  ];

  /* =========================================================
     FILTERS
  ========================================================= */

  const categories = [

    {
      id: "all",
      label: "ALL WORK",
    },

    {
      id: "reels",
      label: "REELS",
    },

    {
      id: "social-campaign",
      label: "SOCIAL CAMPAIGNS",
    },

    {
      id: "brand-identity",
      label: "BRAND IDENTITY",
    },

  ];

  /* =========================================================
     FILTER LOGIC
  ========================================================= */

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

      {/* BG TEXT */}

      <div className="portfolio-bg-text">
        PORTFOLIO
      </div>

      {/* GLOW */}

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

        {/* =====================================================
            HEADER
        ===================================================== */}

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

            FEATURED PORTFOLIO

          </span>

          <h2 className="section-title">

            Content Built

            <span className="text-highlight">

              {" "}For Attention.

            </span>

          </h2>

          <p className="portfolio-section-desc">

            A curated collection of social-first campaigns,
            cinematic reels, and modern brand storytelling
            crafted to dominate attention online.

          </p>

          {/* FILTERS */}

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

        {/* =====================================================
            GRID
        ===================================================== */}

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

                onClick={() =>
                  setSelectedVideo(item)
                }

                variants={{

                  hidden: {

                    opacity: 0,
                    y: 120,
                    scale: 0.84,
                    filter: "blur(18px)",

                  },

                  visible: {

                    opacity: 1,
                    y: 0,
                    scale: 1,
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
                  y: -16,
                  scale: 1.015,
                }}

                whileTap={{
                  scale: 0.985,
                }}

                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 18,
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

                    muted
                    playsInline

                    variants={{

                      rest: {

                        scale: 1,

                        filter: "brightness(.82)",

                      },

                      hover: {

                        scale: 1.08,

                        filter: "brightness(1)",

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
                        opacity: 0.65,
                      },

                      hover: {
                        opacity: 0.9,
                      },
                    }}
                  />

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
                  >

                    {item.title}

                  </motion.h3>

                  <motion.p

                    className="portfolio-card-subtext"
                  >

                    Built for reach, engagement,
                    and modern digital culture.

                  </motion.p>

                </motion.div>

              </motion.div>

            ))}

          </AnimatePresence>

        </motion.div>

        {/* =====================================================
            BUTTON
        ===================================================== */}

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

            VIEW FULL PORTFOLIO

            <span className="view-arrow">

              ↗

            </span>

          </Link>

        </motion.div>

      </div>

      {/* =====================================================
          VIDEO OVERLAY
      ===================================================== */}

      <AnimatePresence>

        {selectedVideo && (

          <motion.div

            className="video-overlay"

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

            {/* BACKDROP */}

            <div

              className="video-overlay-backdrop"

              onClick={() =>
                setSelectedVideo(null)
              }
            />

            {/* CONTENT */}

            <motion.div

              className="video-overlay-content"

              initial={{
                scale: 0.9,
                opacity: 0,
                y: 40,
              }}

              animate={{
                scale: 1,
                opacity: 1,
                y: 0,
              }}

              exit={{
                scale: 0.9,
                opacity: 0,
                y: 40,
              }}

              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
            >

              {/* CLOSE */}

              <button

                className="video-close-btn"

                onClick={() =>
                  setSelectedVideo(null)
                }
              >

                ✕

              </button>

              {/* VIDEO */}

              <video

                src={selectedVideo.video}

                controls
                autoPlay

                className="fullscreen-video"
              />

              {/* INFO */}

              <div className="overlay-video-info">

                <span>
                  {selectedVideo.tag}
                </span>

                <h2>
                  {selectedVideo.title}
                </h2>

                <p>

                  Built for reach, engagement,
                  and modern digital culture.

                </p>

              </div>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  );
};

export default Portfolio;