import "./Packages.css";
import { motion } from "framer-motion";

const packagesData = [
  {
    title: "Starter Reel",
    subtitle: "SOLO VIDEOGRAPHER PACKAGE",
    price: "₹39,999",

    features: [
      "1 Professional Videographer",
      "4 Hours of Event Coverage",
      "Cinematic Highlight Reel",
      "Edited HD Video Delivery",
      "Social Media Short Clips",
      "Licensed Music Integration"
    ]
  },

  {
    title: "Cinema Plus",
    subtitle: "MULTI-CAMERA VIDEOGRAPHY",
    price: "₹79,999",

    badge: "Most Popular",

    features: [
      "2 Videographers",
      "Multi-Camera Coverage",
      "6 Hours of Cinematic Coverage",
      "4K Highlight Film",
      "Instagram Reels & Teasers",
      "Professional Audio Recording",
      "Color Grading & Cinematic Editing",
      "Full Event Film"
    ]
  },

  {
    title: "Signature Production",
    subtitle: "PREMIUM FILMMAKING EXPERIENCE",
    price: "₹1,29,999",

    features: [
      "3 Cinematographers",
      "Drone Coverage Included",
      "8+ Hours of Full Production",
      "4K Cinematic Film",
      "Luxury Teaser Trailer",
      "Story-Based Editing",
      "Professional Lighting Setup",
      "Full Event Documentary Film",
      "Priority Delivery"
    ]
  }
];

export default function Packages() {

  return (

    <section
      className="packages"
      id="packages"
    >

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

        <p>VIDEOGRAPHY PRICING</p>

        <h2>

          Cinematic <span>Packages</span>

        </h2>

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
              delay: index * 0.2
            }}

            viewport={{
              once: true
            }}

            whileHover={{
              y: -14,
              scale: 1.02
            }}

          >

            {/* BADGE */}

            {item.badge && (

              <div className="badge">

                {item.badge}

              </div>

            )}

            {/* TITLE */}

            <h3>{item.title}</h3>

            <p className="subtitle">

              {item.subtitle}

            </p>

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

                  <p key={i}>

                    ✦ {feature}

                  </p>

                )
              )}

            </div>

            {/* BUTTON */}

            <button className="package-btn">

              Book Your Shoot ↗

            </button>

          </motion.div>

        ))}

      </div>

    </section>

  );
}