import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./Services.css";

const Services = () => {

  const sliderRef = useRef(null);

  /* =========================
      AUTO SLIDE
  ========================= */

  useEffect(() => {

    const slider = sliderRef.current;

    if (!slider) return;

    let scrollAmount = 0;

    const autoSlide = setInterval(() => {

      const card =
        slider.querySelector(".services-card");

      if (!card) return;

      const cardWidth =
        card.offsetWidth + 32;

      scrollAmount += cardWidth;

      if (
        scrollAmount >=
        slider.scrollWidth - slider.clientWidth
      ) {
        scrollAmount = 0;
      }

      slider.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });

    }, 3000);

    return () => clearInterval(autoSlide);

  }, []);

  /* =========================
      DATA
  ========================= */

  const servicesData = [
    {
      id: "01",
      title: "Pre-Production & Scripting",
      tag: "THE BLUEPRINT",
      desc: "Concept development, treatment writing, precise storyboarding, and location scouting to lock the creative vision before rolling cameras.",
      gears: ["Moodboards", "Scriptwriting", "Shotlists"],
    },

    {
      id: "02",
      title: "Cinematic Production",
      tag: "THE CAPTURE",
      desc: "High-end on-set execution using RED/ARRI cinema rigs, advanced lighting setups, multi-cam configurations, and 4K aerial drone photography.",
      gears: ["Cinema Rigs", "4K Drone", "Pro Lighting"],
    },

    {
      id: "03",
      title: "Post-Production Excellence",
      tag: "THE CRAFT",
      desc: "Precision video editing, narrative pacing, custom sound design, atmospheric audio mixing, and high-end visual effects assembly.",
      gears: ["Premiere Pro", "DaVinci Resolve", "VFX"],
    },

    {
      id: "04",
      title: "Premium Color Grading",
      tag: "THE CHROMATIC",
      desc: "Bespoke color science and look development (LUTs styling) to give your brand films and commercials a distinct Hollywood-level cinematic depth.",
      gears: ["HDR Grading", "Color Science", "LUTs Design"],
    },
  ];

  /* =========================
      PREMIUM ANIMATIONS
  ========================= */

  const containerVariants = {
    hidden: {},

    visible: {
      transition: {
        staggerChildren: 0.16,
        delayChildren: 0.15,
      },
    },
  };

  const cardVariants = {

    hidden: {
      opacity: 0,
      y: 120,
      scale: 0.82,
      rotateX: 18,
      filter: "blur(20px)",
    },

    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      filter: "blur(0px)",

      transition: {
        duration: 1.1,

        ease: [0.16, 1, 0.3, 1],

        opacity: {
          duration: 0.7,
        },

        filter: {
          duration: 1,
        },
      },
    },
  };

  const textVariants = {

    hidden: {
      opacity: 0,
      y: 35,
      filter: "blur(8px)",
    },

    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",

      transition: {
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      className="services-section"
      id="services"
    >

      {/* AMBIENT GLOW */}
      <motion.div
        className="services-main-glow"

        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.3, 0.7, 0.3],
        }}

        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="services-container">

        {/* HEADER */}
        <motion.div
          className="services-header"

          initial={{
            opacity: 0,
            y: 50,
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
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          <span className="section-subtitle">
            EXPERT COUNSEL
          </span>

          <h2 className="section-title">
            Our Capabilities &
            <span className="text-highlight">
              {" "}Services
            </span>
          </h2>

          <p className="services-desc">
            Bespoke production packages engineered to elevate
            modern brands through premium, high-impact visual
            storytelling.
          </p>

        </motion.div>

        {/* SERVICES SLIDER */}
        <motion.div
          ref={sliderRef}

          className="services-grid"

          variants={containerVariants}

          initial="hidden"
          whileInView="visible"

          viewport={{
            once: true,
            amount: 0.2,
          }}
        >

          {servicesData.map((service, index) => (

            <motion.div
              key={service.id}

              className="services-card"

              variants={cardVariants}

              whileHover={{
                y: -14,
                scale: 1.035,
                rotateX: -2,
                rotateY: 2,
              }}

              transition={{
                type: "spring",
                stiffness: 120,
                damping: 18,
                mass: 0.8,
              }}
            >

              {/* GLOW */}
              <div className="services-card-glow-baker"></div>

              {/* TOP */}
              <motion.div
                className="services-card-top"
                variants={textVariants}
              >

                <span className="services-number">
                  {service.id}
                </span>

                <span className="services-step-tag">
                  {service.tag}
                </span>

              </motion.div>

              {/* CONTENT */}
              <motion.div
                className="services-card-content"
                variants={textVariants}
              >

                <h3 className="services-card-title">
                  {service.title}
                </h3>

                <p className="services-card-desc">
                  {service.desc}
                </p>

              </motion.div>

              {/* PILLS */}
              <motion.div
                className="services-gear-wrap"
                variants={textVariants}
              >

                {service.gears.map((gear, i) => (

                  <motion.span
                    key={i}

                    className="gear-pill"

                    whileHover={{
                      scale: 1.08,
                      y: -2,
                    }}

                    transition={{
                      duration: 0.25,
                    }}
                  >
                    {gear}
                  </motion.span>

                ))}

              </motion.div>

            </motion.div>

          ))}

        </motion.div>

      </div>
    </section>
  );
};

export default Services;