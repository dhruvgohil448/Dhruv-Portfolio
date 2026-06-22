import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Award, BookOpen, Star, Cloud, ChevronLeft, ChevronRight, X } from "lucide-react";

// Credential details from Dhruv's resume
const CERTS = {
  awards: [
    {
      title: "Winner – Startup Battle (AI–IoT sector)",
      org: "Startup Battle Organizers",
      detail: "Selected as the Winner in the AI-IoT sector among 100+ participating teams.",
      date: "2024",
      gradient: "linear-gradient(135deg, #eab308, #ca8a04)",
      icon: "trophy",
      photos: [
        "/gallery/startup%20battle/startup_battle_1.png",
        "/gallery/startup%20battle/startup_battle_2.jpg",
        "/gallery/startup%20battle/startup_battle_3.jpg",
      ],
    },
    {
      title: "Winner – Hackathon Recursion 7.0",
      org: "Hackathon Recursion Committee",
      detail: "Achieved 1st place in Hackathon Recursion 7.0 competing against 1000+ teams.",
      date: "2024",
      gradient: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
      icon: "hackathon",
      photos: [
        "/gallery/Recursion/recursion_1.jpg",
        "/gallery/Recursion/recursion_2.jpg",
        "/gallery/Recursion/recursion_3.jpg",
        "/gallery/Recursion/recursion_4.png",
        "/gallery/Recursion/recursion_5.jpg",
      ],
    },
  ],
  credentials: [
    {
      title: "Blockchain for Enterprise (Basics)",
      org: "Enterprise Training",
      detail: "Foundational certification covering blockchain architectures, consensus mechanisms, and enterprise use-cases.",
      date: "2023",
      gradient: "linear-gradient(135deg, #10b981, #047857)",
      icon: "blockchain",
      photos: ["/gallery/certs/cert_1.png"],
    },
    {
      title: "IoT Edge Computing & Analytics",
      org: "Edge Analytics Course",
      detail: "Certification in managing edge computing architectures, data analytics pipelines, and sensor integrations.",
      date: "2023",
      gradient: "linear-gradient(135deg, #8b5cf6, #6d28d9)",
      icon: "edge",
      photos: ["/gallery/certs/cert_2.png"],
    },
    {
      title: "Google Cloud Launchpad",
      org: "Google Cloud Partner",
      detail: "Practical program covering Google Cloud Platform services, deployment, and cloud-native architecture concepts.",
      date: "2024",
      gradient: "linear-gradient(135deg, #f43f5e, #e11d48)",
      icon: "google",
      photos: ["/gallery/certs/cert_3.png"],
    },
  ],
};

export default function Certificates() {
  const [tab, setTab] = useState("awards");
  const [zoom, setZoom] = useState({ img: null, post: null, index: 0 });

  const openZoom = (post, index) =>
    setZoom({ img: post.photos[index], post, index });

  const closeZoom = () => setZoom({ img: null, post: null, index: 0 });

  const nextImage = () => {
    if (!zoom.post) return;
    const nextIndex = (zoom.index + 1) % zoom.post.photos.length;
    setZoom({ ...zoom, img: zoom.post.photos[nextIndex], index: nextIndex });
  };

  const prevImage = () => {
    if (!zoom.post) return;
    const prevIndex =
      (zoom.index - 1 + zoom.post.photos.length) % zoom.post.photos.length;
    setZoom({ ...zoom, img: zoom.post.photos[prevIndex], index: prevIndex });
  };

  const renderBadgeIcon = (iconName) => {
    switch (iconName) {
      case "trophy":
        return <Trophy size={48} style={{ color: "#fff" }} />;
      case "hackathon":
        return <Star size={48} style={{ color: "#fff" }} />;
      case "blockchain":
        return <BookOpen size={48} style={{ color: "#fff" }} />;
      case "edge":
        return <Award size={48} style={{ color: "#fff" }} />;
      case "google":
        return <Cloud size={48} style={{ color: "#fff" }} />;
      default:
        return <Award size={48} style={{ color: "#fff" }} />;
    }
  };

  return (
    <section className="container" style={{ padding: "40px 0" }}>
      <div className="card" style={{ background: "#0a0a0a", borderRadius: 16, padding: 30, boxShadow: "0 0 25px rgba(0, 180, 255, 0.05)" }}>
        <h2 style={{ fontSize: "2.2rem", color: "#00b4ff", marginBottom: 8, fontWeight: 600 }}>Certificates & Wins 🏅</h2>
        <p className="lead" style={{ color: "#aaa", marginBottom: 30 }}>
          Explore my academic achievements, hackathon wins, and technical certifications.
        </p>

        {/* Tab Switcher */}
        <div style={{ display: "flex", gap: 12, marginBottom: 30 }}>
          {["awards", "credentials"].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={tab === t ? "tab active" : "tab"}
              style={{
                padding: "10px 22px",
                borderRadius: 8,
                border: "none",
                cursor: "pointer",
                background: tab === t ? "#00b4ff" : "rgba(255, 255, 255, 0.05)",
                color: "#fff",
                fontWeight: 600,
                transition: "all 0.3s ease",
                boxShadow: tab === t ? "0 4px 15px rgba(0, 180, 255, 0.25)" : "none",
              }}
            >
              {t === "awards" ? "Hackathons & Awards" : "Certifications"}
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <div
          className="certs-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
            gap: 24,
          }}
        >
          <AnimatePresence mode="wait">
            {CERTS[tab].map((c, idx) => (
              <motion.div
                key={c.title}
                className="cert card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 20px rgba(0, 180, 255, 0.15)",
                  borderColor: "rgba(0, 180, 255, 0.4)"
                }}
                style={{
                  background: "#111",
                  borderRadius: 14,
                  padding: 20,
                  color: "#fff",
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: "340px"
                }}
              >
                <div>
                  {/* Photo Header */}
                  {c.photos && c.photos.length > 0 ? (
                    <div
                      style={{
                        display: "grid",
                        gap: 8,
                        borderRadius: 10,
                        overflow: "hidden",
                        marginBottom: 16,
                        height: 160,
                        gridTemplateColumns: c.photos.length > 1 ? "repeat(auto-fit, minmax(60px, 1fr))" : "1fr"
                      }}
                    >
                      {c.photos.slice(0, 3).map((src, i) => (
                        <motion.div
                          key={i}
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 250 }}
                          onClick={() => openZoom(c, i)}
                          style={{
                            cursor: "pointer",
                            overflow: "hidden",
                            height: "100%"
                          }}
                        >
                          <img
                            src={src}
                            alt={c.title}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover"
                            }}
                          />
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    /* Glowing SVG Badge Header */
                    <div
                      style={{
                        height: 120,
                        borderRadius: 10,
                        background: c.gradient,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginBottom: 16,
                        boxShadow: "inset 0 0 20px rgba(0,0,0,0.15)"
                      }}
                    >
                      {renderBadgeIcon(c.icon)}
                    </div>
                  )}
                  
                  <strong style={{ fontSize: 16, color: "#fff", display: "block", marginBottom: 6 }}>
                    {c.title}
                  </strong>
                  <p style={{ fontSize: 13, color: "#ccc", margin: "0 0 12px 0", lineHeight: 1.5 }}>
                    {c.detail}
                  </p>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 12, fontSize: 12.5, color: "#aaa" }}>
                  <span>{c.org}</span>
                  <span style={{ color: "#00b4ff", fontWeight: 600 }}>{c.date}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* 🔍 Zoom Overlay */}
      <AnimatePresence>
        {zoom.img && (
          <div
            onClick={closeZoom}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(10, 10, 10, 0.95)",
              backdropFilter: "blur(6px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 99999
            }}
          >
            <motion.img
              key={zoom.img}
              src={zoom.img}
              alt="zoom"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                maxWidth: "90%",
                maxHeight: "85vh",
                borderRadius: 12,
                boxShadow: "0 0 30px rgba(255, 255, 255, 0.1)",
                objectFit: "contain"
              }}
              onClick={(e) => e.stopPropagation()}
            />

            {zoom.post?.photos.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  style={{
                    position: "absolute",
                    left: "5%",
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "transparent",
                    border: "none",
                    color: "#fff",
                    cursor: "pointer",
                    opacity: 0.8
                  }}
                >
                  <ChevronLeft size={40} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  style={{
                    position: "absolute",
                    right: "5%",
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "transparent",
                    border: "none",
                    color: "#fff",
                    cursor: "pointer",
                    opacity: 0.8
                  }}
                >
                  <ChevronRight size={40} />
                </button>
              </>
            )}
            <button
              onClick={closeZoom}
              style={{
                position: "absolute",
                top: "5%",
                right: "5%",
                background: "transparent",
                border: "none",
                color: "#fff",
                cursor: "pointer",
                opacity: 0.8
              }}
            >
              <X size={36} />
            </button>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
