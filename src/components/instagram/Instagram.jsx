import React from "react";

import { motion } from "framer-motion";

import "./Instagram.css";

/* ================= VIDEOS ================= */

import video1 from "../../assets/video1.mp4";
import video2 from "../../assets/video2.mp4";
import video3 from "../../assets/video3.mp4";
import video4 from "../../assets/video4.mp4";
import video5 from "../../assets/video5.mp4";
import video6 from "../../assets/video3.mp4";

export default function Instagram() {

  const videos = [
    video1,
    video2,
    video3,
    video4,
    video5,
    video6,
  ];

  /* =========================
      CONTAINER VARIANTS
  ========================= */

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

  /* =========================
      ITEM VARIANTS
  ========================= */

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

      {/* ================= GLOW ================= */}

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

      {/* ================= HEADER ================= */}

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
          ART LIVES IN THE
        </span>

        <h2 className="insta-title">
          INSTAGRAM
        </h2>

      </motion.div>

      {/* ================= CONTENT ================= */}

      <div className="insta-main-content">

        {/* ================= GRID ================= */}

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

          {videos.map((video, i) => (

            <motion.div

              key={i}

              className="insta-photo-item"

              variants={itemVariants}

              whileHover={{
                y: -10,
                scale: 1.02,
              }}

              transition={{
                type: "spring",
                stiffness: 120,
                damping: 18,
              }}
            >

              {/* VIDEO */}

              <motion.video

                src={video}

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

              {/* OVERLAY */}

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

                  className="insta-overlay-icon"

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

                  <i className="fab fa-instagram"></i>

                </motion.div>

              </motion.div>

            </motion.div>

          ))}

        </motion.div>

        {/* ================= RIGHT BOX ================= */}

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

          <div className="gold-content">

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

              FOLLOW OUR JOURNEY

            </motion.h3>

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

              Get inspired and follow us on
              Instagram for premium cinematic
              frames and behind-the-scenes stories.

            </motion.p>

            {/* BUTTON */}

            <motion.a

              href="https://www.instagram.com/clicksbykorniza/"

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

              FOLLOW OUR JOURNEY

            </motion.a>

          </div>

        </motion.div>

      </div>

    </section>

  );
}