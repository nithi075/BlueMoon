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

/* LOCAL VIDEOS */

import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import video3 from "../assets/video3.mp4";
import video4 from "../assets/video4.mp4";

const Gallery = () => {

  const [activeCategory, setActiveCategory] =
    useState("all");

  /* VIDEOS */

  const videos = [

    {
      id: 1,

      title: "Luxury Commercial",

      category: "commercial",

      year: "2026",

      client: "AETHER",

      duration: "02:14",

      description:
        "High-end cinematic commercial production crafted with luxury visual storytelling and immersive direction.",

      video: video4,
    },

    {
      id: 2,

      title: "Music Visual",

      category: "music",

      year: "2026",

      client: "NOIR",

      duration: "03:42",

      description:
        "Creative cinematic visuals engineered for modern music artists and immersive visual identity.",

      video: video3,
    },

    {
      id: 3,

      title: "Brand Film",

      category: "brand",

      year: "2025",

      client: "VELORA",

      duration: "01:56",

      description:
        "Luxury brand storytelling with editorial cinematography and emotional visual narratives.",

      video: video3,
    },

    {
      id: 4,

      title: "Fashion Reel",

      category: "fashion",

      year: "2026",

      client: "ÉLAN",

      duration: "02:38",

      description:
        "Premium fashion visuals blending cinematic motion, luxury aesthetics, and elevated styling.",

      video: video4,
    },

  ];

  /* FILTERS */

  const categories = [
    "all",
    "commercial",
    "music",
    "brand",
    "fashion",
  ];

  /* FILTER LOGIC */

  const filteredVideos =
    activeCategory === "all"
      ? videos
      : videos.filter(
          (video) =>
            video.category === activeCategory
        );

  return (

    <section className="gallery-page">

      {/* MAIN GLOW */}

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

      {/* HERO */}

      <div className="gallery-hero">

        <motion.span

          className="gallery-label"

          initial={{
            opacity: 0,
            y: 20,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.8,
          }}
        >
          CINEMATIC PORTFOLIO
        </motion.span>

        <motion.h1

          initial={{
            opacity: 0,
            y: 60,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 1,
          }}
        >
          Crafted
          <span className="gallery-accent">
            {" "}Visual Stories
          </span>
        </motion.h1>

        <motion.p

          initial={{
            opacity: 0,
            y: 30,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 1,
            delay: 0.2,
          }}
        >
          Explore premium cinematic productions,
          immersive storytelling, editorial visuals,
          and luxury brand experiences engineered
          with modern creative direction.
        </motion.p>

      </div>

      {/* FILTERS */}

      <div className="gallery-filters">

        {categories.map((cat) => (

          <button
            key={cat}
            onClick={() =>
              setActiveCategory(cat)
            }
            className={
              activeCategory === cat
                ? "active-filter"
                : ""
            }
          >
            {cat.toUpperCase()}
          </button>

        ))}

      </div>

      {/* GRID */}

      <motion.div
        layout
        className="gallery-grid"
      >

        <AnimatePresence mode="popLayout">

          {filteredVideos.map((item) => (

            <motion.div

              layout

              key={item.id}

              className="gallery-card"

              initial={{
                opacity: 0,
                y: 80,
                scale: 0.9,
              }}

              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
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

              {/* VIDEO */}

              <div className="gallery-video-wrapper">

                <video
                  src={item.video}
                  className="gallery-video"
                  controls
                  loop
                  playsInline
                  preload="metadata"
                />

                {/* OVERLAY */}

                <div className="gallery-overlay">

                  <div className="gallery-play-btn">
                    <FiPlay />
                  </div>

                </div>

                {/* META */}

                <div className="gallery-top-meta">

                  <span>
                    {item.client}
                  </span>

                  <span>
                    {item.duration}
                  </span>

                </div>

              </div>

              {/* CONTENT */}

              <div className="gallery-content">

                <div className="gallery-content-top">

                  <span className="gallery-tag">
                    {item.category}
                  </span>

                  <span className="gallery-year">
                    {item.year}
                  </span>

                </div>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.description}
                </p>

                {/* FOOTER */}

                <div className="gallery-footer">

                  <button className="gallery-watch-btn">

                    WATCH FILM

                    <FiArrowUpRight />

                  </button>

                </div>

              </div>

            </motion.div>

          ))}

        </AnimatePresence>

      </motion.div>

    </section>

  );
};

export default Gallery;