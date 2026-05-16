import React from 'react';
import { motion } from 'framer-motion';
import './Location.css';

export default function Location() {
  return (
    <section className="location-section" id="location">
      <div className="location-master-container">
        
        {/* =====================================
            HEADER TAG
        ===================================== */}
        <motion.span
          className="location-tag"
          initial={{ opacity: 0, y: 20, letterSpacing: "14px" }}
          whileInView={{ opacity: 1, y: 0, letterSpacing: "4px" }}
          transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
          viewport={{ once: true }}
        >
          VISUAL HQ
        </motion.span>

        {/* =====================================
            MAIN TITLE
        ===================================== */}
        <motion.h2
          className="location-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          Visit Our <span className="text-highlight">Studio</span>
        </motion.h2>

        {/* =====================================
            STUDIO ADDRESS TEXT
        ===================================== */}
        <motion.p
          className="location-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <strong>BLUE MOON PRODUCTION STUDIO</strong>
          <br />
          Elite Creative Grid, Film Nagar
          <br />
          Tamil Nadu, India
        </motion.p>

        {/* =====================================
            PREMIUM MAP FRAME LAYER
        ===================================== */}
        <motion.div
          className="map-container-frame"
          initial={{ opacity: 0, scale: 0.95, y: 60 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          whileHover={{ y: -8 }}
        >
          <motion.iframe
            /* Unoda correct real Google Map embed iframe source-ah inga paste பண்ணிக்கோ மச்சா */
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15665.474665406716!2d78.685384!3d10.830512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf50ffbdf9f7d%3A0xb696bc6fa9bc7d!2sTiruchirappalli%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1715832000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Midnight Studio Corporate Location Map"
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          />
          
          {/* Subtle Outer Neon Darkness Overlay Frame */}
          <div className="map-inner-shadow-mask"></div>
        </motion.div>

      </div>
    </section>
  );
}