import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Code, Award, Info, Printer, Mail, Phone, Link, MapPin } from "lucide-react";

export default function Resume() {
  const handlePrint = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    try {
      window.focus();
      window.print();
    } catch (err) {
      console.error("Print failed:", err);
    }
  };

  return (
    <section className="container" style={{ padding: "40px 0" }}>
      {/* Dynamic Printing Styles */}
      <style>
        {`
          @media print {
            body {
              background: #fff !important;
              color: #000 !important;
              font-size: 11pt !important;
              font-family: 'Inter', sans-serif !important;
              line-height: 1.4 !important;
            }
            .app, .nav, footer, .footer, .no-print, button, .print-btn-container {
              display: none !important;
            }
            .resume-card-container {
              background: #fff !important;
              color: #000 !important;
              box-shadow: none !important;
              padding: 0 !important;
              margin: 0 !important;
              border: none !important;
              max-width: 100% !important;
              width: 100% !important;
            }
            .resume-section-title {
              color: #000 !important;
              border-bottom: 1.5px solid #000 !important;
            }
            .resume-accent-text {
              color: #000 !important;
            }
            .resume-item {
              page-break-inside: avoid;
            }
            .resume-grid {
              display: block !important;
            }
            .resume-meta-info {
              color: #555 !important;
            }
            a {
              color: #000 !important;
              text-decoration: none !important;
            }
          }
        `}
      </style>

      <motion.div
        className="resume-card-container"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          background: "#0b0b0b",
          borderRadius: 16,
          padding: "40px 30px",
          color: "#e5e5e5",
          boxShadow: "0 0 25px rgba(0, 180, 255, 0.1)",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {/* Top Control Bar */}
        <div className="print-btn-container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 30 }}>
          <div>
            <h2 style={{ fontSize: 28, color: "#00b4ff", margin: 0 }}>📄 Resume</h2>
            <p style={{ color: "#aaa", margin: "5px 0 0 0" }}>Interactive & print-ready layout</p>
          </div>
          <button
            type="button"
            onClick={handlePrint}
            onMouseDown={(e) => e.stopPropagation()}
            onTouchStart={(e) => e.stopPropagation()}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              background: "#00b4ff",
              color: "#fff",
              border: "none",
              padding: "12px 24px",
              borderRadius: 8,
              cursor: "pointer",
              fontWeight: 600,
              boxShadow: "0 4px 15px rgba(0, 180, 255, 0.3)",
              fontSize: 15,
              transition: "transform 0.15s ease, background 0.15s ease",
              zIndex: 10,
              position: "relative",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#0096d6";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#00b4ff";
              e.currentTarget.style.transform = "scale(1)";
            }}
            onMouseDownCapture={(e) => {
              e.currentTarget.style.transform = "scale(0.95)";
            }}
            onMouseUpCapture={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
            }}
          >
            <Printer size={18} /> Print / Save PDF
          </button>
        </div>

        {/* --- RESUME SHEET START --- */}
        <div className="resume-sheet" style={{ display: "flex", flexDirection: "column", gap: 30 }}>
          {/* Header */}
          <div style={{ borderBottom: "2px solid rgba(255,255,255,0.08)", paddingBottom: 20 }}>
            <h1 style={{ fontSize: 36, color: "#fff", margin: "0 0 8px 0", fontWeight: 800, letterSpacing: 0.5 }}>
              DHRUV GOHIL
            </h1>
            <h2 className="resume-accent-text" style={{ fontSize: 20, color: "#00b4ff", margin: "0 0 16px 0", fontWeight: 600, letterSpacing: 0.3 }}>
              iOS Developer
            </h2>

            {/* Contact Grid */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "15px 25px", fontSize: 14, color: "#aaa" }}>
              <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <Phone size={14} className="resume-accent-text" style={{ color: "#00b4ff" }} /> +91 8879727963
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <Mail size={14} className="resume-accent-text" style={{ color: "#00b4ff" }} /> 
                <a href="mailto:dhruvgohil448@gmail.com" style={{ color: "inherit", textDecoration: "none" }}>dhruvgohil448@gmail.com</a>
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <Link size={14} className="resume-accent-text" style={{ color: "#00b4ff" }} /> 
                <a href="https://www.linkedin.com/in/dhruv-gohil-732028257?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noreferrer" style={{ color: "inherit", textDecoration: "none" }}>linkedin.com/in/dhruv-gohil</a>
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <Link size={14} className="resume-accent-text" style={{ color: "#00b4ff" }} /> 
                <a href="http://github.com/dhruvgohil448" target="_blank" rel="noreferrer" style={{ color: "inherit", textDecoration: "none" }}>github.com/dhruvgohil448</a>
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <MapPin size={14} className="resume-accent-text" style={{ color: "#00b4ff" }} /> Mumbai, India
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h3 className="resume-section-title" style={{ fontSize: 18, color: "#00b4ff", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: 6, marginBottom: 12, display: "flex", alignItems: "center", gap: 8 }}>
              <Info size={18} /> Professional Summary
            </h3>
            <p style={{ fontSize: 14.5, color: "#ccc", lineHeight: 1.6, margin: 0 }}>
              iOS Developer with 2 years of experience and a proven track record of delivering 20+ real-world, industry-level applications. Deep expertise in Swift, UIKit, SwiftUI, Core Data, Auto Layout, Core Animation, and REST APIs, with a strong focus on scalable architecture, performance optimization, and clean code. Passionate about building polished, high-quality iOS experiences that delight users and drive business impact.
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="resume-section-title" style={{ fontSize: 18, color: "#00b4ff", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: 6, marginBottom: 12, display: "flex", alignItems: "center", gap: 8 }}>
              <Code size={18} /> Technical Skills
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 14 }}>
              <div>
                <strong style={{ color: "#fff" }}>Programming Languages:</strong> <span style={{ color: "#ccc" }}>Swift, Objective-C (Basic), Kotlin, React</span>
              </div>
              <div>
                <strong style={{ color: "#fff" }}>iOS & Mobile Frameworks:</strong> <span style={{ color: "#ccc" }}>SwiftUI, UIKit, Core Data, MapKit, Core Animation, Auto Layout, React Native</span>
              </div>
              <div>
                <strong style={{ color: "#fff" }}>Architectures & Concepts:</strong> <span style={{ color: "#ccc" }}>MVVM, MVP, Clean Architecture, RESTful APIs, Data Synchronization, Mobile App Security, App Store Deployment, TestFlight, Scalability</span>
              </div>
              <div>
                <strong style={{ color: "#fff" }}>Databases:</strong> <span style={{ color: "#ccc" }}>SQLite, Core Data, MySQL, PostgreSQL, MongoDB</span>
              </div>
              <div>
                <strong style={{ color: "#fff" }}>Tools & Platforms:</strong> <span style={{ color: "#ccc" }}>Xcode, Git, GitHub, CocoaPods, Swift Package Manager, Firebase, Linux, Android Studio</span>
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <h3 className="resume-section-title" style={{ fontSize: 18, color: "#00b4ff", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: 6, marginBottom: 16, display: "flex", alignItems: "center", gap: 8 }}>
              <Briefcase size={18} /> Professional Experience
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              
              {/* Weekend Tech */}
              <div className="resume-item">
                <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", marginBottom: 6 }}>
                  <div>
                    <strong style={{ fontSize: 16, color: "#fff" }}>Junior iOS Developer</strong>
                    <span style={{ color: "#aaa" }}> | Weekend Tech LLP</span>
                  </div>
                  <span className="resume-meta-info" style={{ color: "#00b4ff", fontSize: 14, fontWeight: 500 }}>August 2024 – Present</span>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 14, paddingLeft: 10, borderLeft: "2px solid rgba(0, 180, 255, 0.2)" }}>
                  
                  {/* Airline Crew App */}
                  <div>
                    <strong style={{ color: "#eee", fontSize: 14 }}>Airline Crew Management iOS Application (Confidential)</strong>
                    <ul style={{ margin: "4px 0 0 0", paddingLeft: 20, fontSize: 13.5, color: "#ccc", lineHeight: 1.6 }}>
                      <li>Launched enterprise-scale iOS app used by 10,000+ active crew members, improving scheduling efficiency by 35%.</li>
                      <li>Built custom UIKit components with Auto Layout, reducing UI rendering time by 20% across iPhone and iPad.</li>
                      <li>Integrated REST APIs for real-time schedule updates, improving crew response time by 15%.</li>
                      <li>Optimized Core Data for 50,000+ records, improving data load speed by 40%.</li>
                    </ul>
                  </div>

                  {/* Boru */}
                  <div>
                    <strong style={{ color: "#eee", fontSize: 14 }}>Boru – Subscription Commerce iOS App</strong>
                    <ul style={{ margin: "4px 0 0 0", paddingLeft: 20, fontSize: 13.5, color: "#ccc", lineHeight: 1.6 }}>
                      <li>Designed and developed the complete iOS application UI and core functionality for a live consumer app.</li>
                      <li>Built recurring orders, subscription pause/resume, billing history, and delivery management features.</li>
                      <li>Delivered a seamless user experience for daily essentials ordering from local vendors and deployed production-ready app to the App Store.</li>
                    </ul>
                  </div>

                  {/* Lyncup */}
                  <div>
                    <strong style={{ color: "#eee", fontSize: 14 }}>Lyncup – Meetup & Social Networking iOS Application (Australia)</strong>
                    <ul style={{ margin: "4px 0 0 0", paddingLeft: 20, fontSize: 13.5, color: "#ccc", lineHeight: 1.6 }}>
                      <li>Developed a scalable SwiftUI social networking app focused on meetup discovery and event participation.</li>
                      <li>Integrated backend REST APIs for authentication, profiles, feeds, and real-time meetup discovery.</li>
                      <li>Implemented secure onboarding and verification for international users and built state-driven navigation components.</li>
                    </ul>
                  </div>

                  {/* Flying Monk */}
                  <div>
                    <strong style={{ color: "#eee", fontSize: 14 }}>Flying-Monk | iOS (SwiftUI), Android (Kotlin)</strong>
                    <ul style={{ margin: "4px 0 0 0", paddingLeft: 20, fontSize: 13.5, color: "#ccc", lineHeight: 1.6 }}>
                      <li>Working on a rental wheelchair app for iOS and Android, managing development across both platforms.</li>
                      <li>Improving app design, UI/UX, and ensuring all core functionalities work smoothly and reliably.</li>
                      <li>Integrating REST APIs, server features, and payment gateway systems using Xcode and Android Studio.</li>
                    </ul>
                  </div>

                  {/* Freelance Gig */}
                  <div>
                    <strong style={{ color: "#eee", fontSize: 14 }}>iOS Developer (Freelance) — Fyre Gig</strong>
                    <ul style={{ margin: "4px 0 0 0", paddingLeft: 20, fontSize: 13.5, color: "#ccc", lineHeight: 1.6 }}>
                      <li>Owned and stabilized the iOS layer of production React Native applications, leading stabilization for a high-traffic fintech app.</li>
                      <li>Fixed crashes, resolved build issues, and cleared performance bottlenecks.</li>
                      <li>Integrated and optimized REST APIs for real-time transactional workflows, delivering App Store-ready releases.</li>
                    </ul>
                  </div>

                </div>
              </div>

            </div>
          </div>

          {/* Personal & Freelance Projects */}
          <div>
            <h3 className="resume-section-title" style={{ fontSize: 18, color: "#00b4ff", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: 6, marginBottom: 16, display: "flex", alignItems: "center", gap: 8 }}>
              <Code size={18} /> Personal & Freelance Projects
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, fontSize: 13.5 }}>
              
              <div className="resume-item">
                <strong style={{ color: "#fff" }}>CodeNest</strong> | <span style={{ color: "#aaa" }}>SwiftUI, UIKit, REST API</span>
                <p style={{ margin: "4px 0 0 0", color: "#ccc", lineHeight: 1.5 }}>
                  Built an iOS app to analyze Codeforces performance with 10,000+ records processed reliably. Added visual insights and improved navigation, boosting daily usage by 18%.
                </p>
              </div>

              <div className="resume-item">
                <strong style={{ color: "#fff" }}>krypticGrind</strong> | <span style={{ color: "#aaa" }}>SwiftUI, VisionKit, REST API</span>
                <p style={{ margin: "4px 0 0 0", color: "#ccc", lineHeight: 1.5 }}>
                  Developed a gamified competitive programming app with 500+ beta users. Implemented AI-based recommendations, improving solve speed by 15%.
                </p>
              </div>

              <div className="resume-item">
                <strong style={{ color: "#fff" }}>ReadBetter — Where Words Feel Friendly</strong> | <span style={{ color: "#aaa" }}>SwiftUI, VisionKit, Speech Recognition</span>
                <p style={{ margin: "4px 0 0 0", color: "#ccc", lineHeight: 1.5 }}>
                  Built a 100% offline dyslexia-friendly iOS app for the Swift Student Challenge. Added accessible reading modes and focus tools to improve readability and learning comfort.
                </p>
              </div>

              <div className="resume-item">
                <strong style={{ color: "#fff" }}>Stock Yaari – Stock F&O Signals</strong> | <span style={{ color: "#aaa" }}>React Native, REST API, Configs</span>
                <p style={{ margin: "4px 0 0 0", color: "#ccc", lineHeight: 1.5 }}>
                  Delivered a major freelance project by fixing complete iOS app configuration, signing, and release issues for production updates. Stabilized the update pipeline and ensured successful App Store deployment.
                </p>
              </div>

              <div className="resume-item">
                <strong style={{ color: "#fff" }}>ERP-based Student Management System</strong> | <span style={{ color: "#aaa" }}>Web App, HTML, CSS, JavaScript, MySQL</span>
                <p style={{ margin: "4px 0 0 0", color: "#ccc", lineHeight: 1.5 }}>
                  Developed a web-based ERP system managing student, faculty, and staff records including attendance, notices, and payments for 1,000+ users. Workload was reduced by 40% using automated workflows and queries were optimized to improve performance by 35%.
                </p>
              </div>

            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="resume-section-title" style={{ fontSize: 18, color: "#00b4ff", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: 6, marginBottom: 16, display: "flex", alignItems: "center", gap: 8 }}>
              <GraduationCap size={18} /> Education
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, fontSize: 13.5 }}>
              
              <div className="resume-item" style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
                <div>
                  <strong style={{ color: "#fff" }}>Rajiv Gandhi Institute of Technology</strong> — Andheri (West), Mumbai
                  <div style={{ color: "#aaa", marginTop: 2 }}>Bachelor of Computer Engineering</div>
                </div>
                <span className="resume-meta-info" style={{ color: "#aaa" }}>2022 – 2027</span>
              </div>

              <div className="resume-item" style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
                <div>
                  <strong style={{ color: "#fff" }}>Nirmala Memorial Foundation College of Science</strong> — Kandivali (East), Mumbai
                  <div style={{ color: "#aaa", marginTop: 2 }}>Higher Secondary Certificate (HSC)</div>
                </div>
                <span className="resume-meta-info" style={{ color: "#aaa" }}>2020 – 2022</span>
              </div>

              <div className="resume-item" style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
                <div>
                  <strong style={{ color: "#fff" }}>St. Francis D'Assisi High School</strong> — Borivali (West), Mumbai
                  <div style={{ color: "#aaa", marginTop: 2 }}>Secondary School Certificate (SSC)</div>
                </div>
                <span className="resume-meta-info" style={{ color: "#aaa" }}>2008 – 2020</span>
              </div>

            </div>
          </div>

          {/* Achievements & Additional Information */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
              
              {/* Achievements */}
              <div>
                <h3 className="resume-section-title" style={{ fontSize: 18, color: "#00b4ff", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: 6, marginBottom: 12, display: "flex", alignItems: "center", gap: 8 }}>
                  <Award size={18} /> Achievements
                </h3>
                <ul style={{ margin: 0, paddingLeft: 20, fontSize: 13.5, color: "#ccc", lineHeight: 1.6 }}>
                  <li>Winner – Startup Battle (AI–IoT sector) among 100+ teams.</li>
                  <li>Winner – Hackethon Recursion 7.0 among 1000+ teams.</li>
                  <li>Blockchain for Enterprise (Basics)</li>
                  <li>IoT Edge Computing & Analytics</li>
                  <li>Google Cloud Launchpad</li>
                </ul>
              </div>

              {/* Additional Information */}
              <div>
                <h3 className="resume-section-title" style={{ fontSize: 18, color: "#00b4ff", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: 6, marginBottom: 12, display: "flex", alignItems: "center", gap: 8 }}>
                  <Info size={18} /> Additional Info
                </h3>
                <ul style={{ margin: 0, paddingLeft: 20, fontSize: 13.5, color: "#ccc", lineHeight: 1.6 }}>
                  <li><strong style={{ color: "#fff" }}>Languages:</strong> English, Hindi, Marathi, Gujarati, French</li>
                  <li>Active Member & Volunteer – Swift Mumbai Community</li>
                  <li><strong style={{ color: "#fff" }}>CESS Society:</strong> Head of Event Management & Tech Secretary (2023–2025)</li>
                  <li><strong style={{ color: "#fff" }}>E-CELL:</strong> Head of Corporate Relations (2023–2024)</li>
                </ul>
              </div>

            </div>
          </div>

        </div>
        {/* --- RESUME SHEET END --- */}
      </motion.div>
    </section>
  );
}
