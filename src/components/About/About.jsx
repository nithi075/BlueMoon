import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './About.css';
import aboutimage from '../../assets/about1.jpg';
const About = () => {
  const sectionRef = useRef(null);

  // Scroll Parallax
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  // Animation Variants
  const imageVariants = {
    hidden: { opacity: 0, x: -80, scale: 0.92 },
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
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 1, 0.5, 1],
      },
    },
  };

  return (
    <section className="about-section" id="about" ref={sectionRef}>
      <div className="about-container">

        {/* LEFT SIDE */}
        <motion.div
          className="about-visual-side"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          style={{ y: imageY }}
        >
          <div className="image-frame-wrapper">

            {/* Floating Blur Orb */}
            <div className="floating-orb"></div>

            <motion.img
              src={aboutimage}
              alt="Production crew behind the camera"
              className="about-display-img"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.5 }}
            />

            {/* Ambient Glow */}
            <div className="frame-ambient-glow"></div>

            {/* Premium Experience Badge */}
            <motion.div
              className="experience-badge"
              initial={{ scale: 0, rotate: -10 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{
                type: 'spring',
                stiffness: 100,
                delay: 0.5,
              }}
              whileHover={{
                y: -8,
                scale: 1.04,
              }}
            >
              <span className="badge-number">5+</span>
              <span className="badge-text">
                Years of Cinematic Excellence
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          className="about-content-side"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.span
            variants={itemVariants}
            className="section-subtitle"
          >
            WHO WE ARE
          </motion.span>

          <motion.div
            className="accent-line"
            initial={{ width: 0 }}
            whileInView={{ width: 90 }}
            transition={{ duration: 1 }}
          />

          <motion.h2
            variants={itemVariants}
            className="section-title"
          >
            We Engineer
            <span className="text-highlight">
              {' '}Cinematic Experiences
            </span>
            {' '}That Command Attention.
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="about-description"
          >
            We craft visual systems engineered to dominate attention.
            From cinematic brand films to high-converting commercial
            campaigns, every frame is designed with intention,
            emotion, and precision.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="about-description"
          >
            Our studio merges storytelling with elite production
            design — creating immersive visuals that feel timeless,
            modern, and unforgettable for brands ready to stand above
            the noise.
          </motion.p>

          {/* STATS */}
          <motion.div
            variants={itemVariants}
            className="about-stats-grid"
          >
            {[
              {
                id: 1,
                num: '50+',
                label: 'Commercial Projects',
              },
              {
                id: 2,
                num: '12M+',
                label: 'Digital Views',
              },
              {
                id: 3,
                num: '100%',
                label: 'Visual Precision',
              },
            ].map((stat) => (
              <motion.div
                key={stat.id}
                className="stat-card"
                whileHover={{
                  y: -10,
                }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="stat-number">{stat.num}</h3>
                <p className="stat-label">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;