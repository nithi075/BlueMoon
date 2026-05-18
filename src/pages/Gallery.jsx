import React, { useState } from "react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  FiPlay,
  FiArrowUpRight,
} from "react-icons/fi";

import "./Gallery.css";

/* =========================================================
   LOCAL VIDEOS
========================================================= */

import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import video3 from "../assets/video3.mp4";
import video4 from "../assets/video4.mp4";
import Navbar from "../components/Navbar/Navbar";

/* =========================================================
   COMPONENT
========================================================= */

const Gallery = () => {

  /* =========================================================
     STATES
  ========================================================= */

  const [activeCategory, setActiveCategory] =
    useState("all");

  const [selectedVideo, setSelectedVideo] =
    useState(null);

  /* =========================================================
     PROJECTS
  ========================================================= */

  const videos = [

    {
      id: 1,

      title: "Luxury Fashion Campaign",

      category: "campaign",

      year: "2026",

      client: "ÉLAN STUDIO",

      duration: "00:48",

      description:
        "Editorial short-form content crafted for luxury fashion storytelling and modern audience engagement.",

      video: video4,
    },

    {
      id: 2,

      title: "Social Media Launch",

      category: "social",

      year: "2026",

      client: "VELORA",

      duration: "00:36",

      description:
        "High-retention reel campaign engineered for social-first product visibility and viral reach.",

      video: video3,
    },

    {
      id: 3,

      title: "Creator Brand Identity",

      category: "branding",

      year: "2025",

      client: "NOIR",

      duration: "00:52",

      description:
        "Cinematic creator-focused visuals designed to establish premium digital identity and engagement.",

      video: video1,
    },

    {
      id: 4,

      title: "Luxury Reel Production",

      category: "reels",

      year: "2026",

      client: "AETHER",

      duration: "00:44",

      description:
        "Modern reel storytelling combining cinematic motion, premium editing, and social-first strategy.",

      video: video2,
    },

  ];

  /* =========================================================
     FILTERS
  ========================================================= */

  const categories = [

    "all",
    "campaign",
    "social",
    "branding",
    "reels",

  ];

  /* =========================================================
     FILTER LOGIC
  ========================================================= */

  const filteredVideos =

    activeCategory === "all"

      ? videos

      : videos.filter(
          (video) =>
            video.category === activeCategory
        );

  return (
    
    <section className="gallery-page">
      <Navbar />
      {/* =====================================================
          BG TEXT
      ===================================================== */}

      <div className="gallery-bg-text">
        PROJECTS
      </div>

      {/* =====================================================
          MAIN GLOW
      ===================================================== */}

      <motion.div

        className="gallery-main-glow"

        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.8, 0.4],
        }}

        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =====================================================
          HERO
      ===================================================== */}

      <div className="gallery-hero">

        <motion.span

          className="gallery-label"

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
            duration: 0.8,
          }}
        >

          SOCIAL-FIRST SHOWCASE

        </motion.span>

        {/* TITLE */}

        <motion.h1

          initial={{
            opacity: 0,
            y: 60,
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
          }}
        >

          Built For

          <span className="gallery-accent">

            {" "}Attention

          </span>

        </motion.h1>

        {/* DESCRIPTION */}

        <motion.p

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
            delay: 0.2,
          }}
        >

          Explore cinematic reel campaigns,
          social-first storytelling,
          luxury brand visuals,
          and modern digital experiences
          crafted to dominate attention.

        </motion.p>

      </div>

      {/* =====================================================
          FILTERS
      ===================================================== */}

      <motion.div

        className="gallery-filters"

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
          duration: 0.8,
        }}
      >

        {categories.map((cat) => (

          <motion.button

            key={cat}

            onClick={() =>
              setActiveCategory(cat)
            }

            className={
              activeCategory === cat
                ? "active-filter"
                : ""
            }

            whileHover={{
              y: -3,
            }}

            whileTap={{
              scale: 0.95,
            }}
          >

            {cat.toUpperCase()}

          </motion.button>

        ))}

      </motion.div>

      {/* =====================================================
          GRID
      ===================================================== */}

      <motion.div

        layout

        className="gallery-grid"
      >

        <AnimatePresence mode="popLayout">

          {filteredVideos.map((item) => (

            <motion.div

              layout

              key={item.id}

              onClick={() =>
                setSelectedVideo(item)
              }

              className={`gallery-card ${
                item.id === 1
                  ? "featured-gallery-card"
                  : ""
              }`}

              initial={{
                opacity: 0,
                y: 80,
                scale: 0.92,
                filter: "blur(12px)",
              }}

              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                filter: "blur(0px)",
              }}

              exit={{
                opacity: 0,
                y: 40,
                scale: 0.92,
              }}

              whileHover={{
                y: -14,
              }}

              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
            >

              {/* REFLECTION */}

              <div className="gallery-reflection"></div>

              {/* =================================================
                  VIDEO
              ================================================= */}

              <div className="gallery-video-wrapper">

                <video

                  src={item.video}

                  className="gallery-video"

                  muted
                  playsInline
                  preload="metadata"

                />

                {/* OVERLAY */}

                <div className="gallery-overlay">

                  <motion.div

                    className="gallery-play-btn"

                    whileHover={{
                      scale: 1.08,
                    }}
                  >

                    <FiPlay />

                  </motion.div>

                </div>

                {/* TOP META */}

                <div className="gallery-top-meta">

                  <span>
                    {item.client}
                  </span>

                  <span>
                    {item.duration}
                  </span>

                </div>

                {/* CATEGORY */}

                <div className="gallery-category-badge">

                  {item.category}

                </div>

              </div>

              {/* =================================================
                  CONTENT
              ================================================= */}

              <div className="gallery-content">

                <div className="gallery-content-top">

                  <span className="gallery-year">

                    {item.year}

                  </span>

                </div>

                {/* TITLE */}

                <h3>

                  {item.title}

                </h3>

                {/* DESC */}

                <p>

                  {item.description}

                </p>

                {/* FOOTER */}

                <div className="gallery-footer">

                  <motion.button

                    className="gallery-watch-btn"

                    whileHover={{
                      x: 3,
                    }}
                  >

                    WATCH REEL

                    <FiArrowUpRight />

                  </motion.button>

                </div>

              </div>

            </motion.div>

          ))}

        </AnimatePresence>

      </motion.div>

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
                  {selectedVideo.category}
                </span>

                <h2>
                  {selectedVideo.title}
                </h2>

                <p>
                  {selectedVideo.description}
                </p>

              </div>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  );
};

export default Gallery;