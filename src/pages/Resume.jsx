import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Code, Award, Info, Download, Mail, Phone, Link, MapPin } from "lucide-react";

export default function Resume() {
  const resumePdfUrl = `${import.meta.env.BASE_URL}Dhruv_Gohil_Resume.pdf`;

  const handleDownload = (e) => {
    // Direct download trigger
    try {
      const link = document.createElement("a");
      link.href = resumePdfUrl;
      link.download = "Dhruv_Gohil_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.error("Download failed:", err);
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
            nav, .nav, footer, .footer, .no-print, button, .print-btn-container {
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
              text-decoration: underline !important;
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
        <div className="print-btn-container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 30, flexWrap: "wrap", gap: 15 }}>
          <div>
            <h2 style={{ fontSize: 28, color: "#00b4ff", margin: 0 }}>📄 Resume</h2>
            <p style={{ color: "#aaa", margin: "5px 0 0 0" }}>Interactive layout &amp; downloadable PDF</p>
          </div>
          <a
            href={resumePdfUrl}
            download="Dhruv_Gohil_Resume.pdf"
            onClick={handleDownload}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              background: "linear-gradient(90deg, #00b4ff, #0077ff)",
              color: "#fff",
              border: "none",
              padding: "12px 24px",
              borderRadius: 8,
              cursor: "pointer",
              fontWeight: 600,
              boxShadow: "0 4px 15px rgba(0, 180, 255, 0.3)",
              fontSize: 15,
              textDecoration: "none",
              transition: "transform 0.15s ease, filter 0.15s ease",
              zIndex: 10,
              position: "relative",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.filter = "brightness(1.15)";
              e.currentTarget.style.transform = "scale(1.04)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.filter = "none";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <Download size={18} /> Download Resume PDF
          </a>
        </div>

        {/* --- RESUME SHEET START --- */}
        <div className="resume-sheet" style={{ display: "flex", flexDirection: "column", gap: 30 }}>
          {/* Header */}
          <div style={{ borderBottom: "2px solid rgba(255,255,255,0.08)", paddingBottom: 20 }}>
            <h1 style={{ fontSize: 36, color: "#fff", margin: "0 0 8px 0", fontWeight: 800, letterSpacing: 0.5 }}>
              DHRUV GOHIL
            </h1>
            <h2 className="resume-accent-text" style={{ fontSize: 20, color: "#00b4ff", margin: "0 0 16px 0", fontWeight: 600, letterSpacing: 0.3 }}>
              iOS Developer — Swift &amp; SwiftUI
            </h2>

            {/* Contact Grid */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "15px 25px", fontSize: 14, color: "#aaa" }}>
              <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <Phone size={14} className="resume-accent-text" style={{ color: "#00b4ff" }} /> +91 88797 27963
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
              iOS Developer with 2+ years of experience shipping 20+ production applications, including apps used by 10,000+ active users. Deep expertise in Swift, SwiftUI, UIKit, Core Data, Auto Layout, and Core Animation, with a strong track record of integrating REST APIs, optimizing app performance, and deploying to the App Store via TestFlight. Comfortable owning a feature end-to-end within MVVM and Clean Architecture, with working cross-platform exposure through Kotlin and React Native. Focused on scalable architecture, clean code, and iOS experiences that hold up in production.
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="resume-section-title" style={{ fontSize: 18, color: "#00b4ff", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: 6, marginBottom: 12, display: "flex", alignItems: "center", gap: 8 }}>
              <Code size={18} /> Technical Skills
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 14 }}>
              <div>
                <strong style={{ color: "#fff" }}>Languages:</strong> <span style={{ color: "#ccc" }}>Swift, Kotlin, JavaScript, Objective-C (basic)</span>
              </div>
              <div>
                <strong style={{ color: "#fff" }}>Mobile Frameworks:</strong> <span style={{ color: "#ccc" }}>SwiftUI, UIKit, Core Data, MapKit, Core Animation, Auto Layout, React Native</span>
              </div>
              <div>
                <strong style={{ color: "#fff" }}>Architecture &amp; Practices:</strong> <span style={{ color: "#ccc" }}>MVVM, MVP, Clean Architecture, RESTful API design, data synchronization, mobile app security, App Store deployment, TestFlight</span>
              </div>
              <div>
                <strong style={{ color: "#fff" }}>Databases:</strong> <span style={{ color: "#ccc" }}>SQLite, Core Data, MySQL, PostgreSQL, MongoDB</span>
              </div>
              <div>
                <strong style={{ color: "#fff" }}>Tools:</strong> <span style={{ color: "#ccc" }}>Xcode, Git/GitHub, CocoaPods, Swift Package Manager, Firebase, Android Studio, Linux</span>
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
                <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", marginBottom: 4 }}>
                  <div>
                    <strong style={{ fontSize: 16, color: "#fff" }}>Junior iOS Developer</strong>
                    <span style={{ color: "#aaa" }}> — Weekend Tech LLP</span>
                  </div>
                  <span className="resume-meta-info" style={{ color: "#00b4ff", fontSize: 14, fontWeight: 500 }}>Aug 2024 – Present</span>
                </div>
                <p style={{ margin: "0 0 10px 0", fontSize: 13, color: "#888", fontStyle: "italic" }}>
                  Client-services company delivering iOS/cross-platform apps; below are client projects owned end-to-end
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: 14, paddingLeft: 10, borderLeft: "2px solid rgba(0, 180, 255, 0.2)" }}>
                                {/* Airline Crew App */}
                  <div>
                    <a
                      href="https://apps.apple.com/in/app/creweasy/id1645253631"
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: "#00b4ff", fontSize: 14, fontWeight: "bold", textDecoration: "underline", textUnderlineOffset: 3 }}
                    >
                      Airline Crew Management App (Confidential, enterprise client) ↗
                    </a>
                    <ul style={{ margin: "4px 0 0 0", paddingLeft: 20, fontSize: 13.5, color: "#ccc", lineHeight: 1.6 }}>
                      <li>Shipped an enterprise iOS app used by 10,000+ active crew members, improving scheduling efficiency by 35%.</li>
                      <li>Built custom UIKit components with Auto Layout, cutting UI rendering time by 20% across iPhone and iPad.</li>
                      <li>Integrated REST APIs for real-time schedule updates, reducing crew response time by 15%.</li>
                      <li>Optimized Core Data for 50,000+ records, improving data load speed by 40%.</li>
                    </ul>
                  </div>

                  {/* Boru */}
                  <div>
                    <a
                      href="https://apps.apple.com/in/app/boru/id6447316154"
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: "#00b4ff", fontSize: 14, fontWeight: "bold", textDecoration: "underline", textUnderlineOffset: 3 }}
                    >
                      Boru — Subscription Commerce iOS App ↗
                    </a>
                    <ul style={{ margin: "4px 0 0 0", paddingLeft: 20, fontSize: 13.5, color: "#ccc", lineHeight: 1.6 }}>
                      <li>Built the full iOS UI and core functionality for a live consumer app, including recurring orders, subscription pause/resume, billing history, and delivery management.</li>
                      <li>Shipped a production-ready release to the Apple App Store for daily-essentials ordering from local vendors.</li>
                    </ul>
                  </div>

                  {/* Lyncup */}
                  <div>
                    <a
                      href="https://apps.apple.com/in/app/lyncup/id6758200689"
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: "#00b4ff", fontSize: 14, fontWeight: "bold", textDecoration: "underline", textUnderlineOffset: 3 }}
                    >
                      Lyncup — Meetup & Social Networking App (Australia) ↗
                    </a>
                    <ul style={{ margin: "4px 0 0 0", paddingLeft: 20, fontSize: 13.5, color: "#ccc", lineHeight: 1.6 }}>
                      <li>Built a scalable SwiftUI social app for meetup discovery, covering authentication, profiles, feeds, and real-time discovery via backend REST APIs.</li>
                      <li>Implemented secure onboarding and verification for an international user base; built reusable, state-driven SwiftUI components for performance and scalability.</li>
                    </ul>
                  </div>

                  {/* Flying Monk */}
                  <div>
                    <a
                      href="https://apps.apple.com/in/app/flyingmonk/id6802019620"
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: "#00b4ff", fontSize: 14, fontWeight: "bold", textDecoration: "underline", textUnderlineOffset: 3 }}
                    >
                      Flying-Monk — Rental Wheelchair App, iOS + Android ↗
                    </a>
                    <ul style={{ margin: "4px 0 0 0", paddingLeft: 20, fontSize: 13.5, color: "#ccc", lineHeight: 1.6 }}>
                      <li>Developing across iOS (SwiftUI) and Android (Kotlin), owning UI/UX and core functionality on both platforms.</li>
                      <li>Integrating REST APIs, server-side features, and payment gateway systems.</li>
                    </ul>
                  </div>

                  {/* Freelance Gig */}
                  <div>
                    <strong style={{ color: "#eee", fontSize: 14 }}>Freelance iOS Developer — Fyre Gig</strong>
                    <ul style={{ margin: "4px 0 0 0", paddingLeft: 20, fontSize: 13.5, color: "#ccc", lineHeight: 1.6 }}>
                      <li>Owned and stabilized the iOS layer of a high-traffic production React Native fintech app, resolving crashes, build issues, and performance bottlenecks.</li>
                      <li>Integrated and optimized REST APIs for real-time transactional workflows; collaborated with a cross-platform team for seamless React Native–iOS integration.</li>
                      <li>Delivered App Store–ready releases with improved stability and performance.</li>
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
                <a
                  href="https://github.com/dhruvgohil448/krypticGrind"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "#00b4ff", fontWeight: "bold", textDecoration: "underline", textUnderlineOffset: 3 }}
                >
                  krypticGrind ↗
                </a> — <span style={{ color: "#aaa" }}>iOS App, SwiftUI / VisionKit / REST API</span>
                <p style={{ margin: "4px 0 0 0", color: "#ccc", lineHeight: 1.5 }}>
                  Built a gamified competitive programming app with 500+ beta users; added AI-based recommendations that improved solve speed by 15%.
                </p>
              </div>

              <div className="resume-item">
                <a
                  href="https://github.com/dhruvgohil448/CodeNest"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "#00b4ff", fontWeight: "bold", textDecoration: "underline", textUnderlineOffset: 3 }}
                >
                  CodeNest ↗
                </a> — <span style={{ color: "#aaa" }}>iOS App, SwiftUI / UIKit / REST API</span>
                <p style={{ margin: "4px 0 0 0", color: "#ccc", lineHeight: 1.5 }}>
                  Built an app analyzing Codeforces performance across 10,000+ records; added visual insights and improved navigation, boosting daily usage by 18%.
                </p>
              </div>

              <div className="resume-item">
                <a
                  href="https://github.com/dhruvgohil448/ERP-based-Student-Management-System-"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "#00b4ff", fontWeight: "bold", textDecoration: "underline", textUnderlineOffset: 3 }}
                >
                  ERP-Based Student Management System ↗
                </a> — <span style={{ color: "#aaa" }}>Web App, HTML/CSS/JS/MySQL</span>
                <p style={{ margin: "4px 0 0 0", color: "#ccc", lineHeight: 1.5 }}>
                  Built a role-based ERP for 1,000+ users covering attendance, notices, and fee payments; automated workflows cut manual workload by 40% and query optimization improved performance by 35%.
                </p>
              </div>

              <div className="resume-item">
                <a
                  href="https://github.com/dhruvgohil448/ReadBetter---Where-Words-Feel-Friendly"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "#00b4ff", fontWeight: "bold", textDecoration: "underline", textUnderlineOffset: 3 }}
                >
                  ReadBetter ↗
                </a> — <span style={{ color: "#aaa" }}>iOS App, SwiftUI / VisionKit / Speech Recognition (Swift Student Challenge)</span>
                <p style={{ margin: "4px 0 0 0", color: "#ccc", lineHeight: 1.5 }}>
                  Built a fully offline, dyslexia-friendly reading app with accessible reading modes and focus tools.
                </p>
              </div>

              <div className="resume-item">
                <a
                  href="https://apps.apple.com/in/app/stock-yaari-stock-f-o-signals/id1664406057"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "#00b4ff", fontWeight: "bold", textDecoration: "underline", textUnderlineOffset: 3 }}
                >
                  Stock Yaari – Stock F&O Signals ↗
                </a> — <span style={{ color: "#aaa" }}>React Native, REST API</span>
                <p style={{ margin: "4px 0 0 0", color: "#ccc", lineHeight: 1.5 }}>
                  Fixed complete iOS app configuration, signing, and release issues, and stabilized the update pipeline for successful App Store deployment.
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
                  <strong style={{ color: "#fff" }}>Bachelor of Computer Engineering</strong> — <span style={{ color: "#ccc" }}>Rajiv Gandhi Institute of Technology, Andheri (West)</span>
                </div>
                <span className="resume-meta-info" style={{ color: "#aaa" }}>2027</span>
              </div>

              <div className="resume-item" style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
                <div>
                  <strong style={{ color: "#fff" }}>Higher Secondary Certificate</strong> — <span style={{ color: "#ccc" }}>Nirmala Memorial Foundation College of Science, Kandivali (East)</span>
                </div>
                <span className="resume-meta-info" style={{ color: "#aaa" }}>2022</span>
              </div>

              <div className="resume-item" style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
                <div>
                  <strong style={{ color: "#fff" }}>Secondary School Certificate</strong> — <span style={{ color: "#ccc" }}>St. Francis D'Assisi High School, Borivali (West)</span>
                </div>
                <span className="resume-meta-info" style={{ color: "#aaa" }}>2020</span>
              </div>

            </div>
          </div>

          {/* Certifications & Achievements & Additional Information */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
              
              {/* Achievements */}
              <div>
                <h3 className="resume-section-title" style={{ fontSize: 18, color: "#00b4ff", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: 6, marginBottom: 12, display: "flex", alignItems: "center", gap: 8 }}>
                  <Award size={18} /> Certifications &amp; Achievements
                </h3>
                <ul style={{ margin: 0, paddingLeft: 20, fontSize: 13.5, color: "#ccc", lineHeight: 1.6 }}>
                  <li>Winner — Startup Battle (AI–IoT sector), among 100+ teams</li>
                  <li>Winner — Hackathon Recursion 7.0, among 1,000+ teams</li>
                  <li>Blockchain for Enterprise (Basics) • IoT Edge Computing &amp; Analytics • Google Cloud Launchpad</li>
                </ul>
              </div>

              {/* Additional Information */}
              <div>
                <h3 className="resume-section-title" style={{ fontSize: 18, color: "#00b4ff", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: 6, marginBottom: 12, display: "flex", alignItems: "center", gap: 8 }}>
                  <Info size={18} /> Additional Information
                </h3>
                <ul style={{ margin: 0, paddingLeft: 20, fontSize: 13.5, color: "#ccc", lineHeight: 1.6 }}>
                  <li><strong style={{ color: "#fff" }}>Languages:</strong> English, Hindi, Marathi, Gujarati, French</li>
                  <li><strong style={{ color: "#fff" }}>Leadership:</strong> CESS — Head of Event Management &amp; Technical Secretary (2023–2025); E-Cell — Head of Corporate Relations (2023–2024); Swift Mumbai Community — Active Member &amp; Volunteer</li>
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
