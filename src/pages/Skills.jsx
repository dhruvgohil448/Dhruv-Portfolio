import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./Skills.css";

const SKILLS = [
  { name: "Swift", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" },
  { name: "SwiftUI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" },
  { name: "UIKit", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xcode/xcode-original.svg" },
  { name: "Objective-C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/objectivec/objectivec-plain.svg" },
  { name: "React Native", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Kotlin", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
  { name: "Xcode", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xcode/xcode-original.svg" },
  { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "SQLite", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" },
  { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Android Studio", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Core Data", logo: "🗄️" },
  { name: "MapKit", logo: "🗺️" },
  { name: "Core Animation", logo: "🎬" },
  { name: "Auto Layout", logo: "📐" },
  { name: "MVVM", logo: "🏛️" },
  { name: "MVP", logo: "🏛️" },
  { name: "Clean Architecture", logo: "🏗️" },
  { name: "RESTful APIs", logo: "🌐" },
  { name: "Data Synchronization", logo: "🔄" },
  { name: "Mobile App Security", logo: "🛡️" },
  { name: "App Store Deployment", logo: "📦" },
  { name: "TestFlight", logo: "✈️" },
  { name: "Scalability", logo: "📈" },
  { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "CocoaPods", logo: "📦" },
  { name: "Swift Package Manager", logo: "📦" },
  { name: "Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" }
];

const ROWS = [
  [
    { title: "Programming Languages", items: ["Swift", "Objective-C (Basic)", "Kotlin", "React"] },
    { title: "iOS & Mobile Frameworks", items: ["SwiftUI", "UIKit", "Core Data", "MapKit", "Core Animation", "Auto Layout", "React Native"] },
  ],
  [
    { title: "Architectures & Concepts", items: ["MVVM", "MVP", "Clean Architecture", "RESTful APIs", "Data Synchronization", "Mobile App Security", "App Store Deployment", "TestFlight", "Scalability"] },
    { title: "Databases & Storage", items: ["SQLite", "Core Data", "MySQL", "PostgreSQL", "MongoDB"] },
  ],
  [
    { title: "Tools & Platforms", items: ["Xcode", "Git", "GitHub", "CocoaPods", "Swift Package Manager", "Firebase", "Linux", "Android Studio"] },
    { title: "Leadership & Community", items: ["Swift Mumbai Community", "CESS Technical Secretary", "E-CELL Corporate Relations", "Event Management"] },
  ]
];

export default function Skills() {
  const stageRef = useRef();

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const circles = Array.from(stage.querySelectorAll(".skill-circle"));
    const rect = stage.getBoundingClientRect();
    const placed = [];

    const isOverlapping = (x, y, size) =>
      placed.some((p) => {
        const dx = p.x - x;
        const dy = p.y - y;
        return Math.sqrt(dx * dx + dy * dy) < p.size / 2 + size / 2 + 10;
      });

    circles.forEach((circle) => {
      const size = circle.offsetWidth;
      let x, y, tries = 0;
      do {
        x = Math.random() * (rect.width - size - 20);
        y = Math.random() * (rect.height - size - 20);
        tries++;
      } while (isOverlapping(x, y, size) && tries < 200);

      placed.push({ x, y, size });
      circle.style.left = `${x}px`;
      circle.style.top = `${y}px`;

      const dx = (Math.random() - 0.5) * 80;
      const dy = (Math.random() - 0.5) * 80;
      circle.animate(
        [{ transform: "translate(0, 0)" }, { transform: `translate(${dx}px, ${dy}px)` }],
        {
          duration: 5000 + Math.random() * 2000,
          direction: "alternate",
          iterations: Infinity,
          easing: "ease-in-out",
        }
      );
    });
  }, []);

  return (
    <section className="skills-container" id="skills">
      {/* Header */}
      <motion.div
        className="skills-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-5xl text-cyan-400 font-semibold mb-3">My Skills</h2>
        <div className="w-28 h-[2px] bg-cyan-400 mx-auto mb-6"></div>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          ✨ Technical expertise blended with creativity — explore my core competencies below.
        </p>
      </motion.div>

      {/* Floating Orbs with page-load + hover highlight animation */}
      <motion.div
        className="skills-stage relative mx-auto mb-20"
        ref={stageRef}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{
          width: "100%",
          height: "480px",
          borderRadius: "25px",
          background: "radial-gradient(circle at 50% 50%, #0a0a0a, #101010)",
          overflow: "hidden",
          boxShadow: "inset 0 0 60px rgba(0,255,255,0.07)",
          position: "relative",
        }}
      >
        {SKILLS.map((s, i) => {
          const isUrl = s.logo && s.logo.startsWith("http");
          return (
            <motion.div
              key={s.name}
              className="skill-circle"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.04, duration: 0.6, ease: "easeOut" }}
              whileHover={{
                scale: 1.25,
                boxShadow: "0 0 25px 6px rgba(0,255,255,0.5)",
                background: "rgba(0,255,255,0.12)",
              }}
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                position: "absolute",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                background: "rgba(0,255,255,0.06)",
                border: "1px solid rgba(0,255,255,0.25)",
                backdropFilter: "blur(8px)",
                cursor: "pointer",
                transition: "box-shadow 0.4s ease, background 0.4s ease",
              }}
            >
              {isUrl ? (
                <motion.img
                  src={s.logo}
                  alt={s.name}
                  style={{
                    width: "28px",
                    height: "28px",
                    objectFit: "contain",
                    filter: "drop-shadow(0 0 6px rgba(0,255,255,0.4)) brightness(1.2)",
                    marginBottom: "4px",
                  }}
                  whileHover={{
                    filter: "drop-shadow(0 0 10px rgba(0,255,255,0.8)) brightness(1.5)",
                    rotate: [0, 6, -6, 0],
                    transition: { duration: 0.5 },
                  }}
                />
              ) : (
                <span style={{ fontSize: "22px", marginBottom: "3px" }}>
                  {s.logo}
                </span>
              )}
              <span
                style={{
                  color: "rgba(180,255,255,0.9)",
                  fontSize: "9px",
                  fontWeight: 500,
                  letterSpacing: "0.2px",
                  textAlign: "center",
                  padding: "0 4px",
                  lineHeight: 1.1,
                }}
              >
                {s.name}
              </span>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Skills Table (Text Section) */}
      <div className="skills-table">
        {ROWS.map((row, rowIndex) => (
          <div key={rowIndex} className="skills-row">
            {row.map((col, colIndex) => (
              <motion.div
                key={col.title}
                className="skill-box"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{
                  duration: 0.6,
                  delay: (rowIndex + colIndex) * 0.1,
                }}
              >
                <h3>{col.title}</h3>
                <ul>
                  {col.items.map((item, i) => (
                    <motion.li key={i} whileHover={{ x: 6, color: "#00ffc8" }}>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
