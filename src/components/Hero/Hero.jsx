import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";
import video from "../../assets/video2.mp4";

const Hero = () => {
  // Editorial Smooth Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.25, 1, 0.5, 1], // Custom cinematic cubic-bezier
      },
    },
  };

  return (
    <section className="hero-section" id="hero">
      {/* =========================================
          CINEMATIC VIDEO BACKGROUND & OVERLAYS
      ========================================= */}
      <div className="hero-video-wrapper">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src={video} type="video/mp4" />
        </video>

        {/* LUXURY OVERLAYS */}
        <div className="hero-overlay"></div>
        <div className="hero-gradient"></div>
        <div className="hero-grid"></div>
      </div>

      {/* =========================================
          EDITORIAL HERO CONTENT
      ========================================= */}
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* MINIMAL TAG */}
        <motion.div variants={itemVariants} className="hero-tag" >
          <span className="pulse-dot"></span>
          CINEMATIC STORYTELLING
        </motion.div>

        {/* LUXURY FINE-ART TITLE */}
        <motion.h1 variants={itemVariants} className="hero-title" >
          We Capture
          <span className="gradient-text"> Visual Poetry </span>
          <br />
          Beyond Ordinary Frames.
        </motion.h1>

        {/* BREATHABLE DESCRIPTION */}
        <motion.p variants={itemVariants} className="hero-description" >
          Premium wedding films, destination stories, emotional storytelling, 
          and timeless cinematic experiences crafted with elegance and soul.
        </motion.p>

        {/* MINIMAL SHARP BUTTONS */}
        <motion.div variants={itemVariants} className="hero-buttons" >
          <a href="#showreel" className="hero-btn-primary">
            WATCH SHOWREEL
          </a>
          <a href="#contact" className="hero-btn-secondary">
            BOOK A PROJECT
          </a>
        </motion.div>
      </motion.div>

      {/* =========================================
          MINIMAL SCROLL INDICATOR
      ========================================= */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
      >
        <div className="mouse">
          <motion.div
            className="wheel"
            animate={{ y: [0, 40, 0] }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;