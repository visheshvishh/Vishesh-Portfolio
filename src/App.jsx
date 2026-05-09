import { useState, useEffect, useRef } from "react";
import {
  Github, Linkedin, Mail, Phone, MapPin, ExternalLink, ChevronDown,
  Code2, Database, Terminal, Cpu, Layers, Award, GraduationCap,
  Briefcase, User, Menu, X, ArrowUpRight, Star, Zap, Download, ArrowUp
} from "lucide-react";

const COLORS = {
  bg: "#080c14",
  surface: "#0d1424",
  card: "#111827",
  border: "#1e2d45",
  accent: "#00d4ff",
  accent2: "#7c3aed",
  accent3: "#10b981",
  text: "#e2e8f0",
  muted: "#64748b",
  bright: "#ffffff",
};

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Outfit:wght@300;400;500;600&display=swap');
  
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  
  html { scroll-behavior: smooth; }
  
  body {
    font-family: 'Outfit', sans-serif;
    background: ${COLORS.bg};
    color: ${COLORS.text};
    overflow-x: hidden;
  }

  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: ${COLORS.bg}; }
  ::-webkit-scrollbar-thumb { background: ${COLORS.accent}; border-radius: 2px; }

  .font-display { font-family: 'Syne', sans-serif; }

  /* Animations */
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(40px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeInLeft {
    from { opacity: 0; transform: translateX(-40px); }
    to { opacity: 1; transform: translateX(0); }
  }
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-12px); }
  }
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
  @keyframes gradient-x {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
  @keyframes spin-slow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  @keyframes pulse-glow {
    0%, 100% { box-shadow: 0 0 20px rgba(0,212,255,0.3); }
    50% { box-shadow: 0 0 40px rgba(0,212,255,0.6), 0 0 80px rgba(0,212,255,0.2); }
  }
  @keyframes orbit {
    from { transform: rotate(0deg) translateX(80px) rotate(0deg); }
    to { transform: rotate(360deg) translateX(80px) rotate(-360deg); }
  }
  @keyframes shimmer {
    0% { background-position: -200% center; }
    100% { background-position: 200% center; }
  }
  @keyframes scan {
    0% { transform: translateY(-100%); }
    100% { transform: translateY(400%); }
  }

  .animate-fade-up { animation: fadeInUp 0.8s ease forwards; }
  .animate-float { animation: float 4s ease-in-out infinite; }
  .animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
  .cursor-blink { animation: blink 1s step-end infinite; }
  .animate-shimmer {
    background: linear-gradient(90deg, transparent 0%, rgba(0,212,255,0.3) 50%, transparent 100%);
    background-size: 200% auto;
    animation: shimmer 3s linear infinite;
  }
  .spin-slow { animation: spin-slow 20s linear infinite; }
  .gradient-text {
    background: linear-gradient(135deg, #00d4ff, #7c3aed, #10b981);
    background-size: 200% 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: gradient-x 4s ease infinite;
  }
  .glass {
    background: rgba(255,255,255,0.03);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255,255,255,0.07);
  }
  .glass-card {
    background: rgba(17,24,39,0.8);
    backdrop-filter: blur(20px);
    border: 1px solid ${COLORS.border};
    transition: all 0.3s ease;
  }
  .glass-card:hover {
    border-color: rgba(0,212,255,0.4);
    transform: translateY(-4px);
    box-shadow: 0 20px 60px rgba(0,212,255,0.1);
  }
  .nav-link {
    position: relative;
    color: ${COLORS.muted};
    text-decoration: none;
    font-weight: 500;
    font-size: 0.875rem;
    letter-spacing: 0;
    transition: color 0.3s;
  }
  .nav-link::after {
    content: '';
    position: absolute;
    bottom: -4px; left: 0;
    width: 0; height: 2px;
    background: ${COLORS.accent};
    transition: width 0.3s;
  }
  .nav-link:hover { color: ${COLORS.accent}; }
  .nav-link:hover::after { width: 100%; }

  .btn-primary {
    background: linear-gradient(135deg, #00d4ff, #0099cc);
    color: #000;
    font-weight: 600;
    padding: 12px 28px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    font-family: 'Outfit', sans-serif;
    font-size: 0.9rem;
    letter-spacing: 0;
    transition: all 0.3s;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
  }
  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 40px rgba(0,212,255,0.4);
  }
  .btn-outline {
    background: transparent;
    color: ${COLORS.accent};
    border: 1px solid rgba(0,212,255,0.5);
    padding: 11px 26px;
    border-radius: 8px;
    cursor: pointer;
    font-family: 'Outfit', sans-serif;
    font-size: 0.9rem;
    font-weight: 500;
    letter-spacing: 0;
    transition: all 0.3s;
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }
  .btn-outline:hover {
    background: rgba(0,212,255,0.1);
    transform: translateY(-2px);
  }
  .section-label {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0;
    text-transform: uppercase;
    color: ${COLORS.accent};
    margin-bottom: 12px;
  }
  .section-label::before {
    content: '';
    width: 24px; height: 2px;
    background: ${COLORS.accent};
    border-radius: 1px;
  }
  .skill-pill {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 14px;
    border-radius: 100px;
    font-size: 0.8rem;
    font-weight: 500;
    border: 1px solid;
    transition: all 0.3s;
    cursor: default;
  }
  .skill-pill:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0,0,0,0.3);
  }
  .timeline-line {
    position: absolute;
    left: 16px; top: 40px; bottom: 0;
    width: 2px;
    background: linear-gradient(to bottom, ${COLORS.accent}, transparent);
  }
  .timeline-dot {
    width: 34px; height: 34px;
    border-radius: 50%;
    border: 2px solid ${COLORS.accent};
    background: ${COLORS.bg};
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
    position: relative;
    z-index: 1;
  }
  .project-tech {
    display: inline-block;
    padding: 3px 10px;
    border-radius: 4px;
    font-size: 0.72rem;
    font-weight: 600;
    background: rgba(0,212,255,0.08);
    border: 1px solid rgba(0,212,255,0.2);
    color: ${COLORS.accent};
    letter-spacing: 0;
  }
  .cert-card {
    position: relative;
    overflow: hidden;
    border-radius: 12px;
    padding: 24px;
    transition: all 0.3s;
  }
  .cert-card:hover { transform: translateY(-4px); }
  .cert-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
  }
  .noise-bg {
    position: fixed;
    inset: 0;
    opacity: 0.025;
    pointer-events: none;
    z-index: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  }
  .glow-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    pointer-events: none;
  }
  .section-divider {
    height: 1px;
    background: linear-gradient(to right, transparent, ${COLORS.border}, transparent);
    margin: 0 auto;
    max-width: 800px;
  }
  .stat-card {
    text-align: center;
    padding: 24px;
    border-radius: 12px;
    border: 1px solid ${COLORS.border};
    transition: all 0.3s;
  }
  .stat-card:hover {
    border-color: rgba(0,212,255,0.3);
    background: rgba(0,212,255,0.04);
  }
  .mobile-menu {
    position: fixed;
    inset: 0;
    background: rgba(8,12,20,0.98);
    z-index: 100;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 32px;
  }
  .scroll-indicator {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    animation: fadeInUp 1s 1.5s both;
  }
  .hero-grid {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(0,212,255,0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0,212,255,0.04) 1px, transparent 1px);
    background-size: 60px 60px;
    mask-image: radial-gradient(ellipse at center, black 20%, transparent 80%);
  }

  .container {
    width: 100%;
  }

  .font-display {
    letter-spacing: 0 !important;
  }

  .page-section {
    scroll-margin-top: 76px;
  }

  .menu-toggle {
    width: 42px;
    height: 42px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
  }

  .mobile-menu {
    padding: 88px 24px 36px;
    overflow-y: auto;
  }

  .hero-title,
  .section-title,
  .project-title,
  .timeline-title {
    overflow-wrap: anywhere;
    text-wrap: balance;
  }

  .hero-copy,
  .section-copy {
    overflow-wrap: break-word;
  }

  .hero-actions,
  .project-links {
    align-items: center;
  }

  .contact-value {
    min-width: 0;
  }

  @media (hover: none) {
    .glass-card:hover,
    .cert-card:hover,
    .skill-pill:hover,
    .btn-primary:hover,
    .btn-outline:hover {
      transform: none;
    }
  }

  @media (max-width: 1024px) {
    .site-nav {
      padding: 0 20px !important;
    }

    .desktop-nav-actions {
      display: none !important;
    }

    .menu-toggle {
      display: flex !important;
    }

    .page-section {
      padding: 84px 0 !important;
    }

    .hero-title {
      font-size: 4.25rem !important;
    }

    .about-grid,
    .education-grid,
    .project-card {
      grid-template-columns: 1fr !important;
    }

    .about-grid,
    .education-grid {
      gap: 52px !important;
    }

    .about-visual {
      min-height: 340px;
      order: -1;
    }

    .project-visual {
      min-height: 240px;
      border-right: 0 !important;
      border-bottom: 1px solid ${COLORS.border};
    }

    .section-header {
      margin-bottom: 44px !important;
    }
  }

  @media (max-width: 720px) {
    .container {
      padding: 0 18px !important;
    }

    .site-nav {
      height: 60px !important;
      padding: 0 16px !important;
    }

    .hero-section {
      min-height: auto !important;
      padding-top: 96px !important;
      padding-bottom: 52px !important;
      justify-content: flex-start !important;
    }

    .hero-grid {
      background-size: 42px 42px;
      opacity: 0.75;
    }

    .hero-orb {
      width: 260px !important;
      height: 260px !important;
      filter: blur(58px);
    }

    .hero-copy {
      font-size: 0.98rem !important;
      line-height: 1.68 !important;
      margin-bottom: 30px !important;
    }

    .hero-title {
      font-size: 3.15rem !important;
      line-height: 1.08 !important;
    }

    .typing-role {
      font-size: 1rem !important;
      flex-wrap: wrap;
      margin-bottom: 30px !important;
    }

    .hero-actions {
      display: grid !important;
      grid-template-columns: 1fr;
      gap: 12px !important;
      margin-bottom: 44px !important;
    }

    .hero-actions .btn-primary,
    .hero-actions .btn-outline,
    .project-links .btn-primary,
    .project-links .btn-outline {
      width: 100%;
      justify-content: center;
      min-height: 44px;
    }

    .stats-grid {
      grid-template-columns: 1fr !important;
      max-width: 340px !important;
    }

    .stat-card {
      padding: 18px !important;
    }

    .section-title {
      font-size: 2.25rem !important;
      line-height: 1.18 !important;
    }

    .section-label {
      letter-spacing: 0;
    }

    .skills-grid,
    .contact-grid {
      grid-template-columns: 1fr !important;
    }

    .skill-card,
    .project-content,
    .timeline-card,
    .cert-card,
    .contact-card {
      padding: 22px !important;
    }

    .project-card {
      border-radius: 16px !important;
      min-height: 0 !important;
    }

    .project-visual {
      min-height: 210px;
      padding: 32px 22px !important;
    }

    .project-icon {
      font-size: 4rem !important;
    }

    .project-title {
      font-size: 1.28rem !important;
      line-height: 1.25 !important;
    }

    .project-links {
      flex-direction: column;
      gap: 10px !important;
    }

    .education-timeline {
      padding-left: 36px !important;
    }

    .education-dot-wrap {
      left: -40px !important;
    }

    .timeline-line {
      left: 8px;
    }

    .timeline-dot {
      width: 30px;
      height: 30px;
    }

    .cert-row {
      align-items: flex-start !important;
      gap: 12px !important;
    }

    .footer-inner {
      justify-content: center !important;
      text-align: center;
    }

    .opportunity-pill {
      left: 16px;
      right: 76px !important;
      bottom: 18px !important;
      justify-content: center;
      padding: 8px 12px !important;
    }

    .back-top {
      right: 16px !important;
      bottom: 18px !important;
      width: 42px !important;
      height: 42px !important;
    }
  }

  @media (max-width: 420px) {
    .container {
      padding: 0 14px !important;
    }

    .mobile-menu {
      gap: 22px;
      padding-inline: 18px;
    }

    .mobile-menu-link {
      font-size: 1.55rem !important;
    }

    .hero-copy {
      font-size: 0.92rem !important;
    }

    .hero-title {
      font-size: 2.65rem !important;
    }

    .section-title {
      font-size: 2.05rem !important;
    }

    .hero-actions .btn-primary,
    .hero-actions .btn-outline {
      padding-inline: 16px;
      font-size: 0.86rem;
    }

    .about-orbit {
      width: 250px !important;
      height: 250px !important;
    }

    .about-avatar {
      width: 190px !important;
      height: 190px !important;
    }

    .about-avatar span {
      font-size: 2.5rem !important;
    }

    .tech-badge {
      font-size: 0.7rem !important;
      padding: 7px 10px !important;
    }

    .contact-card {
      gap: 12px !important;
      padding: 18px !important;
    }

    .contact-icon {
      width: 44px !important;
      height: 44px !important;
    }

    .contact-value {
      font-size: 0.82rem !important;
    }
  }
`;

const NAV_ITEMS = ["About", "Skills", "Projects", "Education", "Certifications", "Contact"];

const SKILLS = {
  "Languages": { color: "#00d4ff", bg: "rgba(0,212,255,0.08)", border: "rgba(0,212,255,0.25)", items: ["JavaScript", "Python"] },
  "Frontend": { color: "#f59e0b", bg: "rgba(245,158,11,0.08)", border: "rgba(245,158,11,0.25)", items: ["React.js", "HTML", "CSS", "Tailwind CSS"] },
  "Backend": { color: "#10b981", bg: "rgba(16,185,129,0.08)", border: "rgba(16,185,129,0.25)", items: ["FastAPI", "REST APIs"] },
  "Databases": { color: "#8b5cf6", bg: "rgba(139,92,246,0.08)", border: "rgba(139,92,246,0.25)", items: ["MySQL", "MongoDB"] },
  "Tools": { color: "#f43f5e", bg: "rgba(244,63,94,0.08)", border: "rgba(244,63,94,0.25)", items: ["GitHub", "VS Code", "Vercel", "Google Colab"] },
  "AI Tools": { color: "#06b6d4", bg: "rgba(6,182,212,0.08)", border: "rgba(6,182,212,0.25)", items: ["Claude Code", "ChatGPT", "Codex"] },
};

const PROJECTS = [
  {
    title: "ATS Resume Analyzer AI",
    subtitle: "AI-Powered Career Tool",
    date: "March 2026",
    stack: ["HTML", "CSS", "JavaScript", "PDF.js"],
    live: "https://ats-resume-analyzer-ai.vercel.app/",
    github: null,
    color: "#00d4ff",
    icon: "🎯",
    features: [
      "Weighted ATS scoring engine inspired by real-world recruiter systems",
      "Multi-format parsing — PDF, DOCX, and TXT resume support",
      "Keyword gap analysis with missing skill detection & instant feedback",
      "Smart job board links for LinkedIn, Naukri, Internshala & Google Jobs",
      "Client-side processing for complete data privacy",
    ],
    impact: "Helps job seekers optimize their resumes against any JD in seconds with zero data exposure.",
  },
  {
    title: "Employee Management Portal",
    subtitle: "Full-Stack Enterprise System",
    date: "November 2025",
    stack: ["React", "FastAPI", "MySQL", "Tailwind CSS", "SQLAlchemy"],
    live: null,
    github: "https://github.com/visheshvishh/Employee-Management-Portal",
    color: "#7c3aed",
    icon: "🏢",
    features: [
      "Dual-role dashboards for Admins and Employees with granular permissions",
      "JWT authentication, bcrypt password hashing & login lockout protection",
      "RESTful API layer with FastAPI + SQLAlchemy for all CRUD operations",
      "Real-time task assignment, status tracking & salary management",
      "Fully responsive UI enabling seamless workforce operations on any device",
    ],
    impact: "Streamlines HR workflows and workforce visibility for mid-sized organizations.",
  },
];

const EDUCATION = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Thakur Institute of Management Studies, Career Development & Research",
    year: "April 2026",
    grade: "CGPA: 8.25",
    color: "#00d4ff",
  },
  {
    degree: "B.Sc. Information Technology",
    institution: "L.S. Raheja College of Arts & Commerce",
    year: "March 2024",
    grade: "CGPA: 7.28",
    color: "#7c3aed",
  },
  {
    degree: "HSC (Science)",
    institution: "Patuck Technical High School & Junior College",
    year: "March 2021",
    grade: "73%",
    color: "#10b981",
  },
];

const CERTIFICATIONS = [
  { title: "Data Analytics with Python", date: "Apr 2025", color: "#00d4ff", icon: "📊" },
  { title: "Web Designing with Bootstrap", date: "Mar 2023", color: "#f59e0b", icon: "🎨" },
  { title: "Introduction to Machine Learning", date: "Sep 2023", color: "#8b5cf6", icon: "🤖" },
  { title: "Programming Logic Building", date: "Apr 2022", color: "#10b981", icon: "🧠" },
];

const TYPING_WORDS = [
  "MCA Graduate",
  "Software Developer",
  "Data Analyst",
  "AI Tool Builder",
  "Freelancer",
];

function useTypingEffect(words) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex];
    let timeout;
    if (!deleting && charIndex < word.length) {
      timeout = setTimeout(() => setCharIndex(c => c + 1), 80);
    } else if (!deleting && charIndex === word.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex(c => c - 1), 45);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setWordIndex(i => (i + 1) % words.length);
    }
    setText(word.substring(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex, words]);

  return text;
}

function useInView(ref) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return inView;
}

function Section({ id, children, style = {}, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref);
  return (
    <section
      id={id}
      ref={ref}
      className={`page-section ${className}`.trim()}
      style={{
        padding: "100px 0",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(30px)",
        transition: "opacity 0.8s ease, transform 0.8s ease",
        position: "relative",
        ...style
      }}
    >
      {children}
    </section>
  );
}

function Container({ children, style = {}, className = "" }) {
  return (
    <div className={`container ${className}`.trim()} style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px", ...style }}>
      {children}
    </div>
  );
}

export default function Portfolio() {
  const typedText = useTypingEffect(TYPING_WORDS);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div style={{ background: COLORS.bg, minHeight: "100vh", position: "relative" }}>
      <style>{styles}</style>
      <div className="noise-bg" />

      {/* NAV */}
      <nav className="site-nav" style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        padding: "0 24px",
        background: scrolled ? "rgba(8,12,20,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? `1px solid ${COLORS.border}` : "none",
        transition: "all 0.4s ease",
        height: 64,
        display: "flex", alignItems: "center",
      }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div className="font-display" style={{ fontSize: "1.25rem", fontWeight: 800, letterSpacing: 0 }}>
            <span style={{ color: COLORS.bright }}>VV</span>
            <span style={{ color: COLORS.accent }}>.</span>
          </div>
          <div className="desktop-nav-actions" style={{ display: "flex", gap: 32, alignItems: "center" }}>
            {NAV_ITEMS.map(item => (
              <button key={item} onClick={() => scrollTo(item)} className="nav-link"
                style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "'Outfit', sans-serif" }}>
                {item}
              </button>
            ))}
            {/* ── Resume download button ── */}
            <a
              href="/Vishesh_Vishwakarma_Resume.pdf"
              download="Vishesh_Vishwakarma_Resume.pdf"
              className="btn-outline"
              style={{ padding: "8px 20px", fontSize: "0.8rem" }}
            >
              <Download size={14} /> Resume
            </a>
            <button className="btn-primary" style={{ padding: "8px 20px", fontSize: "0.8rem" }}
              onClick={() => window.open("mailto:vishesh8828@gmail.com")}>
              Hire Me
            </button>
          </div>
          <button className="menu-toggle" onClick={() => setMenuOpen(true)} style={{ display: "none", background: "none", border: "none", color: COLORS.text, cursor: "pointer" }}>
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="mobile-menu">
          <button onClick={() => setMenuOpen(false)} style={{ position: "absolute", top: 20, right: 24, background: "none", border: "none", color: COLORS.text, cursor: "pointer" }}>
            <X size={28} />
          </button>
          {NAV_ITEMS.map(item => (
            <button key={item} onClick={() => scrollTo(item)} className="font-display mobile-menu-link"
              style={{ background: "none", border: "none", color: COLORS.text, cursor: "pointer", fontSize: "2rem", fontWeight: 700 }}>
              {item}
            </button>
          ))}
          {/* ── Resume in mobile menu ── */}
          <a
            href="/Vishesh_Vishwakarma_Resume.pdf"
            download="Vishesh_Vishwakarma_Resume.pdf"
            className="font-display mobile-menu-link"
            style={{ color: COLORS.accent, fontSize: "2rem", fontWeight: 700, textDecoration: "none", display: "flex", alignItems: "center", gap: 12 }}
          >
            <Download size={28} /> Resume
          </a>
        </div>
      )}

      {/* HERO */}
      <div
        className="hero-section"
        style={{
          minHeight: "100vh",
          paddingTop: "110px",
          paddingBottom: "60px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="hero-grid" />
        {/* Glow orbs */}
        <div className="glow-orb hero-orb" style={{ width: 500, height: 500, background: "rgba(0,212,255,0.08)", top: "10%", left: "-10%" }} />
        <div className="glow-orb hero-orb" style={{ width: 400, height: 400, background: "rgba(124,58,237,0.08)", bottom: "10%", right: "-10%" }} />

        <Container style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
          {/* Description */}
          <p className="hero-copy" style={{ fontSize: "1.05rem", color: COLORS.muted, maxWidth: 600, margin: "0 auto 36px", lineHeight: 1.75, fontWeight: 300, animation: "fadeInUp 0.8s 0.2s both" }}>
            A MCA Graduate Software Engineer from Mumbai. I build <span style={{ color: COLORS.text, fontWeight: 500 }}>full-stack web applications</span> and <span style={{ color: COLORS.text, fontWeight: 500 }}>AI-powered tools</span> with React, FastAPI, and Python — focused on real-world impact and elegant engineering.
          </p>

          {/* Name — centrepiece */}
          <h1 className="font-display hero-title" style={{ fontSize: "5.5rem", fontWeight: 800, lineHeight: 1.05, letterSpacing: 0, marginBottom: 20, animation: "fadeInUp 0.8s 0.35s both" }}>
            <span style={{ color: COLORS.bright }}>Vishesh </span>
            <span className="gradient-text">Vishwakarma</span>
          </h1>

          {/* Typing role */}
          <div className="typing-role" style={{ fontSize: "1.35rem", color: COLORS.muted, marginBottom: 40, minHeight: "2em", animation: "fadeInUp 0.8s 0.5s both", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
            <span style={{ color: COLORS.text, fontWeight: 300 }}>&lt;</span>
            <span style={{ color: COLORS.accent, fontWeight: 600, fontFamily: "'Syne', sans-serif" }}>{typedText}</span>
            <span className="cursor-blink" style={{ color: COLORS.accent, fontWeight: 200 }}>|</span>
            <span style={{ color: COLORS.text, fontWeight: 300 }}>/&gt;</span>
          </div>

          <div className="hero-actions" style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginBottom: 64, animation: "fadeInUp 0.8s 0.6s both" }}>
            <button className="btn-primary" onClick={() => scrollTo("Projects")}>
              <Zap size={16} /> View Projects
            </button>
            {/* ── Resume download in hero ── */}
            <a
              href="/Vishesh_Vishwakarma_Resume.pdf"
              download="Vishesh_Vishwakarma_Resume.pdf"
              className="btn-primary"
              style={{ background: "linear-gradient(135deg, #10b981, #059669)" }}
            >
              <Download size={16} /> Download Resume
            </a>
            <button className="btn-outline" onClick={() => window.open("https://github.com/visheshvishh")}>
              <Github size={16} /> GitHub
            </button>
            <button className="btn-outline" onClick={() => window.open("https://www.linkedin.com/in/visheshvishh/")}>
              <Linkedin size={16} /> LinkedIn
            </button>
          </div>

          {/* Stats */}
          <div className="stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, maxWidth: 480, margin: "0 auto", animation: "fadeInUp 0.8s 0.8s both" }}>
            {[["2+", "Projects Live"], ["4", "Certifications"], ["8.25", "MCA CGPA"]].map(([val, label]) => (
              <div key={label} className="stat-card">
                <div className="font-display" style={{ fontSize: "2rem", fontWeight: 800, color: COLORS.accent }}>{val}</div>
                <div style={{ fontSize: "0.75rem", color: COLORS.muted, marginTop: 4, letterSpacing: 0 }}>{label}</div>
              </div>
            ))}
          </div>
        </Container>

        {/* Scroll indicator */}
        {!scrolled && (
          <div className="scroll-indicator" style={{ position: "absolute", bottom: 40, transition: "opacity 0.4s", zIndex: 2 }}>
            <span style={{ fontSize: "0.7rem", letterSpacing: 0, color: COLORS.muted, textTransform: "uppercase" }}>Scroll</span>
            <ChevronDown size={16} color={COLORS.accent} style={{ animation: "float 2s ease-in-out infinite" }} />
          </div>
        )}
      </div>

      {/* ABOUT */}
      <Section id="about">
        <Container>
          <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
            <div>
              <div className="section-label">About Me</div>
              <h2 className="font-display section-title" style={{ fontSize: "2.8rem", fontWeight: 800, letterSpacing: 0, lineHeight: 1.3, marginBottom: 24, paddingBottom: "6px" }}>
                Crafting <span className="gradient-text">Digital</span><br />Experiences
              </h2>
              <p className="section-copy" style={{ color: COLORS.muted, lineHeight: 1.9, fontSize: "1.02rem", marginBottom: 20, fontWeight: 300 }}>
                I'm Vishesh Makhan Vishwakarma, a full-stack developer and MCA student at Thakur Institute of Management Studies in Mumbai. I specialize in building production-ready web applications that blend robust backend engineering with intuitive frontend interfaces.
              </p>
              <p className="section-copy" style={{ color: COLORS.muted, lineHeight: 1.9, fontSize: "1.02rem", marginBottom: 32, fontWeight: 300 }}>
                My work spans AI-powered tools, enterprise portals, and real-world deployment — always with a focus on performance, security, and user experience. I'm passionate about solving tangible problems through clean, scalable code.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { icon: <MapPin size={15} />, val: "Santacruz East, Mumbai" },
                  { icon: <Mail size={15} />, val: "vishesh8828@gmail.com" },
                  { icon: <Phone size={15} />, val: "+91-8828060678" },
                ].map(({ icon, val }) => (
                  <div key={val} style={{ display: "flex", alignItems: "center", gap: 10, color: COLORS.muted, fontSize: "0.9rem" }}>
                    <span style={{ color: COLORS.accent }}>{icon}</span>
                    <span>{val}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="about-visual" style={{ position: "relative" }}>
              <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div className="spin-slow about-orbit" style={{
                  position: "absolute",
                  width: 320, height: 320,
                  border: "1px dashed rgba(0,212,255,0.2)",
                  borderRadius: "50%",
                }} />
                <div className="about-avatar" style={{
                  width: 240, height: 240,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, rgba(0,212,255,0.15), rgba(124,58,237,0.15))",
                  border: `2px solid ${COLORS.border}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  position: "relative", zIndex: 1,
                  fontSize: "6rem",
                  animation: "pulse-glow 3s ease-in-out infinite",
                }}>
                  <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "3rem", color: COLORS.accent }}>VV</span>
                </div>
                {/* Floating badges */}
                {[
                  { label: "React.js", color: "#61dafb", top: "5%", right: "5%" },
                  { label: "FastAPI", color: "#10b981", bottom: "15%", right: "-5%" },
                  { label: "Python", color: "#f59e0b", bottom: "5%", left: "10%" },
                  { label: "MySQL", color: "#8b5cf6", top: "20%", left: "-5%" },
                ].map(({ label, color, ...pos }) => (
                  <div key={label} className="animate-float glass tech-badge"
                    style={{ position: "absolute", ...pos, padding: "8px 14px", borderRadius: 8, fontSize: "0.78rem", fontWeight: 600, color, animationDuration: `${3 + Math.random() * 2}s` }}>
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <div className="section-divider" />

      {/* SKILLS */}
      <Section id="skills">
        <Container>
          <div className="section-header" style={{ textAlign: "center", marginBottom: 60 }}>
            <div className="section-label" style={{ justifyContent: "center" }}>Technical Arsenal</div>
            <h2 className="font-display section-title" style={{ fontSize: "2.8rem", fontWeight: 800, letterSpacing: 0 }}>
              Skills & <span className="gradient-text">Technologies</span>
            </h2>
          </div>
          <div className="skills-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {Object.entries(SKILLS).map(([category, { color, bg, border, items }]) => (
              <div key={category} className="glass-card skill-card" style={{ borderRadius: 16, padding: 28 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: color }} />
                  <span className="font-display" style={{ fontWeight: 700, fontSize: "0.95rem", color: COLORS.text, letterSpacing: 0 }}>{category}</span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {items.map(skill => (
                    <span key={skill} className="skill-pill" style={{ background: bg, borderColor: border, color }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <div className="section-divider" />

      {/* PROJECTS */}
      <Section id="projects">
        <Container>
          <div className="section-header" style={{ textAlign: "center", marginBottom: 60 }}>
            <div className="section-label" style={{ justifyContent: "center" }}>Featured Work</div>
            <h2 className="font-display section-title" style={{ fontSize: "2.8rem", fontWeight: 800, letterSpacing: 0 }}>
              Selected <span className="gradient-text">Projects</span>
            </h2>
            <p className="section-copy" style={{ color: COLORS.muted, marginTop: 12, fontWeight: 300 }}>Production-deployed applications built to solve real problems.</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {PROJECTS.map((proj, i) => (
              <div key={proj.title} className="glass-card project-card" style={{ borderRadius: 20, overflow: "hidden", display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: 320 }}>
                {/* Left: visual */}
                <div className="project-visual" style={{ background: `linear-gradient(135deg, ${proj.color}12, ${proj.color}06)`, borderRight: `1px solid ${COLORS.border}`, display: "flex", alignItems: "center", justifyContent: "center", padding: 48, position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", inset: 0, background: `radial-gradient(circle at 50% 50%, ${proj.color}18, transparent 70%)` }} />
                  <div style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
                    <div className="project-icon" style={{ fontSize: "5rem", marginBottom: 16, filter: "drop-shadow(0 0 30px " + proj.color + "60)" }}>{proj.icon}</div>
                    <div className="font-display" style={{ fontSize: "0.8rem", fontWeight: 700, color: proj.color, letterSpacing: 0, textTransform: "uppercase" }}>{proj.subtitle}</div>
                    <div style={{ marginTop: 8, fontSize: "0.75rem", color: COLORS.muted }}>{proj.date}</div>
                  </div>
                  <div style={{ position: "absolute", top: 16, left: 16, width: 40, height: 40, borderTop: `2px solid ${proj.color}40`, borderLeft: `2px solid ${proj.color}40`, borderRadius: "4px 0 0 0" }} />
                  <div style={{ position: "absolute", bottom: 16, right: 16, width: 40, height: 40, borderBottom: `2px solid ${proj.color}40`, borderRight: `2px solid ${proj.color}40`, borderRadius: "0 0 4px 0" }} />
                </div>
                {/* Right: content */}
                <div className="project-content" style={{ padding: 40 }}>
                  <h3 className="font-display project-title" style={{ fontSize: "1.5rem", fontWeight: 800, letterSpacing: 0, marginBottom: 8 }}>{proj.title}</h3>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
                    {proj.stack.map(t => <span key={t} className="project-tech">{t}</span>)}
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 24 }}>
                    {proj.features.map((f, fi) => (
                      <div key={fi} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: "0.85rem", color: COLORS.muted, lineHeight: 1.6 }}>
                        <span style={{ color: proj.color, marginTop: 2, flexShrink: 0 }}>▸</span>
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ borderRadius: 8, padding: "10px 14px", background: `${proj.color}0a`, border: `1px solid ${proj.color}20`, fontSize: "0.82rem", color: COLORS.muted, marginBottom: 24, lineHeight: 1.6 }}>
                    <span style={{ color: proj.color, fontWeight: 600 }}>Impact: </span>{proj.impact}
                  </div>
                  <div className="project-links" style={{ display: "flex", gap: 12 }}>
                    {proj.live && (
                      <button className="btn-primary" style={{ fontSize: "0.82rem", padding: "9px 18px", background: `linear-gradient(135deg, ${proj.color}, ${proj.color}99)` }}
                        onClick={() => window.open(proj.live)}>
                        <ExternalLink size={13} /> Live Demo
                      </button>
                    )}
                    {proj.github && (
                      <button className="btn-outline" style={{ fontSize: "0.82rem", padding: "8px 18px", color: proj.color, borderColor: `${proj.color}50` }}
                        onClick={() => window.open(proj.github)}>
                        <Github size={13} /> GitHub
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <div className="section-divider" />

      {/* EDUCATION */}
      <Section id="education">
        <Container>
          <div className="education-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
            <div>
              <div className="section-label">Academic Journey</div>
              <h2 className="font-display section-title" style={{ fontSize: "2.8rem", fontWeight: 800, letterSpacing: 0, marginBottom: 48 }}>
                Education <span className="gradient-text">Timeline</span>
              </h2>
              <div className="education-timeline" style={{ position: "relative", paddingLeft: 50 }}>
                <div className="timeline-line" />
                {EDUCATION.map((edu, i) => (
                  <div key={i} style={{ display: "flex", gap: 20, marginBottom: i < EDUCATION.length - 1 ? 40 : 0, position: "relative" }}>
                    <div className="education-dot-wrap" style={{ position: "absolute", left: -50 }}>
                      <div className="timeline-dot" style={{ borderColor: edu.color }}>
                        <GraduationCap size={14} color={edu.color} />
                      </div>
                    </div>
                    <div className="glass-card timeline-card" style={{ borderRadius: 12, padding: 24, flex: 1, borderLeftColor: edu.color }}>
                      <div style={{ fontSize: "0.75rem", color: edu.color, fontWeight: 600, letterSpacing: 0, marginBottom: 6 }}>{edu.year}</div>
                      <div className="font-display timeline-title" style={{ fontWeight: 700, fontSize: "1rem", marginBottom: 4 }}>{edu.degree}</div>
                      <div style={{ fontSize: "0.85rem", color: COLORS.muted, marginBottom: 8 }}>{edu.institution}</div>
                      <div style={{ display: "inline-block", padding: "3px 10px", borderRadius: 6, background: `${edu.color}15`, border: `1px solid ${edu.color}30`, fontSize: "0.78rem", color: edu.color, fontWeight: 600 }}>{edu.grade}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div id="certifications">
              <div className="section-label">Credentials</div>
              <h2 className="font-display section-title" style={{ fontSize: "2.8rem", fontWeight: 800, letterSpacing: 0, marginBottom: 48 }}>
                Certifi<span className="gradient-text">cations</span>
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {CERTIFICATIONS.map((cert, i) => (
                  <div key={i} className="cert-card glass-card" style={{ borderLeft: `3px solid ${cert.color}` }}>
                    <div className="cert-row" style={{ display: "flex", alignItems: "center", gap: 16 }}>
                      <span style={{ fontSize: "2rem" }}>{cert.icon}</span>
                      <div style={{ flex: 1 }}>
                        <div className="font-display" style={{ fontWeight: 700, fontSize: "0.95rem", marginBottom: 4 }}>{cert.title}</div>
                        <div style={{ fontSize: "0.8rem", color: COLORS.muted }}>{cert.date}</div>
                      </div>
                      <Award size={18} color={cert.color} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <div className="section-divider" />

      {/* CONTACT */}
      <Section id="contact">
        <Container>
          <div className="section-header" style={{ textAlign: "center", marginBottom: 60 }}>
            <div className="section-label" style={{ justifyContent: "center" }}>Let's Connect</div>
            <h2 className="font-display section-title" style={{ fontSize: "2.8rem", fontWeight: 800, letterSpacing: 0 }}>
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="section-copy" style={{ color: COLORS.muted, marginTop: 12, fontWeight: 300, maxWidth: 480, margin: "12px auto 0" }}>
              I'm actively looking for opportunities. Whether you have a role, a project, or just want to connect — my inbox is open.
            </p>
          </div>

          <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16, maxWidth: 900, margin: "0 auto" }}>
            {[
              { icon: <Mail size={22} />, label: "Email", val: "vishesh8828@gmail.com", link: "mailto:vishesh8828@gmail.com", color: "#00d4ff" },
              { icon: <Phone size={22} />, label: "Phone", val: "+91-8828060678", link: "tel:+918828060678", color: "#10b981" },
              { icon: <Github size={22} />, label: "GitHub", val: "github.com/visheshvishh", link: "https://github.com/visheshvishh", color: "#f59e0b" },
              { icon: <Linkedin size={22} />, label: "LinkedIn", val: "linkedin.com/in/visheshvishh", link: "https://www.linkedin.com/in/visheshvishh/", color: "#8b5cf6" },
              { icon: <MapPin size={22} />, label: "Location", val: "Santacruz, Mumbai, India", link: null, color: "#f43f5e" },
            ].map(({ icon, label, val, link, color }) => (
              <div key={label}
                className="contact-card"
                onClick={link ? () => window.open(link) : undefined}
                style={{ borderRadius: 14, padding: "22px 24px", display: "flex", gap: 16, alignItems: "center", background: "rgba(17,24,39,0.8)", border: `1px solid ${COLORS.border}`, cursor: link ? "pointer" : "default", transition: "all 0.3s" }}
                onMouseEnter={e => { if (link) { e.currentTarget.style.borderColor = color; e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = `0 12px 40px ${color}18`; }}}
                onMouseLeave={e => { e.currentTarget.style.borderColor = COLORS.border; e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}>
                <div className="contact-icon" style={{ width: 50, height: 50, borderRadius: 12, background: `${color}15`, border: `1px solid ${color}30`, display: "flex", alignItems: "center", justifyContent: "center", color, flexShrink: 0 }}>
                  {icon}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: "0.72rem", color: COLORS.muted, fontWeight: 600, letterSpacing: 0, textTransform: "uppercase", marginBottom: 4 }}>{label}</div>
                  <div className="contact-value" style={{ fontSize: "0.9rem", color: link ? color : COLORS.text, fontWeight: 500, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{val}</div>
                </div>
                {link && <ArrowUpRight size={15} color={color} style={{ flexShrink: 0 }} />}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* FOOTER */}
      <footer style={{ borderTop: `1px solid ${COLORS.border}`, padding: "32px 24px", textAlign: "center" }}>
        <div className="footer-inner" style={{ maxWidth: 1120, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <div className="font-display" style={{ fontWeight: 800, fontSize: "1.2rem" }}>
            <span style={{ color: COLORS.bright }}>VV</span><span style={{ color: COLORS.accent }}>.</span>
          </div>
          <div style={{ fontSize: "0.8rem", color: COLORS.muted }}>
            © 2026 Vishesh Vishwakarma. Built with React.
          </div>
          <div style={{ display: "flex", gap: 16 }}>
            {[
              { icon: <Github size={18} />, link: "https://github.com/visheshvishh" },
              { icon: <Linkedin size={18} />, link: "https://www.linkedin.com/in/visheshvishh/" },
              { icon: <Mail size={18} />, link: "mailto:vishesh8828@gmail.com" },
            ].map(({ icon, link }, i) => (
              <button key={i} onClick={() => window.open(link)}
                style={{ width: 36, height: 36, borderRadius: 8, border: `1px solid ${COLORS.border}`, background: "transparent", color: COLORS.muted, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.3s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = COLORS.accent; e.currentTarget.style.color = COLORS.accent; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = COLORS.border; e.currentTarget.style.color = COLORS.muted; }}>
                {icon}
              </button>
            ))}
          </div>
        </div>
      </footer>

      {/* Open to Opportunities — only on Contact section */}
      {activeSection === "Contact" && (
        <div
          className="opportunity-pill"
          style={{
            position: "fixed",
            bottom: 32,
            right: showTop ? 90 : 32,
            zIndex: 50,
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "8px 18px",
            borderRadius: 100,
            background: "rgba(8,12,20,0.9)",
            border: "1px solid rgba(0,212,255,0.35)",
            backdropFilter: "blur(12px)",
            boxShadow: "0 8px 32px rgba(0,212,255,0.15)",
            transition: "right 0.3s ease",
          }}
        >
          <span
            style={{
              width: 8, height: 8, borderRadius: "50%",
              background: "#10b981", display: "inline-block",
              animation: "pulse-glow 2s infinite", flexShrink: 0,
            }}
          />
          <span style={{ fontSize: "0.78rem", color: COLORS.accent, fontWeight: 600, letterSpacing: 0, whiteSpace: "nowrap" }}>
            Open to Opportunities
          </span>
        </div>
      )}

      {/* Back to top */}
      {showTop && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="back-top"
          style={{ position: "fixed", bottom: 32, right: 32, width: 44, height: 44, borderRadius: 10, background: COLORS.accent, color: "#000", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 50, transition: "all 0.3s", boxShadow: `0 8px 24px rgba(0,212,255,0.4)` }}>
          <ArrowUp size={18} />
        </button>
      )}
    </div>
  );
}
