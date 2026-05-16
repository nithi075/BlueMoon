// ContactSection.jsx

import { motion } from "framer-motion";
import "./Contact.css";

/* =========================
   MAIN CONTAINER
========================= */

const containerVariants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};

/* =========================
   PANELS
========================= */

const panelVariants = {
  hidden: {
    opacity: 0,
    y: 80,
    scale: 0.96,
    filter: "blur(10px)",
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",

    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =========================
   TEXT
========================= */

const textVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =========================
   FORM STAGGER
========================= */

const formVariants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const inputVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function ContactSection() {
  return (
    <section className="contact-section">

      {/* BACKGROUND GLOW */}
      <motion.div
        className="contact-bg-glow"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.35, 0.6, 0.35],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* MAIN CONTAINER */}
      <motion.div
        className="contact-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.2,
        }}
      >

        {/* =========================
            LEFT PANEL
        ========================= */}

        <motion.div
          className="contact-left"
          variants={panelVariants}
        >

          <motion.p
            className="section-tag"
            variants={textVariants}
          >
            CONTACT
          </motion.p>

          <motion.h2
            className="panel-title"
            variants={textVariants}
          >
            Turning Bold Ideas
            <br />
            Into Cinematic Reality.
          </motion.h2>

          <motion.p
            className="panel-description"
            variants={textVariants}
          >
            Whether it’s a brand film, commercial,
            or cinematic storytelling — let’s create
            something unforgettable together.
          </motion.p>

          {/* CONTACT INFO */}
          <motion.div
            className="contact-info"
            variants={formVariants}
          >

            {[
              {
                title: "Email",
                value: "hello@yourstudio.com",
              },

              {
                title: "Phone",
                value: "+91 98765 43210",
              },

              {
                title: "Location",
                value: "Chennai, India",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="info-item"
                variants={inputVariants}

                whileHover={{
                  x: 8,
                }}

                transition={{
                  type: "spring",
                  stiffness: 200,
                }}
              >
                <span>{item.title}</span>
                <p>{item.value}</p>
              </motion.div>
            ))}

          </motion.div>
        </motion.div>

        {/* =========================
            RIGHT PANEL
        ========================= */}

        <motion.div
          className="contact-form-wrapper"
          variants={panelVariants}

          whileHover={{
            y: -4,
          }}

          transition={{
            duration: 0.4,
          }}
        >

          <motion.form
            className="contact-form"
            variants={formVariants}
          >

            {/* ROW */}
            <div className="form-input-row">

              <motion.div
                className="input-group"
                variants={inputVariants}
              >
                <label>Name</label>

                <motion.input
                  type="text"
                  placeholder="Your Name"

                  whileFocus={{
                    scale: 1.02,
                  }}

                  transition={{
                    duration: 0.2,
                  }}
                />
              </motion.div>

              <motion.div
                className="input-group"
                variants={inputVariants}
              >
                <label>Email</label>

                <motion.input
                  type="email"
                  placeholder="Your Email"

                  whileFocus={{
                    scale: 1.02,
                  }}

                  transition={{
                    duration: 0.2,
                  }}
                />
              </motion.div>

            </div>

            {/* SELECT */}

            <motion.div
              className="input-group"
              variants={inputVariants}
            >
              <label>Project Type</label>

              <motion.select
                whileFocus={{
                  scale: 1.02,
                }}
              >
                <option>Select Project</option>
                <option>Brand Film</option>
                <option>Commercial</option>
                <option>Music Video</option>
                <option>Photography</option>
              </motion.select>
            </motion.div>

            {/* TEXTAREA */}

            <motion.div
              className="input-group"
              variants={inputVariants}
            >
              <label>Message</label>

              <motion.textarea
                rows={6}
                placeholder="Tell us about your vision..."

                whileFocus={{
                  scale: 1.02,
                }}
              />
            </motion.div>

            {/* BUTTON */}

            <motion.button
              type="submit"
              className="submit-btn"

              variants={inputVariants}

              whileHover={{
                scale: 1.05,
                y: -4,
              }}

              whileTap={{
                scale: 0.96,
              }}

              transition={{
                type: "spring",
                stiffness: 250,
                damping: 15,
              }}
            >
              LET’S CREATE MAGIC
            </motion.button>

          </motion.form>

        </motion.div>

      </motion.div>
    </section>
  );
}