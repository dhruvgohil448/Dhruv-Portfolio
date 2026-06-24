import React from 'react'
import { motion } from 'framer-motion'
import "../CSS/Home.css"
import '../index.css' 


// 🖼️ Import Assets
import photo from '/gallery/photo.jpg'
import githubLogo from '/gallery/logos/github.png'
import linkedinLogo from '/gallery/logos/linkedin.png'
import gmailLogo from '/gallery/logos/gmail.png'
import whatsappLogo from '/gallery/logos/whatsapp.png'
import instagramLogo from '/gallery/logos/insta.png'
import facebookLogo from '/gallery/logos/facebook.png'

export default function Home() {
  const professions = [
    'iOS Developer',
    'Mobile Engineer',
    'Swift Specialist',
    'App Store Publisher',
    'Freelancer',
  ]

  const quickLinks = [
    { img: linkedinLogo, title: 'LinkedIn', link: 'https://www.linkedin.com/in/dhruv-gohil-732028257?utm_source=share_via&utm_content=profile&utm_medium=member_ios' },
    { img: gmailLogo, title: 'Email', link: 'mailto:dhruvgohil448@gmail.com' },
    { img: githubLogo, title: 'GitHub', link: 'http://github.com/dhruvgohil448' },
    { img: instagramLogo, title: 'Instagram', link: 'https://www.instagram.com/dhruvgohil_89?igsh=OXVqN3c1Y3R0ZXpx&utm_source=qr' },
  ]

  return (
    <section className="home-section">
      {/* Typing Effect Styles */}
      <style>
        {`
          @keyframes typing { from { width: 0; } to { width: 100%; } }
          @keyframes blink { 50% { border-color: transparent; } }
        `}
      </style>

      {/* Top Section: Photo + Info */}
      <div className="home-top">
        {/* Left: Glowing Photo */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="photo-container"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="photo-ring"
          />
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="photo-frame"
          >
            <motion.img
              src={photo}
              alt="Dhruv Gohil"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="profile-photo"
            />
          </motion.div>
        </motion.div>

        {/* Right: Info Section */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="home-info"
        >
          <h1 className="home-title">
            Hi, I’m{' '}
            <motion.span
              animate={{ backgroundPositionX: ['0%', '200%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              className="home-name"
            >
              Dhruv Gohil
            </motion.span>
          </h1>

          {/* Typing Animated Text */}
          <div className="typing-container">
            <p className="typing-effect">
              iOS Developer | Architecting Scalable Mobile Apps
            </p>
            <p className="typing-effect-2">
              SwiftUI • UIKit • MVVM | 20+ Production Apps.
            </p>
          </div>

          {/* Profession Tags */}
          <motion.div className="profession-tags">
            {professions.map((role, i) => (
              <motion.div key={i} whileHover={{ scale: 1.05, background: 'linear-gradient(90deg,var(--accent),var(--accent-2))' }} transition={{ type: 'spring', stiffness: 200 }} className="profession-tag">
                {role}
              </motion.div>
            ))}
          </motion.div>

          {/* Info Cards */}
          <motion.div className="info-cards">
            {[
              { label: '📍 Location', value: 'Mumbai, Maharashtra, India' },
              { label: '💼 Expertise', value: 'iOS Development, Swift' },
              { label: '📧 Contact', value: 'dhruvgohil448@gmail.com' },
            ].map((info, i) => (
              <motion.div key={i} whileHover={{ y: -4, scale: 1.05 }} transition={{ type: 'spring', stiffness: 250 }} className="info-card">
                <strong>{info.label}</strong>
                <p>{info.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Quick Links */}
      <motion.div className="quick-links">
        <h2 className="quick-links-title">Connect with me</h2>
        <div className="quick-links-list">
          {quickLinks.map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              title={item.title}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 250 }}
            >
              <motion.img
                src={item.img}
                alt={item.title}
                whileHover={{ filter: 'drop-shadow(0 0 15px var(--accent)) brightness(1.2)' }}
                className="quick-link-img"
              />
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Contact Section */}
      <motion.div
        className="home-contact"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="home-contact-title">📬 Get in Touch</h2>
        <p className="home-contact-sub">Open for freelance iOS work, full-time roles, and tech collaborations.</p>

        <div className="home-contact-grid">
          {[
            {
              icon: "📧",
              label: "Email",
              value: "dhruvgohil448@gmail.com",
              href: "mailto:dhruvgohil448@gmail.com",
            },
            {
              icon: "📱",
              label: "WhatsApp",
              value: "+91 88797 27963",
              href: "https://wa.me/918879727963",
            },
            {
              icon: "📍",
              label: "Location",
              value: "Mumbai, Maharashtra, India",
              href: null,
            },
            {
              icon: "💼",
              label: "LinkedIn",
              value: "Dhruv Gohil",
              href: "https://www.linkedin.com/in/dhruv-gohil-732028257",
            },
            {
              icon: "💻",
              label: "GitHub",
              value: "github.com/dhruvgohil448",
              href: "http://github.com/dhruvgohil448",
            },
            {
              icon: "📸",
              label: "Instagram",
              value: "@dhruvgohil_89",
              href: "https://www.instagram.com/dhruvgohil_89",
            },
          ].map((c, i) => {
            const inner = (
              <>
                <span className="home-contact-icon">{c.icon}</span>
                <div className="home-contact-text">
                  <span className="home-contact-label">{c.label}</span>
                  <span className="home-contact-value">{c.value}</span>
                </div>
              </>
            );
            return c.href ? (
              <motion.a
                key={i}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="home-contact-card"
                whileHover={{ y: -4, scale: 1.03, boxShadow: "0 12px 30px rgba(0, 180, 255, 0.25)" }}
                transition={{ type: "spring", stiffness: 250 }}
              >
                {inner}
              </motion.a>
            ) : (
              <motion.div
                key={i}
                className="home-contact-card"
                whileHover={{ y: -4, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 250 }}
              >
                {inner}
              </motion.div>
            );
          })}
        </div>
      </motion.div>

    </section>
  )
}
