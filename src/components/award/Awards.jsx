import React from "react";

import { motion } from "framer-motion";

import "./Awards.css";

/* =========================================================
   RECOGNITION DATA
========================================================= */

const awardsData = [

  {
    value: "2025",

    label:
      "Recognized Among Chennai’s Emerging Creative Studios",
  },

  {
    value: "10+",

    label:
      "Modern Brands Collaborated Across Fashion, Lifestyle & Events",
  },

  {
    value: "50M+",

    label:
      "Organic Social Reach Generated Through Short-Form Content",
  },

  {
    value: "Top Rated",

    label:
      "Known For Cinematic Reels & Luxury Brand Storytelling",
  },

];

/* =========================================================
   MARQUEE
========================================================= */

const featuredLogos = [

  "CREATIVE",
  "SOCIAL-FIRST",
  "BRAND STORIES",
  "LUXURY REELS",
  "CONTENT SYSTEMS",
  "VISUAL IDENTITY",

];

export default function Awards() {

  return (

    <section className="awards-section">

      {/* BG TEXT */}

      <div className="awards-bg-text">
        RECOGNITION
      </div>

      {/* GLOW */}

      <motion.div

        className="awards-main-glow"

        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.3, 0.55, 0.3],
        }}

        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="awards-container">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <motion.div

          className="awards-header"

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
          }}
        >

          <span className="awards-tag">
            FEATURED & RECOGNIZED
          </span>

          <h2 className="awards-title">

            Recognition
            <span> Earned.</span>

          </h2>

          <p className="awards-description">

            Our work is trusted by modern brands,
            creators, and businesses looking
            to build cinematic digital presence
            through social-first storytelling.

          </p>

        </motion.div>

        {/* =====================================================
            RECOGNITION GRID
        ===================================================== */}

        <div className="awards-grid">

          {awardsData.map((item, index) => (

            <motion.div

              key={index}

              className="award-card"

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
                delay: index * 0.12,
              }}

              whileHover={{
                y: -8,
                scale: 1.02,
              }}

              whileTap={{
                scale: 0.985,
              }}
            >

              {/* REFLECTION */}

              <div className="award-reflection"></div>

              {/* VALUE */}

              <h3>
                {item.value}
              </h3>

              {/* LABEL */}

              <p>
                {item.label}
              </p>

            </motion.div>

          ))}

        </div>

        {/* =====================================================
            TRUST LABEL
        ===================================================== */}

        <motion.div

          className="awards-marquee-title"

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

          TRUSTED BY MODERN BRANDS

        </motion.div>

        {/* =====================================================
            MARQUEE
        ===================================================== */}

        <div className="logo-marquee-wrapper">

          <motion.div

            className="logo-marquee"

            animate={{
              x: ["0%", "-50%"],
            }}

            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
          >

            {[...featuredLogos,
              ...featuredLogos].map((logo, i) => (

              <div

                key={i}

                className="logo-item"
              >

                {logo}

              </div>

            ))}

          </motion.div>

        </div>

      </div>

    </section>
  );
}