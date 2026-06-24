import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./Skills.css";

const SIZE = 80;

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
  const ballsRef = useRef([]);
  const dragRef = useRef(null);
  const rafRef = useRef(null);
  const lastFrameRef = useRef(performance.now());

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const rect = stage.getBoundingClientRect();
    const W = rect.width;
    const H = rect.height;
    const circles = Array.from(stage.querySelectorAll(".skill-circle"));

    const placed = [];
    const isOverlapping = (x, y, size) =>
      placed.some((p) => {
        const dx = p.x - x;
        const dy = p.y - y;
        return Math.sqrt(dx * dx + dy * dy) < p.size / 2 + size / 2 + 10;
      });

    circles.forEach((circle, i) => {
      let x, y, tries = 0;
      do {
        x = Math.random() * (W - SIZE - 20) + 10;
        y = Math.random() * (H - SIZE - 20) + 10;
        tries++;
      } while (isOverlapping(x, y, SIZE) && tries < 200);
      placed.push({ x, y, size: SIZE });

      const speed = 0.6;
      const angle = Math.random() * Math.PI * 2;
      ballsRef.current[i] = {
        el: circle,
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
      };

      circle.style.left = `${x}px`;
      circle.style.top = `${y}px`;
    });

    const onMove = (e) => {
      const drag = dragRef.current;
      if (!drag) return;
      const stageRect = stage.getBoundingClientRect();
      const cx = e.clientX - stageRect.left;
      const cy = e.clientY - stageRect.top;
      const ball = ballsRef.current[drag.index];
      ball.x = Math.max(0, Math.min(W - SIZE, cx - SIZE / 2));
      ball.y = Math.max(0, Math.min(H - SIZE, cy - SIZE / 2));
      const now = performance.now();
      const dt = Math.max(1, now - drag.lastT);
      drag.vx = ((cx - drag.lastX) / dt) * 16;
      drag.vy = ((cy - drag.lastY) / dt) * 16;
      drag.lastX = cx;
      drag.lastY = cy;
      drag.lastT = now;
    };

    const onUp = () => {
      const drag = dragRef.current;
      if (!drag) return;
      const ball = ballsRef.current[drag.index];
      ball.vx = Math.max(-22, Math.min(22, drag.vx || 0));
      ball.vy = Math.max(-22, Math.min(22, drag.vy || 0));
      dragRef.current = null;
      stage.style.cursor = "default";
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);

    const step = (now) => {
      const dt = Math.min(32, now - lastFrameRef.current) / 16.67;
      lastFrameRef.current = now;
      const drag = dragRef.current;
      const balls = ballsRef.current;

      for (let i = 0; i < balls.length; i++) {
        const b = balls[i];
        if (drag && drag.index === i) continue;
        b.x += b.vx * dt;
        b.y += b.vy * dt;
        if (b.x <= 0) { b.x = 0; b.vx = Math.abs(b.vx) * 0.85; }
        if (b.x + SIZE >= W) { b.x = W - SIZE; b.vx = -Math.abs(b.vx) * 0.85; }
        if (b.y <= 0) { b.y = 0; b.vy = Math.abs(b.vy) * 0.85; }
        if (b.y + SIZE >= H) { b.y = H - SIZE; b.vy = -Math.abs(b.vy) * 0.85; }
        b.vx *= 0.995;
        b.vy *= 0.995;
        if (Math.abs(b.vx) < 0.02) b.vx = 0;
        if (Math.abs(b.vy) < 0.02) b.vy = 0;
      }

      for (let i = 0; i < balls.length; i++) {
        for (let j = i + 1; j < balls.length; j++) {
          const a = balls[i], c = balls[j];
          const dx = c.x - a.x, dy = c.y - a.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const minDist = SIZE;
          if (dist > 0 && dist < minDist) {
            const overlap = (minDist - dist) / 2;
            const nx = dx / dist, ny = dy / dist;
            a.x -= nx * overlap; a.y -= ny * overlap;
            c.x += nx * overlap; c.y += ny * overlap;
            const rvx = c.vx - a.vx, rvy = c.vy - a.vy;
            const sep = rvx * nx + rvy * ny;
            if (sep < 0) {
              const imp = sep * 0.9;
              a.vx += imp * nx; a.vy += imp * ny;
              c.vx -= imp * nx; c.vy -= imp * ny;
            }
          }
        }
      }

      for (let i = 0; i < balls.length; i++) {
        balls[i].el.style.left = `${balls[i].x}px`;
        balls[i].el.style.top = `${balls[i].y}px`;
      }

      rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
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
                scale: 1.18,
                boxShadow: "0 0 25px 6px rgba(0,255,255,0.5)",
                background: "rgba(0,255,255,0.12)",
              }}
              onMouseDown={(e) => {
                e.preventDefault();
                const stageRect = stageRef.current.getBoundingClientRect();
                const cx = e.clientX - stageRect.left;
                const cy = e.clientY - stageRect.top;
                dragRef.current = { index: i, lastX: cx, lastY: cy, lastT: performance.now(), vx: 0, vy: 0 };
                const ball = ballsRef.current[i];
                ball.x = cx - SIZE / 2;
                ball.y = cy - SIZE / 2;
                ball.vx = 0;
                ball.vy = 0;
                stageRef.current.style.cursor = "grabbing";
              }}
              style={{
                width: `${SIZE}px`,
                height: `${SIZE}px`,
                borderRadius: "50%",
                position: "absolute",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                background: "rgba(0,255,255,0.06)",
                border: "1px solid rgba(0,255,255,0.25)",
                backdropFilter: "blur(8px)",
                cursor: "grab",
                transition: "box-shadow 0.4s ease, background 0.4s ease",
                userSelect: "none",
                touchAction: "none",
              }}
            >
              {isUrl ? (
                <motion.img
                  src={s.logo}
                  alt={s.name}
                  draggable={false}
                  style={{
                    width: "28px",
                    height: "28px",
                    objectFit: "contain",
                    filter: "drop-shadow(0 0 6px rgba(0,255,255,0.4)) brightness(1.2)",
                    marginBottom: "4px",
                    pointerEvents: "none",
                  }}
                />
              ) : (
                <span style={{ fontSize: "22px", marginBottom: "3px", pointerEvents: "none" }}>
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
                  pointerEvents: "none",
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
