import React from "react";

import { motion } from "framer-motion";

import "./Featured.css";

/* LOCAL VIDEOS */

import video1 from "../../assets/video1.mp4";
import video2 from "../../assets/video2.mp4";
import video3 from "../../assets/video3.mp4";
import video4 from "../../assets/video4.mp4";
import video5 from "../../assets/video5.mp4";

const Featured = () => {

  const items = [

    {
      id: 1,

      title: "Luxury Brand Commercial",

      subtitle: "4K Product Campaign",

      class: "item-1",

      video: video1,
    },

    {
      id: 2,

      title: "Midnight Music Visual",

      subtitle: "Cinematic Performance Film",

      class: "item-2",

      video: video2,
    },

    {
      id: 3,

      title: "Fashion Editorial Campaign",

      subtitle: "Creative Direction & Production",

      class: "item-3",

      video: video3,
    },

    {
      id: 4,

      title: "Corporate Brand Story",

      subtitle: "Commercial Documentary",

      class: "item-4",

      video: video4,
    },

    {
      id: 5,

      title: "Premium Automotive Reel",

      subtitle: "High-Speed Cinematic Capture",

      class: "item-5",

      video: video2,
    },

  ];

  /* CONTAINER ANIMATION */

  const containerVariants = {

    hidden: {
      opacity: 0,
    },

    visible: {

      opacity: 1,

      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.1,
      },
    },
  };

  /* CARD ANIMATION */

  const cardVariants = {

    hidden: {
      opacity: 0,
      y: 80,
      scale: 0.9,
      filter: "blur(14px)",
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

    <section className="featured-section">

      {/* AMBIENT GLOW */}

      <motion.div

        className="featured-ambient-glow"

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

      {/* HEADER */}

      <motion.div

        className="portfolio-header"

        initial={{
          opacity: 0,
          y: -30,
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

        <span className="tagline">
          FEATURED PRODUCTIONS
        </span>

        <h2>
          Cinematic
          <span className="text-highlight">
            {" "}Showcase
          </span>
        </h2>

        <p className="featured-description">
          A curated collection of premium commercials,
          music visuals, branded films, and cinematic
          storytelling crafted with midnight aesthetics.
        </p>

      </motion.div>

      {/* BENTO GRID */}

      <div className="bento-container">

        <motion.div

          className="bento-grid"

          variants={containerVariants}

          initial="hidden"

          whileInView="visible"

          viewport={{
            once: true,
            amount: 0.15,
          }}
        >

          {items.map((item) => (

            <motion.div

              key={item.id}

              className={`bento-item ${item.class}`}

              variants={cardVariants}

              whileHover={{
                y: -10,
                scale: 0.99,
              }}

              transition={{
                type: "spring",
                stiffness: 120,
                damping: 18,
              }}
            >

              {/* VIDEO */}

              <div className="img-wrapper">

                <motion.video

                  src={item.video}

                  className="featured-video"

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

              </div>

              {/* VIGNETTE */}

              <div className="bento-vignette"></div>

              {/* CONTENT */}

              <div className="overlay">

                <motion.div

                  className="text-content"

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
                    duration: 0.7,
                  }}
                >

                  <span className="mini-tag">
                    FEATURED FILM
                  </span>

                  <h4>
                    {item.title}
                  </h4>

                  <p>
                    {item.subtitle}
                  </p>

                </motion.div>

                {/* BUTTON */}

                <motion.div

                  className="arrow-btn"

                  whileHover={{
                    scale: 1.08,
                    rotate: -8,
                  }}

                  whileTap={{
                    scale: 0.92,
                  }}
                >

                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >

                    <line
                      x1="7"
                      y1="17"
                      x2="17"
                      y2="7"
                    />

                    <polyline
                      points="7 7 17 7 17 17"
                    />

                  </svg>

                </motion.div>

              </div>

            </motion.div>

          ))}

        </motion.div>

      </div>

    </section>

  );
};

export default Featured;