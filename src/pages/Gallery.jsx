import React, {
  useState,
} from "react";

import {
  motion,
} from "framer-motion";

import {
  ArrowUpRight,
  Play,
} from "lucide-react";

import "./Gallery.css";

/* VIDEOS */

import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import video3 from "../assets/video3.mp4";
import video4 from "../assets/video4.mp4";
import video5 from "../assets/video2.mp4";

const Gallery = () => {

  /* =========================
     ACTIVE CATEGORY
  ========================= */

  const [activeCategory, setActiveCategory] =
    useState("all");

  /* =========================
     FILTERS
  ========================= */

  const categories = [

    {
      id: "all",
      label: "ALL",
    },

    {
      id: "fashion",
      label: "FASHION",
    },

    {
      id: "commercial",
      label: "COMMERCIAL",
    },

    {
      id: "jewelry",
      label: "JEWELRY",
    },

    {
      id: "branding",
      label: "BRANDING",
    },

  ];

  /* =========================
     GALLERY DATA
  ========================= */

  const galleryItems = [

    {
      id: 1,
      title: "Luxury Saree Campaign",
      category: "fashion",
      type: "Fashion Shoot",
      year: "2026",
      video: video1,
    },

    {
      id: 2,
      title: "Model Portfolio Visuals",
      category: "fashion",
      type: "Model Shoot",
      year: "2026",
      video: video2,
    },

    {
      id: 3,
      title: "Jewelry Brand Commercial",
      category: "jewelry",
      type: "Jewelry Shoot",
      year: "2025",
      video: video3,
    },

    {
      id: 4,
      title: "Product Commercial Reel",
      category: "commercial",
      type: "Commercial",
      year: "2025",
      video: video4,
    },

    {
      id: 5,
      title: "Brand Story Campaign",
      category: "branding",
      type: "Brand Visuals",
      year: "2026",
      video: video5,
    },

  ];

  /* =========================
     FILTER LOGIC
  ========================= */

  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter(
          (item) =>
            item.category ===
            activeCategory
        );

  return (

    <section className="gallery-section">

      {/* =========================
          HERO
      ========================= */}

      <div className="gallery-hero">

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
        >

          <div className="gallery-mini-label">

            <span></span>

            <p>
              SELECTED WORK
            </p>

          </div>

          <h1 className="gallery-title">

            Cinematic
            <span> Gallery.</span>

          </h1>

        </motion.div>

        <motion.p
          className="gallery-description"
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
        >

          A curated collection of luxury
          visuals, cinematic storytelling,
          fashion campaigns, commercials,
          and premium brand productions.

        </motion.p>

      </div>

      {/* =========================
          FILTERS
      ========================= */}

      <div className="gallery-filter-wrapper">

        {categories.map((cat) => (

          <button
            key={cat.id}
            className={`gallery-filter-btn ${
              activeCategory === cat.id
                ? "active-gallery-filter"
                : ""
            }`}
            onClick={() =>
              setActiveCategory(cat.id)
            }
          >

            {cat.label}

          </button>

        ))}

      </div>

      {/* =========================
          STATS
      ========================= */}

  

      {/* =========================
          GRID
      ========================= */}

      <div className="gallery-grid">

        {filteredItems.map(
          (item, index) => (

            <motion.div
              key={item.id}
              className={`gallery-card ${
                index === 1
                  ? "gallery-featured"
                  : ""
              }`}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
              }}
              viewport={{
                once: true,
              }}
            >

              {/* VIDEO */}

              <div className="gallery-video-wrapper">

                <video
                  src={item.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                />

                <div className="gallery-overlay"></div>

                {/* TOP */}

                <div className="gallery-card-top">

                  <span>
                    {item.type}
                  </span>

                  <p>
                    {item.year}
                  </p>

                </div>

                {/* PLAY */}

                <div className="gallery-play-btn">

                  <Play size={20} />

                </div>

                {/* CONTENT */}

                <div className="gallery-content">

                  <div>

                    <p>
                      Premium Production
                    </p>

                    <h2>
                      {item.title}
                    </h2>

                  </div>

                  <button>

                    Explore

                    <ArrowUpRight
                      size={18}
                    />

                  </button>

                </div>

              </div>

            </motion.div>

          )
        )}

      </div>

      {/* =========================
          CTA
      ========================= */}

      <div className="gallery-bottom">

        <h2>

          Turning Creative Ideas
          Into Cinematic Experiences.

        </h2>

        <button>

          Start Your Project

          <ArrowUpRight
            size={18}
          />

        </button>

      </div>

    </section>

  );
};

export default Gallery;