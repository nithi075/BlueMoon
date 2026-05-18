import "./Packages.css";

import { motion } from "framer-motion";

const packagesData = [

  {
    title: "Starter Presence",

    subtitle:
      "SOCIAL-FIRST CONTENT SYSTEM",

    price: "₹39K",

    features: [
      "Creative Direction",
      "1 Cinematic Shoot Day",
      "4 Edited Reels",
      "Instagram Story Assets",
      "Premium Color Grading",
      "Social-Optimized Delivery"
    ]
  },

  {
    title: "Brand Accelerator",

    subtitle:
      "HIGH-GROWTH CONTENT PACKAGE",

    price: "₹79K",

    badge: "Most Popular",

    features: [
      "Multi-Camera Production",
      "8 Premium Reels",
      "Monthly Content Strategy",
      "Social Campaign Assets",
      "Luxury Cinematic Editing",
      "Trending Short Form Content",
      "Priority Delivery",
      "Brand Visual Direction"
    ]
  },

  {
    title: "Signature Identity",

    subtitle:
      "FULL CREATIVE BRAND EXPERIENCE",

    price: "₹129K",

    features: [
      "Full Brand Content System",
      "Luxury Production Workflow",
      "Drone & Cinematic Coverage",
      "Campaign-Level Creative Direction",
      "Premium Ad Creatives",
      "Story-Based Reels",
      "Social Media Visual Identity",
      "Monthly Content Planning",
      "Priority Creative Support"
    ]
  }

];

export default function Packages() {

  return (

    <section
      className="packages"
      id="packages"
    >

      {/* BG TEXT */}

      <div className="packages-bg-text">
        PACKAGES
      </div>

      {/* GLOW */}

      <motion.div

        className="packages-main-glow"

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

        className="packages-header"

        initial={{
          opacity: 0,
          y: 40
        }}

        whileInView={{
          opacity: 1,
          y: 0
        }}

        transition={{
          duration: 1
        }}

        viewport={{
          once: true
        }}

      >

        <p>
          CREATIVE PARTNERSHIPS
        </p>

        <h2>

          Designed For
          <span> Modern Brands</span>

        </h2>

        <span className="packages-subtext">

          Social-first content systems crafted
          for brands built to dominate attention.

        </span>

      </motion.div>

      {/* CARDS */}

      <div className="packages-container">

        {packagesData.map((item, index) => (

          <motion.div

            key={index}

            className={`package-card ${
              item.badge
                ? "featured"
                : ""
            }`}

            initial={{
              opacity: 0,
              y: 80
            }}

            whileInView={{
              opacity: 1,
              y: 0
            }}

            transition={{
              duration: 1,
              delay: index * 0.15
            }}

            viewport={{
              once: true
            }}

            whileHover={{
              y: -14,
              scale: 1.02
            }}

            whileTap={{
              scale: 0.985
            }}

          >

            {/* REFLECTION */}

            <div className="card-reflection"></div>

            {/* BADGE */}

            {item.badge && (

              <div className="badge">

                {item.badge}

              </div>

            )}

            {/* TITLE */}

            <div className="package-top">

              <p className="package-mini-title">

                {item.subtitle}

              </p>

              <h3>{item.title}</h3>

            </div>

            {/* PRICE */}

            <div className="price-box">

              <h1>{item.price}</h1>

              <span className="event-text">

                /project

              </span>

            </div>

            {/* FEATURES */}

            <div className="features">

              {item.features.map(
                (feature, i) => (

                  <motion.div

                    key={i}

                    className="feature-item"

                    whileHover={{
                      x: 4
                    }}

                  >

                    <span className="feature-dot">
                      ✦
                    </span>

                    <p>{feature}</p>

                  </motion.div>

                )
              )}

            </div>

            {/* BUTTON */}

            <button className="package-btn">

              Start a Project ↗

            </button>

          </motion.div>

        ))}

      </div>

    </section>

  );
}