import React from "react";

import { motion } from "framer-motion";

import "./Instagram.css";

/* =========================================================
   VIDEOS
========================================================= */

import video1 from "../../assets/video1.mp4";
import video2 from "../../assets/video2.mp4";
import video3 from "../../assets/video3.mp4";
import video4 from "../../assets/video4.mp4";
import video5 from "../../assets/video5.mp4";
import video6 from "../../assets/video3.mp4";

export default function Instagram() {

  /* =========================================================
     REELS DATA
  ========================================================= */

  const videos = [

    {
      video: video1,

      tag: "REEL",

      link:
        "https://www.instagram.com/reel/XXXXXXXX/",
    },

    {
      video: video2,

      tag: "CAMPAIGN",

      link:
        "https://www.instagram.com/p/DXb2Vhdj4Ly/",
    },

    {
      video: video3,

      tag: "SOCIAL",

      link:
        "https://www.instagram.com/p/CyD5zkLLgTG/",
    },

    {
      video: video4,

      tag: "CONTENT",

      link:
        "https://www.instagram.com/p/DXRi2WbDwYX/",
    },

    {
      video: video5,

      tag: "BRAND",

      link:
        "https://www.instagram.com/p/CyD5zkLLgTG/",
    },

    {
      video: video6,

      tag: "STORY",

      link:
        "https://www.instagram.com/p/CyD5zkLLgTG/",
    },

  ];

  /* =========================================================
      CONTAINER VARIANTS
  ========================================================= */

  const containerVariants = {

    hidden: {
      opacity: 0,
    },

    visible: {

      opacity: 1,

      transition: {

        staggerChildren: 0.12,

        delayChildren: 0.15,

      },
    },
  };

  /* =========================================================
      ITEM VARIANTS
  ========================================================= */

  const itemVariants = {

    hidden: {

      opacity: 0,

      y: 60,

      scale: 0.92,

      filter: "blur(12px)",

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
  };

  return (

    <section className="insta-container">

      {/* =====================================================
          BG TEXT
      ===================================================== */}

      <div className="insta-bg-text">

        SOCIAL

      </div>

      {/* =====================================================
          GLOW
      ===================================================== */}

      <motion.div

        className="insta-floating-glow"

        animate={{

          scale: [1, 1.08, 1],

          opacity: [0.25, 0.55, 0.25],

        }}

        transition={{

          duration: 8,

          repeat: Infinity,

          ease: "easeInOut",

        }}
      />

      {/* =====================================================
          HEADER
      ===================================================== */}

      <motion.div

        className="insta-header"

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
          ease: [0.16, 1, 0.3, 1],
        }}
      >

        <span className="insta-tag">

          SOCIAL-FIRST STORYTELLING

        </span>

        <h2 className="insta-title">

          Built For

          <span> Attention.</span>

        </h2>

      </motion.div>

      {/* =====================================================
          MAIN
      ===================================================== */}

      <div className="insta-main-content">

        {/* =================================================
            GRID
        ================================================= */}

        <motion.div

          className="insta-photo-grid"

          variants={containerVariants}

          initial="hidden"

          whileInView="visible"

          viewport={{
            once: true,
            amount: 0.1,
          }}
        >

          {videos.map((item, i) => (

            <motion.a

              href={item.link}

              target="_blank"

              rel="noopener noreferrer"

              key={i}

              className={`insta-photo-item ${
                i === 0 || i === 4
                  ? "tall-card"
                  : ""
              }`}

              variants={itemVariants}

              whileHover={{
                y: -10,
                scale: 1.02,
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

              {/* =================================================
                  TAG
              ================================================= */}

              <span className="reel-tag">

                {item.tag}

              </span>

              {/* =================================================
                  VIDEO
              ================================================= */}

              <motion.video

                src={item.video}

                className="insta-video"

                autoPlay
                muted
                loop
                playsInline

                whileHover={{
                  scale: 1.08,
                }}

                transition={{
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />

              {/* =================================================
                  OVERLAY
              ================================================= */}

              <motion.div

                className="insta-overlay"

                initial={{
                  opacity: 0,
                }}

                whileHover={{
                  opacity: 1,
                }}

                transition={{
                  duration: 0.35,
                }}
              >

                <motion.div

                  className="insta-overlay-content"

                  initial={{
                    scale: 0.7,
                    opacity: 0,
                  }}

                  whileHover={{
                    scale: 1,
                    opacity: 1,
                  }}

                  transition={{
                    type: "spring",
                    stiffness: 180,
                    damping: 14,
                  }}
                >

                  <span>

                    View Reel

                  </span>

                  <i className="fab fa-instagram"></i>

                </motion.div>

              </motion.div>

            </motion.a>

          ))}

        </motion.div>

        {/* =================================================
            RIGHT PANEL
        ================================================= */}

        <motion.div

          className="insta-gold-box"

          initial={{
            opacity: 0,
            x: 60,
            scale: 0.95,
          }}

          whileInView={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}

          viewport={{
            once: true,
          }}

          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}

          whileHover={{
            y: -8,
          }}
        >

          {/* REFLECTION */}

          <div className="insta-reflection"></div>

          <div className="gold-content">

            {/* TITLE */}

            <motion.h3

              initial={{
                opacity: 0,
                y: 20,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                delay: 0.2,
              }}
            >

              Follow The Studio

            </motion.h3>

            {/* DESCRIPTION */}

            <motion.p

              initial={{
                opacity: 0,
                y: 20,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                delay: 0.3,
              }}
            >

              Behind the scenes,
              cinematic campaigns,
              trending reels,
              and modern brand storytelling —
              updated weekly.

            </motion.p>

            {/* BUTTON */}

            <motion.a

              href="https://www.instagram.com/bluemoonmedia_ads/"

              target="_blank"

              rel="noopener noreferrer"

              className="insta-btn"

              whileHover={{
                y: -3,
                scale: 1.03,
              }}

              whileTap={{
                scale: 0.97,
              }}
            >

              <motion.span

                className="btn-icon"

                animate={{
                  rotate: [0, -8, 8, 0],
                }}

                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                }}
              >

                📷

              </motion.span>

              FOLLOW ON INSTAGRAM ↗

            </motion.a>

          </div>

        </motion.div>

      </div>

    </section>

  );
}