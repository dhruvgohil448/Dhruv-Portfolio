import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, Briefcase, User } from 'lucide-react'

const PROJECTS = {
  professional: [
    {
      title: '✈️ Airline Crew Management iOS App',
      desc: 'Launched an enterprise-scale iOS application used by 10,000+ active crew members, improving scheduling efficiency by 35%. Built custom UIKit components with Auto Layout, reducing UI rendering time by 20% across iPhone and iPad, and optimized Core Data for 50,000+ records to improve data load speed by 40%.',
      gradient: 'linear-gradient(135deg, #1e3a8a, #3b82f6)',
      initials: 'ACM',
      tech: ['Swift', 'UIKit', 'Core Data', 'Auto Layout', 'REST APIs'],
      live: '#',
      code: 'http://github.com/dhruvgohil448'
    },
    {
      title: '📦 Boru – Subscription Commerce App',
      desc: 'Designed and developed the complete iOS application UI and core functionality for a live consumer subscription commerce app. Built recurring orders, subscription pause/resume, billing history, and delivery management features to deliver a seamless local vendor daily essentials ordering experience.',
      gradient: 'linear-gradient(135deg, #059669, #10b981)',
      initials: 'BSC',
      tech: ['Swift', 'UIKit', 'Core Data', 'App Store Deployment'],
      live: 'https://apps.apple.com/in/app/boru/id6447316154',
      code: 'http://github.com/dhruvgohil448'
    },
    {
      title: '💬 Lyncup – Meetup & Social Networking',
      desc: 'Developed a scalable SwiftUI social networking app focused on meetup discovery, event participation, and secure onboarding for international users. Integrated backend REST APIs for authentication, profiles, feeds, and real-time meetup discovery with state-driven navigation.',
      gradient: 'linear-gradient(135deg, #db2777, #f43f5e)',
      initials: 'LYN',
      tech: ['SwiftUI', 'REST APIs', 'State Navigation', 'Security'],
      live: '#',
      code: 'http://github.com/dhruvgohil448'
    },
    {
      title: '♿ Flying-Monk – Wheelchair Rental App',
      desc: 'Worked on a cross-platform wheelchair rental application for iOS and Android, managing development using Xcode and Android Studio. Responsible for improving design, UI/UX, ensuring smooth core functionalities, and integrating payment gateway systems.',
      gradient: 'linear-gradient(135deg, #7c3aed, #6366f1)',
      initials: 'FMN',
      tech: ['SwiftUI', 'Kotlin', 'REST APIs', 'Payment Gateways', 'Android Studio'],
      live: '#',
      code: 'http://github.com/dhruvgohil448'
    }
  ],
  personal: [
    {
      title: '💻 CodeNest – Codeforces Analyzer',
      desc: 'Built a specialized iOS application to analyze competitive programming performance on Codeforces. Processes over 10,000+ performance records reliably to render visual insights, charts, and improved navigation, boosting daily user engagement by 18%.',
      gradient: 'linear-gradient(135deg, #2563eb, #7c3aed)',
      initials: 'CDS',
      tech: ['SwiftUI', 'UIKit', 'REST API', 'Data Visualization'],
      live: '#',
      code: 'https://github.com/dhruvgohil448/CodeNest.git'
    },
    {
      title: '🎮 krypticGrind – Gamified Programming',
      desc: 'Developed a gamified competitive programming app with over 500+ active beta users. Implemented VisionKit and an AI-based recommendation engine to suggest personalized programming challenges, resulting in a 15% increase in user solve speed.',
      gradient: 'linear-gradient(135deg, #dc2626, #ea580c)',
      initials: 'KRG',
      tech: ['SwiftUI', 'VisionKit', 'REST API', 'AI Recommendations'],
      live: '#',
      code: 'https://github.com/dhruvgohil448/krypticGrind.git'
    },
    {
      title: '📖 ReadBetter – Dyslexia Accessibility Helper',
      desc: 'Built a 100% offline dyslexia-friendly iOS reading assistant app for the Apple Swift Student Challenge. Implemented Speech Recognition, custom VisionKit scans, accessible reading modes, and active focus tools to improve text readability and comfort.',
      gradient: 'linear-gradient(135deg, #0891b2, #06b6d4)',
      initials: 'RBT',
      tech: ['SwiftUI', 'VisionKit', 'SpeechRecognition', 'Apple Playground'],
      live: '#',
      code: 'https://github.com/dhruvgohil448/ReadBetter---Where-Words-Feel-Friendly.git'
    },
    {
      title: '📈 Stock Yaari – F&O Signals App',
      desc: 'Delivered a major freelance project by resolving complete iOS app signing, configuration, and provisioning issues for production releases. Stabilized the release pipeline and ensured successful App Store deployment for future updates.',
      gradient: 'linear-gradient(135deg, #059669, #2563eb)',
      initials: 'STY',
      tech: ['React Native', 'iOS Configuration', 'App Store Signing', 'REST API'],
      live: 'https://apps.apple.com/in/app/stock-yaari-stock-f-o-signals/id1664406057',
      code: 'http://github.com/dhruvgohil448'
    },
    {
      title: '🏫 Student Management ERP System',
      desc: 'Developed a web-based ERP system to manage student, faculty, and staff records including attendance, notices, and payments for 1,000+ users. Implemented secure role-based authentication and optimized database queries to improve load performance by 35%.',
      gradient: 'linear-gradient(135deg, #475569, #64748b)',
      initials: 'ERP',
      tech: ['HTML', 'CSS', 'JavaScript', 'MySQL', 'Authentication'],
      live: '#',
      code: 'https://github.com/dhruvgohil448/ERP-based-Student-Management-System-.git'
    },
    {
      title: '🩺 Diabetes Predictor',
      desc: 'Built a machine learning powered web application that predicts the likelihood of diabetes based on user health parameters. Implemented data preprocessing, model training, and a clean UI to deliver real-time predictions with high accuracy.',
      gradient: 'linear-gradient(135deg, #db2777, #f43f5e)',
      initials: 'DIA',
      tech: ['Python', 'Machine Learning', 'Flask', 'Pandas', 'Scikit-learn'],
      live: '#',
      code: 'https://github.com/dhruvgohil448/diabetes_predictor.git'
    },
    {
      title: '✈️ Tourism AI',
      desc: 'Designed an AI-driven tourism assistant that provides personalized travel recommendations, itinerary planning, and destination insights. Leveraged natural language processing and smart data retrieval to enhance the trip planning experience for users.',
      gradient: 'linear-gradient(135deg, #0ea5e9, #14b8a6)',
      initials: 'TAI',
      tech: ['Python', 'AI', 'NLP', 'APIs', 'Web App'],
      live: '#',
      code: 'https://github.com/dhruvgohil448/Tourism-Ai.git'
    },
    {
      title: '🧠 Mannsathi',
      desc: 'Built a mental health companion app offering supportive conversations, mood tracking, and personalized wellness resources. Combined thoughtful UX with intelligent responses to create a safe and accessible space for users to reflect and grow.',
      gradient: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
      initials: 'MNS',
      tech: ['AI', 'Mental Health', 'Chatbot', 'Web App', 'UX'],
      live: '#',
      code: 'https://github.com/dhruvgohil448/Mannsathi.git'
    },
    {
      title: '⚡ Pokéverse',
      desc: 'Built a native iOS Pokédex app in SwiftUI that lets users browse and explore detailed information about Pokémon. Integrated the PokéAPI for real-time data fetching with smooth navigation, search, and a polished responsive UI for fans.',
      gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
      initials: 'PKV',
      tech: ['SwiftUI', 'PokéAPI', 'REST API', 'iOS', 'Swift'],
      live: '#',
      code: 'https://github.com/dhruvgohil448/pokeverse.git'
    }
  ]
};

export default function Projects() {
  const [activeTab, setActiveTab] = useState('professional')

  return (
    <motion.section
      className="container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="projects"
      style={{ padding: '40px 0' }}
    >
      <div className="card" style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 30 }}>
        <motion.h2
          className="text-4xl font-semibold text-cyan-400 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          style={{ fontSize: '2.2rem', color: '#00b4ff', marginBottom: '8px' }}
        >
          🚀 Projects & Experience
        </motion.h2>
        <p className="text-gray-400 mb-10" style={{ color: '#aaa', marginBottom: '30px' }}>
          Explore my professional industry experience and personal freelancing projects in iOS and mobile app development.
        </p>

        {/* Tab Switcher */}
        <div style={{ display: 'flex', gap: '15px', marginBottom: '30px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '12px' }}>
          <button
            onClick={() => setActiveTab('professional')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: 'none',
              border: 'none',
              color: activeTab === 'professional' ? '#00b4ff' : '#aaa',
              fontSize: '1.05rem',
              fontWeight: 600,
              padding: '8px 16px',
              cursor: 'pointer',
              position: 'relative',
              transition: 'color 0.3s'
            }}
          >
            <Briefcase size={18} />
            Professional Experience
            {activeTab === 'professional' && (
              <motion.div
                layoutId="projects-tab-underline"
                style={{
                  position: 'absolute',
                  bottom: '-13px',
                  left: 0,
                  right: 0,
                  height: '3px',
                  backgroundColor: '#00b4ff',
                  borderRadius: '2px'
                }}
              />
            )}
          </button>
          <button
            onClick={() => setActiveTab('personal')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: 'none',
              border: 'none',
              color: activeTab === 'personal' ? '#00b4ff' : '#aaa',
              fontSize: '1.05rem',
              fontWeight: 600,
              padding: '8px 16px',
              cursor: 'pointer',
              position: 'relative',
              transition: 'color 0.3s'
            }}
          >
            <User size={18} />
            Personal & Freelance
            {activeTab === 'personal' && (
              <motion.div
                layoutId="projects-tab-underline"
                style={{
                  position: 'absolute',
                  bottom: '-13px',
                  left: 0,
                  right: 0,
                  height: '3px',
                  backgroundColor: '#00b4ff',
                  borderRadius: '2px'
                }}
              />
            )}
          </button>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid" style={{ display: 'grid', gap: 24, gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
          <AnimatePresence mode="wait">
            {PROJECTS[activeTab].map((p, idx) => (
              <motion.div
                key={p.title}
                className="project-card"
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ scale: 1.03 }}
                style={{
                  background: 'linear-gradient(145deg, rgba(20,20,20,0.9), rgba(10,10,10,0.9))',
                  border: '1px solid rgba(0,180,255,0.15)',
                  borderRadius: 16,
                  padding: 16,
                  overflow: 'hidden',
                  boxShadow: '0 0 20px rgba(0,180,255,0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  {/* Abstract Gradient Header */}
                  <motion.div 
                    whileHover={{ scale: 1.02 }} 
                    style={{ 
                      borderRadius: 12, 
                      height: '140px',
                      background: p.gradient,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '2.5rem',
                      fontWeight: 800,
                      color: 'rgba(255,255,255,0.9)',
                      textShadow: '0 4px 10px rgba(0,0,0,0.3)',
                      letterSpacing: '2px',
                      boxShadow: 'inset 0 0 40px rgba(0,0,0,0.2)'
                    }}
                  >
                    {p.initials}
                  </motion.div>

                  <div style={{ marginTop: 16 }}>
                    <h3 style={{ fontSize: 18, color: '#00b4ff', marginBottom: 8, fontWeight: 600 }}>{p.title}</h3>
                    <p style={{ fontSize: 14, color: '#ccc', marginBottom: 12, lineHeight: 1.6 }}>{p.desc}</p>
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 14 }}>
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        style={{
                          background: 'rgba(0,180,255,0.06)',
                          border: '1px solid rgba(0,180,255,0.2)',
                          padding: '3px 8px',
                          borderRadius: 6,
                          fontSize: 12,
                          color: '#80d4ff'
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10 }}>
                    {p.initials !== 'STY' && p.code && (
                      <motion.a
                        href={p.code}
                        target="_blank"
                        rel="noreferrer"
                        className="btn"
                        whileHover={{ scale: 1.08 }}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 5,
                          background: 'rgba(255,255,255,0.05)',
                          color: '#00b4ff',
                          padding: '6px 12px',
                          borderRadius: 8,
                          fontSize: 13,
                          border: '1px solid rgba(0,180,255,0.2)',
                          textDecoration: 'none',
                          cursor: 'pointer'
                        }}
                      >
                        <Github size={14} /> Code
                      </motion.a>
                    )}
                    {p.live !== '#' && (
                      <motion.a
                        href={p.live}
                        target="_blank"
                        rel="noreferrer"
                        className="btn"
                        whileHover={{ scale: 1.08 }}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 5,
                          background: 'linear-gradient(90deg, #00b4ff, #0077ff)',
                          color: '#fff',
                          padding: '6px 12px',
                          borderRadius: 8,
                          fontSize: 13,
                          textDecoration: 'none',
                          cursor: 'pointer'
                        }}
                      >
                        <ExternalLink size={14} /> Live
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  )
}
