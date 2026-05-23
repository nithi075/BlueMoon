import React, {
  useState,
  useRef,
  useEffect,
} from "react";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import "./Portfolio.css";

/* VIDEOS */

import video1 from "../../assets/video1.mp4";
import video2 from "../../assets/video2.mp4";
import video3 from "../../assets/video3.mp4";
import video4 from "../../assets/video4.mp4";
import video5 from "../../assets/video5.mp4";

const Portfolio = () => {

  const [activeCategory, setActiveCategory] =
    useState("all");

  const scrollRef = useRef(null);

  /* =========================
     PORTFOLIO DATA
  ========================= */

  const portfolioItems = [

    {
      id: 1,
      title: "Luxury Saree Campaign",
      subtitle: "Editorial Fashion Shoot",
      description:
        "Premium cinematic saree visuals crafted with luxury styling and modern storytelling.",
      category: "fashion-shoots",
      tag: "FASHION",
      year: "2026",
      video: video1,
      link: "/gallery",
    },

    {
      id: 2,
      title: "Model Portfolio Visuals",
      subtitle: "High Fashion Production",
      description:
        "Luxury model shoot designed with elegant lighting and cinematic compositions.",
      category: "fashion-shoots",
      tag: "MODEL SHOOT",
      year: "2026",
      video: video2,
      link: "/gallery",
    },

    {
      id: 3,
      title: "Jewelry Brand Film",
      subtitle: "Luxury Product Campaign",
      description:
        "Premium jewelry visuals crafted with refined luxury aesthetics.",
      category: "jewelry-shoots",
      tag: "JEWELRY",
      year: "2026",
      video: video3,
      link: "/gallery",
    },

    {
      id: 4,
      title: "Product Commercial Reel",
      subtitle: "Commercial Ad Production",
      description:
        "Modern product commercial focused on premium lighting and storytelling.",
      category: "product-shoots",
      tag: "PRODUCT",
      year: "2025",
      video: video4,
      link: "/gallery",
    },

    {
      id: 5,
      title: "Brand Commercial Film",
      subtitle: "Luxury Reel Commercial",
      description:
        "High-end commercial crafted to elevate modern brands.",
      category: "commercials",
      tag: "COMMERCIAL",
      year: "2026",
      video: video5,
      link: "/gallery",
    },

  ];

  /* =========================
     FILTERS
  ========================= */

  const categories = [

    {
      id: "all",
      label: "ALL WORK",
    },

    {
      id: "fashion-shoots",
      label: "FASHION",
    },

    {
      id: "commercials",
      label: "COMMERCIALS",
    },

    {
      id: "jewelry-shoots",
      label: "JEWELRY",
    },

    {
      id: "product-shoots",
      label: "PRODUCTS",
    },

  ];

  const filteredItems =
    activeCategory === "all"
      ? portfolioItems
      : portfolioItems.filter(
          (item) =>
            item.category === activeCategory
        );

  /* =========================
     AUTO CENTER SCROLL
  ========================= */

  useEffect(() => {

    const container =
      scrollRef.current;

    if (!container) return;

    let currentIndex = 0;

    const cards =
      container.querySelectorAll(
        ".portfolio-card"
      );

    const scrollToCard = () => {

      if (!cards.length) return;

      const card =
        cards[currentIndex];

      const containerWidth =
        container.offsetWidth;

      const cardWidth =
        card.offsetWidth;

      const cardLeft =
        card.offsetLeft;

      const scrollPosition =
        cardLeft -
        containerWidth / 2 +
        cardWidth / 2;

      container.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });

      currentIndex++;

      if (
        currentIndex >= cards.length
      ) {
        currentIndex = 0;
      }

    };

    scrollToCard();

    const interval =
      setInterval(() => {

        scrollToCard();

      }, 3000);

    return () =>
      clearInterval(interval);

  }, [activeCategory]);

  return (

    <section
      className="portfolio-section"
      id="portfolio"
    >

      <div className="portfolio-container">

        {/* HEADER */}

        <motion.div
          className="portfolio-top"
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{
            once: true,
          }}
        >

          <div className="portfolio-heading">

            <div className="portfolio-mini-label">

              <span className="portfolio-dot"></span>

              <p>
                FEATURED & RECOGNIZED
              </p>

            </div>

            <h2 className="portfolio-title">

              Cinematic
              <span>Brand Stories.</span>

            </h2>

          </div>

          {/* RIGHT */}

          <div className="portfolio-right-content">

            <p>
              Premium videography and luxury
              visuals crafted with cinematic
              storytelling and emotional
              brand experiences.
            </p>

            {/* FILTERS */}

            <div className="portfolio-filter-wrapper">

              {categories.map((cat) => (

                <button
                  key={cat.id}
                  className={`portfolio-filter-btn ${
                    activeCategory === cat.id
                      ? "active-filter"
                      : ""
                  }`}
                  onClick={() =>
                    setActiveCategory(cat.id)
                  }
                >
                  {cat.label}
                </button>

              ))}

            </div>

          </div>

        </motion.div>

        {/* CARDS */}

        <div
          ref={scrollRef}
          className="portfolio-scroll-grid"
        >

          {filteredItems.map(
            (item, index) => (

              <motion.div
                key={item.id}
                className={`portfolio-card ${
                  index === 1
                    ? "featured-card"
                    : ""
                }`}
              >

                <Link
                  to={item.link}
                  className="portfolio-card-link"
                >

                  <div className="portfolio-video-wrapper">

                    <video
                      src={item.video}
                      muted
                      autoPlay
                      loop
                      playsInline
                    />

                    <div className="video-overlay"></div>

                    {/* TOP */}

                    <div className="portfolio-card-top">

                      <span className="portfolio-card-tag">
                        {item.tag}
                      </span>

                      <span className="portfolio-card-year">
                        {item.year}
                      </span>

                    </div>

                    {/* CONTENT */}

                    <div className="portfolio-card-content">

                      <div>

                        <p className="portfolio-card-subtitle">
                          {item.subtitle}
                        </p>

                        <h3 className="portfolio-card-title-card">
                          {item.title}
                        </h3>

                      </div>

                      <div>

                        <p className="portfolio-card-text">
                          {item.description}
                        </p>

                        <div className="portfolio-view-btn">

                          View Project

                          <ArrowUpRight
                            size={18}
                          />

                        </div>

                      </div>

                    </div>

                  </div>

                </Link>

              </motion.div>

            )
          )}

        </div>

      </div>

    </section>

  );
};

export default Portfolio;