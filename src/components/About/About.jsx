import React, { useRef } from "react";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import "./About.css";

import aboutimage from "../../assets/about1.jpg";

const About = () => {

  const sectionRef = useRef(null);

  /* PARALLAX */

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -60]
  );

  const bgTextY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -120]
  );

  /* ANIMATIONS */

  const imageVariants = {
    hidden: {
      opacity: 0,
      x: -80,
      scale: 0.92,
    },

    visible: {
      opacity: 1,
      x: 0,
      scale: 1,

      transition: {
        duration: 1,
        ease: [0.25, 1, 0.5, 1],
      },
    },
  };

  const containerVariants = {

    hidden: {
      opacity: 0,
    },

    visible: {

      opacity: 1,

      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {

    hidden: {
      opacity: 0,
      y: 40,
      filter: "blur(10px)",
    },

    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",

      transition: {
        duration: 0.8,
        ease: [0.25, 1, 0.5, 1],
      },
    },
  };

  return (

    <section
      className="about-section"
      id="about"
      ref={sectionRef}
    >

      {/* HUGE BG TEXT */}

      <motion.div
        className="about-bg-text"
        style={{ y: bgTextY }}
      >
        STORYTELLING
      </motion.div>

      <div className="about-container">

        {/* LEFT VISUAL */}

        <motion.div
          className="about-visual-side"

          variants={imageVariants}

          initial="hidden"

          whileInView="visible"

          viewport={{
            once: true,
            amount: 0.3,
          }}

          style={{ y: imageY }}
        >

          <div className="image-frame-wrapper">

            {/* GLOW */}

            <div className="floating-orb"></div>

            {/* IMAGE */}

            <motion.img

              src={aboutimage}

              alt="Creative team building modern brands"

              className="about-display-img"

              whileHover={{
                scale: 1.04,
              }}

              transition={{
                duration: 0.5,
              }}
            />

            {/* OVERLAY */}

            <div className="frame-ambient-glow"></div>

            {/* EXPERIENCE BADGE */}

            <motion.div

              className="experience-badge"

              initial={{
                scale: 0,
                rotate: -10,
              }}

              whileInView={{
                scale: 1,
                rotate: 0,
              }}

              viewport={{
                once: true,
              }}

              transition={{
                type: "spring",
                stiffness: 100,
                delay: 0.5,
              }}

              whileHover={{
                y: -8,
                scale: 1.03,
              }}
            >

              <span className="badge-number">
                5+
              </span>

              <span className="badge-text">
                Years Building
                Modern Brands
              </span>

            </motion.div>

          </div>

        </motion.div>

        {/* RIGHT CONTENT */}

        <motion.div

          className="about-content-side"

          variants={containerVariants}

          initial="hidden"

          whileInView="visible"

          viewport={{
            once: true,
            amount: 0.2,
          }}
        >

          <motion.span

            variants={itemVariants}

            className="section-subtitle"
          >
            WHO WE ARE
          </motion.span>

          <motion.div

            className="accent-line"

            initial={{
              width: 0,
            }}

            whileInView={{
              width: 90,
            }}

            transition={{
              duration: 1,
            }}
          />

          {/* TITLE */}

          <motion.h2

            variants={itemVariants}

            className="section-title"
          >

            We Build Brands
            <span className="text-highlight">
              {" "}People Remember.
            </span>

          </motion.h2>

          {/* DESC */}

          <motion.p

            variants={itemVariants}

            className="about-description"
          >

            We blend cinematic storytelling,
            modern aesthetics, and social-first strategy
            to create content engineered for attention.

          </motion.p>

          <motion.p

            variants={itemVariants}

            className="about-description"
          >

            From high-impact reels to immersive brand visuals,
            every frame is crafted to elevate perception,
            build audience connection,
            and make brands impossible to ignore.

          </motion.p>

          {/* STATS */}

          <motion.div

            variants={itemVariants}

            className="about-stats-grid"
          >

            {[
              {
                id: 1,
                num: "120M+",
                label: "Views Generated",
              },

              {
                id: 2,
                num: "10+",
                label: "Brands Managed",
              },

              {
                id: 3,
                num: "3M+",
                label: "Monthly Reach",
              },

            ].map((stat) => (

              <motion.div

                key={stat.id}

                className="stat-card"

                whileHover={{
                  y: -8,
                }}
              >

                <h3 className="stat-number">
                  {stat.num}
                </h3>

                <p className="stat-label">
                  {stat.label}
                </p>

              </motion.div>

            ))}

          </motion.div>

        </motion.div>

      </div>

    </section>
  );
};

export default About;