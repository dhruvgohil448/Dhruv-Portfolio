import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import "../CSS/Gallery.css";

const MEETUP_PHOTOS = [
  { src: "/gallery/meetups/swift-bharat-1.jpg", highlight: true },
  { src: "/gallery/meetups/swift-bharat-2.jpg", highlight: true },
  { src: "/gallery/meetups/swift-bharat-3.jpg" },
  { src: "/gallery/meetups/swift-bharat-4.jpg" },
  { src: "/gallery/meetups/swift-bharat-5.jpg" },
  { src: "/gallery/meetups/swift-bharat-6.jpg" },
  { src: "/gallery/meetups/swift-bharat-7.jpg" },
  { src: "/gallery/meetups/swift-bharat-8.jpg" },
  { src: "/gallery/meetups/swift-bharat-9.jpg" },
  { src: "/gallery/meetups/swift-mumbai-summer-1.jpg" },
  { src: "/gallery/meetups/dhruv-meetup-1.jpg" },
  { src: "/gallery/meetups/build-beyond-screens-1.jpg" },
  { src: "/gallery/meetups/swift-mumbai-womenintech-1.jpg" },
  { src: "/gallery/meetups/swift-mumbai-womenintech-2.jpg" },
  { src: "/gallery/meetups/swift-mumbai-womenintech-3.jpg" },
  { src: "/gallery/meetups/swift-mumbai-1.jpg" },
];

// ✨ Animation Variants
const pageVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// ✨ Tab Switching Animations
const tabContentVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  exit: { opacity: 0, y: -30, scale: 0.98, transition: { duration: 0.4 } },
};

export default function Gallery() {
  const [zoom, setZoom] = useState(null);

  const closeZoom = () => setZoom(null);

  return (
    <motion.section
      className="gallery-container"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      {/* 🌟 Title */}
      <motion.h2 className="gallery-title" variants={childVariants}>
        Meetups
      </motion.h2>

      {/* 🖼️ Flat Photo Grid */}
      <motion.div
        className="photo-feed"
        variants={tabContentVariants}
        initial="hidden"
        animate="visible"
      >
        {MEETUP_PHOTOS.map((photo, i) => (
          <motion.div
            key={i}
            className={`photo-tile ${photo.highlight ? "highlighted" : ""}`}
            variants={childVariants}
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 250 }}
            onClick={() => setZoom(photo.src)}
          >
            <img
              src={photo.src}
              alt={`meetup-${i}`}
              onError={(e) => {
                e.currentTarget.style.display = "none";
                e.currentTarget.parentElement.classList.add("missing");
              }}
            />
            {photo.highlight && i < 2 && <span className="featured-badge">⭐ Swift Bharat</span>}
          </motion.div>
        ))}
      </motion.div>

      {/* 🔍 Zoom Overlay */}
      <AnimatePresence>
        {zoom && (
          <motion.div
            className="zoom-overlay"
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(6px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.4 }}
          >
            <motion.img
              key={zoom}
              src={zoom}
              alt="zoom"
              className="zoom-img"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
            <button className="close-btn" onClick={closeZoom}>
              <X size={28} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
