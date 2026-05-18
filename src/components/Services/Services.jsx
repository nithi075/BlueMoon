import React, {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import "./Services.css";

import vid1 from "../../assets/video1.mp4";
import vid2 from "../../assets/video2.mp4";
import vid3 from "../../assets/video3.mp4";

const Services = () => {

  const sliderRef = useRef(null);

  /* =========================================================
     VIDEO OVERLAY
  ========================================================= */

  const [selectedVideo, setSelectedVideo] =
    useState(null);

  /* =========================================================
     AUTO SLIDE
  ========================================================= */

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
        slider.scrollWidth -
        slider.clientWidth
      ) {

        scrollAmount = 0;

      }

      slider.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });

    }, 3500);

    return () =>
      clearInterval(autoSlide);

  }, []);

  /* =========================================================
     DATA
  ========================================================= */

  const servicesData = [

    {
      id: "01",

      title: "Content Systems",

      tag: "ATTENTION ENGINEERING",

      desc:
        "Social-first visuals crafted to make brands impossible to ignore.",

      gears: [
        "Strategy",
        "Storytelling",
        "Creative Direction",
      ],

      video: vid1,
    },

    {
      id: "02",

      title: "Reels & Short Form",

      tag: "SCROLL STOPPING",

      desc:
        "High-retention content designed for modern attention spans.",

      gears: [
        "Instagram Reels",
        "TikTok",
        "Short Form",
      ],

      video: vid2,
    },

    {
      id: "03",

      title: "Cinematic Production",

      tag: "VISUAL STORYTELLING",

      desc:
        "Luxury visuals engineered to elevate perception and brand identity.",

      gears: [
        "4K Production",
        "Drone",
        "Commercial Shoots",
      ],

      video: vid3,
    },

    {
      id: "04",

      title: "Social Media Management",

      tag: "DIGITAL PRESENCE",

      desc:
        "Consistent content systems built to grow reach and audience loyalty.",

      gears: [
        "Growth",
        "Strategy",
        "Brand Presence",
      ],

      video: vid1,
    },

  ];

  /* =========================================================
     ANIMATION
  ========================================================= */

  const containerVariants = {

    hidden: {},

    visible: {

      transition: {

        staggerChildren: 0.18,

        delayChildren: 0.12,

      },

    },

  };

  const cardVariants = {

    hidden: {

      opacity: 0,
      y: 120,
      scale: 0.88,
      filter: "blur(18px)",

    },

    visible: {

      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",

      transition: {

        duration: 1.1,

        ease: [0.16, 1, 0.3, 1],

      },

    },

  };

  const textVariants = {

    hidden: {

      opacity: 0,
      y: 30,
      filter: "blur(8px)",

    },

    visible: {

      opacity: 1,
      y: 0,
      filter: "blur(0px)",

      transition: {

        duration: 0.8,

        ease: [0.22, 1, 0.36, 1],

      },

    },

  };

  return (

    <section
      className="services-section"
      id="services"
    >

      {/* GLOW */}

      <motion.div

        className="services-main-glow"

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

      <div className="services-container">

        {/* =====================================================
            HEADER
        ===================================================== */}

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

            SOCIAL-FIRST STORYTELLING

          </span>

          <h2 className="section-title">

            Crafted For

            <span className="text-highlight">

              {" "}Modern Brands

            </span>

          </h2>

          <p className="services-desc">

            Cinematic content systems engineered
            to elevate perception across modern
            social platforms.

          </p>

        </motion.div>

        {/* =====================================================
            SLIDER
        ===================================================== */}

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

          {servicesData.map((service) => (

            <motion.div

              key={service.id}

              className="services-card"

              variants={cardVariants}

              onClick={() =>
                setSelectedVideo(service)
              }

              whileHover={{
                y: -12,
                scale: 1.02,
              }}

              transition={{
                type: "spring",
                stiffness: 120,
                damping: 20,
              }}
            >

              {/* SWEEP */}

              <div className="services-card-sweep"></div>

              {/* =================================================
                  VIDEO
              ================================================= */}

              <div className="services-media">

                <video

                  src={service.video}

                  muted
                  playsInline
                />

                <div className="services-media-overlay"></div>

              </div>

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
                      scale: 1.05,
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

      {/* =====================================================
          VIDEO OVERLAY
      ===================================================== */}

      <AnimatePresence>

        {selectedVideo && (

          <motion.div

            className="video-overlay"

            initial={{
              opacity: 0,
            }}

            animate={{
              opacity: 1,
            }}

            exit={{
              opacity: 0,
            }}
          >

            {/* BACKDROP */}

            <div

              className="video-overlay-backdrop"

              onClick={() =>
                setSelectedVideo(null)
              }
            />

            {/* CONTENT */}

            <motion.div

              className="video-overlay-content"

              initial={{
                scale: 0.9,
                opacity: 0,
                y: 40,
              }}

              animate={{
                scale: 1,
                opacity: 1,
                y: 0,
              }}

              exit={{
                scale: 0.9,
                opacity: 0,
                y: 40,
              }}

              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
            >

              {/* CLOSE */}

              <button

                className="video-close-btn"

                onClick={() =>
                  setSelectedVideo(null)
                }
              >

                ✕

              </button>

              {/* VIDEO */}

              <video

                src={selectedVideo.video}

                controls
                autoPlay

                className="fullscreen-video"
              />

              {/* INFO */}

              <div className="overlay-video-info">

                <span>
                  {selectedVideo.tag}
                </span>

                <h2>
                  {selectedVideo.title}
                </h2>

                <p>
                  {selectedVideo.desc}
                </p>

              </div>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  );
};

export default Services;