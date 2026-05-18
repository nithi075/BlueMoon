import React from "react";

import { motion } from "framer-motion";

import videoSrc from "../../assets/banner.mp4";

import "./Banner.css";

const Banner = () => {

  return (

    <section className="cinematic-banner">

      {/* =====================================================
          BACKGROUND VIDEO
      ===================================================== */}

      <video
        autoPlay
        muted
        loop
        playsInline
        className="banner-video"
      >

        <source
          src={videoSrc}
          type="video/mp4"
        />

      </video>

      {/* =====================================================
          OVERLAY
      ===================================================== */}

      <div className="banner-video-overlay"></div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="banner-overlay">

        {/* SMALL LABEL */}

        <motion.p

          className="banner-label"

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
            ease: "easeOut",
          }}
        >

          CINEMATIC WEDDING PHOTOGRAPHY

        </motion.p>

        {/* MAIN TITLE */}

        <motion.h2

          initial={{
            opacity: 0,
            y: 40,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 1,
            delay: 0.2,
            ease: "easeOut",
          }}
        >

          Capturing Stories

          <span> That Last Forever</span>

        </motion.h2>

        {/* DESCRIPTION */}

        <motion.span

          className="banner-desc"

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
            delay: 0.4,
            ease: "easeOut",
          }}
        >

          Luxury wedding films & timeless photography

          <br />

          Crafted with emotion, elegance & cinematic storytelling

          <br />

          Creating memories that feel alive forever ✨

        </motion.span>

        {/* BUTTON */}

        <motion.a

          href="https://clicksbykorniza.vercel.app/"

          target="_blank"

          rel="noreferrer"

          className="banner-btn"

          initial={{
            opacity: 0,
            scale: 0.9,
          }}

          animate={{
            opacity: 1,
            scale: 1,
          }}

          transition={{
            duration: 0.8,
            delay: 0.6,
            ease: "easeOut",
          }}

          whileHover={{
            scale: 1.05,
            y: -2,
          }}

          whileTap={{
            scale: 0.96,
          }}
        >

          Explore Wedding Stories ↗

        </motion.a>

      </div>

    </section>
  );
};

export default Banner;