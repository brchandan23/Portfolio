import { useState, useEffect, useRef } from 'react'
import profileImg from './assets/profile.jpg'



/* ===== ANIMATED BACKGROUND ===== */
function AnimatedBackground() {
    return (
        <div className="animated-bg">
            <div className="orb" />
            <div className="orb" />
            <div className="orb" />
            <div className="grid-overlay" />
        </div>
    )
}

/* ===== PAGE LOADER ===== */
function PageLoader({ hidden }) {
    return (
        <div className={`page-loader ${hidden ? 'hidden' : ''}`}>
            <div className="loader-content">
                <div className="loader-logo">Compiling creativity…</div>
                <br />
                 <div className="loader-logo">Initializing portfolio…</div>
                 <br />
                  <div className="loader-logo">Welcome to my world</div>
                <div className="loader-bar">
                    <div className="loader-bar-fill" />
                </div>
            </div>
        </div>
    )
}

/* ===== NAVBAR ===== */
function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handler)
        return () => window.removeEventListener('scroll', handler)
    }, [])

    const handleNav = (e, id) => {
        e.preventDefault()
        setMenuOpen(false)
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <div className="navbar-logo" onClick={(e) => handleNav(e, 'hero')}>
                    Chandan B R
                </div>
                <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
                    <a href="#about" onClick={(e) => handleNav(e, 'about')}>About</a>
                    <a href="#projects" onClick={(e) => handleNav(e, 'projects')}>Projects</a>
                    <a href="#skills" onClick={(e) => handleNav(e, 'skills')}>Skills</a>

                    <a href="#contact" className="navbar-cta" onClick={(e) => handleNav(e, 'contact')}>Let's Talk</a>
                </div>
                <button
                    className={`menu-toggle ${menuOpen ? 'active' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span /><span /><span />
                </button>
            </div>
        </nav>
    )
}

/* ===== HERO SECTION ===== */
function Hero() {
    return (
        <section className="hero" id="hero">
            <div className="floating-shapes">
                <div className="floating-shape" />
                <div className="floating-shape" />
                <div className="floating-shape" />
                <div className="floating-shape" />
            </div>
            <div className="hero-content">
                <div className="hero-badge">
                    <span className="dot" />
                    Available for opportunities
                </div>
                <h1 className="hero-title">
                    <span className="line">
                        <span className="line-inner">Hi, I'm</span>
                    </span>
                    <span className="line">
                        <span className="line-inner gradient-text">Chandan B R</span>
                    </span>
                    <span className="line">
                        <span className="line-inner">Full-Stack Developer</span>
                    </span>
                </h1>
                <p className="hero-subtitle">
                    Crafting scalable, high-performance web applications with modern technologies.
                    Passionate about clean code, intuitive user experiences, and turning ideas into reality.
                </p>
                <div className="hero-buttons">
                    <a href="#projects" className="btn-primary" onClick={(e) => {
                        e.preventDefault()
                        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                    }}>
                        View My Work
                    </a>
                    <a href="#contact" className="btn-secondary" onClick={(e) => {
                        e.preventDefault()
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                    }}>
                        Get In Touch
                    </a>
                </div>
            </div>
            <div className="hero-scroll-indicator">
                <span>Scroll</span>
                <div className="scroll-line" />
            </div>
        </section>
    )
}

/* ===== ABOUT SECTION ===== */
function About() {
    return (
        <section className="about section" id="about">
            <div className="container">
                <div className="about-grid">
                    <div className="about-image-wrapper reveal">
                        <img src={profileImg} alt="Chandan B R" className="about-image" />
                    </div>
                    <div className="about-content">
                        <p className="section-label reveal">About Me</p>
                        <h2 className="section-title reveal reveal-delay-1">
                            Building digital experiences<br />that make a difference
                        </h2>
                        <p className="about-text reveal reveal-delay-2">
                            I'm a Full-Stack Developer skilled in Java, JavaScript, React, Node.js, Express.js,
                            and MongoDB, with hands-on experience building scalable MERN applications. I'm
                            passionate about API development, authentication systems, cloud integrations, and
                            database optimization.
                        </p>
                        <p className="about-text reveal reveal-delay-3">
                            Currently pursuing my M.C.A at Ramaiah Institute of Technology, Bengaluru, I'm
                            dedicated to contributing high-quality, maintainable software solutions that solve
                            real-world problems.
                        </p>
                        <div className="about-stats reveal reveal-delay-4">
                            <div className="stat-card">
                                <div className="stat-number">3+</div>
                                <div className="stat-label">Projects Built</div>
                            </div>
                            <div className="stat-card">
                                <div className="stat-number">8.9</div>
                                <div className="stat-label">MCA CGPA</div>
                            </div>
                            <div className="stat-card">
                                <div className="stat-number">5+</div>
                                <div className="stat-label">Technologies</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

/* ===== PROJECTS SECTION ===== */
const projects = [
    {
        num: '01',
        title: 'BookYourStay',
        subtitle: 'Full-Stack Property Listing Application',
        description:
            'A comprehensive MERN application enabling property listings, bookings, user accounts, and review management with scalable RESTful APIs, robust authentication, and optimized database queries.',
        tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Cloudinary', 'Mapbox', 'Docker', 'JWT'],
        github: 'https://github.com/brchandan23/BookYourStay.git',
        // live: '#',
    },
    {
        num: '02',
        title: 'ApnaGit VCS',
        subtitle: 'Repository & Version Control Application',
        description:
            'A GitHub-like application with user authentication, custom version control system supporting Git-style commands (init, add, commit, push, pull, revert), and AWS S3 integration for commit data storage.',
        tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'AWS S3', 'JWT', 'bcrypt.js', 'Vite'],
        github: 'https://github.com/brchandan23/ApnaGit-VCS.git',
        // live: '#',
    },
    {
        num: '03',
        title: 'Weather App',
        subtitle: 'Real-Time Weather Application',
        description:
            'A beautiful weather application featuring real-time data via OpenWeatherMap API, animated gradient backgrounds, glassmorphism design, dark/light mode toggle, smart weather tips, and UV/wind details — all packed in a stunning React + Material UI interface.',
        tech: ['React.js', 'Vite', 'Material UI', 'OpenWeatherMap API', 'CSS3', 'Context API'],
        github: 'https://github.com/brchandan23/Weather-App.git',
        // live: '#',
    },
]

function Projects() {
    return (
        <section className="projects section" id="projects">
            <div className="container">
                <div className="section-header">
                    <p className="section-label reveal">Portfolio</p>
                    <h2 className="section-title reveal reveal-delay-1">Featured Projects</h2>
                    <p className="section-subtitle reveal reveal-delay-2">
                        A showcase of applications I've built with modern technologies and best practices
                    </p>
                </div>
                <div className="projects-grid">
                    {projects.map((proj, i) => (
                        <div className={`project-card reveal reveal-delay-${i + 1}`} key={proj.num}>
                            <div className="project-card-header">
                                <span className="project-number">{proj.num}</span>
                                <div className="project-links">
                                    {proj.github && (
                                        <a href={proj.github} target="_blank" rel="noopener noreferrer" className="project-link" title="GitHub">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                            </svg>
                                        </a>
                                    )}
                                    {proj.live && (
                                        <a href={proj.live} target="_blank" rel="noopener noreferrer" className="project-link" title="Live Demo">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                                <polyline points="15 3 21 3 21 9" />
                                                <line x1="10" y1="14" x2="21" y2="3" />
                                            </svg>
                                        </a>
                                    )}
                                </div>
                            </div>
                            <div className="project-card-body">
                                <h3 className="project-title">{proj.title}</h3>
                                <p style={{ color: 'var(--accent-1)', fontSize: '0.85rem', marginBottom: '12px', fontWeight: 500 }}>
                                    {proj.subtitle}
                                </p>
                                <p className="project-description">{proj.description}</p>
                                <div className="project-tech">
                                    {proj.tech.map((t) => (
                                        <span className="tech-tag" key={t}>{t}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

/* ===== SKILLS SECTION ===== */
const skillData = [
    {
        icon: '⚡',
        title: 'Frontend',
        skills: [
            { name: 'React.js', pct: 88 },
            { name: 'JavaScript', pct: 90 },
            { name: 'HTML5 / CSS3', pct: 92 },
        ],
    },
    {
        icon: '🔧',
        title: 'Backend',
        skills: [
            { name: 'Node.js', pct: 85 },
            { name: 'Express.js', pct: 87 },
            { name: 'Core Java', pct: 80 },
        ],
    },
    {
        icon: '🗄️',
        title: 'Databases',
        skills: [
            { name: 'MongoDB', pct: 85 },
            { name: 'Mongoose', pct: 83 },
            { name: 'MySQL', pct: 75 },
        ],
    },
    {
        icon: '🛠️',
        title: 'Tools & DevOps',
        skills: [
            { name: 'Git / GitHub', pct: 90 },
            { name: 'Docker', pct: 72 },
            { name: 'AWS S3', pct: 70 },
        ],
    },
]

function Skills() {
    const sectionRef = useRef(null)
    const [animated, setAnimated] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !animated) {
                    setAnimated(true)
                }
            },
            { threshold: 0.3 }
        )
        if (sectionRef.current) observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [animated])

    return (
        <section className="skills section" id="skills" ref={sectionRef}>
            <div className="container">
                <div className="section-header">
                    <p className="section-label reveal">Expertise</p>
                    <h2 className="section-title reveal reveal-delay-1">Skills & Technologies</h2>
                    <p className="section-subtitle reveal reveal-delay-2">
                        Technologies I work with to build modern, scalable applications
                    </p>
                </div>
                <div className="skills-categories">
                    {skillData.map((cat, ci) => (
                        <div className={`skill-category reveal reveal-delay-${ci + 1}`} key={cat.title}>
                            <div className="skill-category-icon">{cat.icon}</div>
                            <h3 className="skill-category-title">{cat.title}</h3>
                            <div className="skill-list">
                                {cat.skills.map((skill) => (
                                    <div className="skill-item" key={skill.name}>
                                        <span className="skill-name">{skill.name}</span>
                                        <div className="skill-bar-track">
                                            <div
                                                className={`skill-bar-fill ${animated ? 'animate' : ''}`}
                                                style={{ width: `${skill.pct}%` }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

/* ===== TESTIMONIALS SECTION ===== */
const testimonials = [
    {
        text: "Chandan demonstrated exceptional problem-solving skills and consistently delivered high-quality code. His ability to simplify complex technical challenges is remarkable.",
        name: 'Prof. Ananya S.',
        role: 'Faculty, Ramaiah Institute of Technology',
        initials: 'AS',
    },
    {
        text: "Working with Chandan on the MERN stack projects was a great experience. His attention to detail and willingness to go the extra mile set him apart from other developers.",
        name: 'Rakesh M.',
        role: 'Team Lead, Academic Project',
        initials: 'RM',
    },
    {
        text: "Chandan adapts to new technologies incredibly fast. His BookYourStay project showcased real-world application architecture skills that are well beyond his academic level.",
        name: 'Dr. Preethi K.',
        role: 'Project Guide, BITS Hi-Tech College',
        initials: 'PK',
    },
]

function Testimonials() {
    return (
        <section className="testimonials section" id="testimonials">
            <div className="container">
                <div className="section-header">
                    <p className="section-label reveal">Testimonials</p>
                    <h2 className="section-title reveal reveal-delay-1">What People Say</h2>
                    <p className="section-subtitle reveal reveal-delay-2">
                        Kind words from mentors and collaborators I've worked with
                    </p>
                </div>
                <div className="testimonial-slider">
                    {testimonials.map((t, i) => (
                        <div className={`testimonial-card reveal reveal-delay-${i + 1}`} key={i}>
                            <div className="testimonial-quote">"</div>
                            <p className="testimonial-text">{t.text}</p>
                            <div className="testimonial-author">
                                <div className="testimonial-avatar">{t.initials}</div>
                                <div>
                                    <div className="testimonial-author-name">{t.name}</div>
                                    <div className="testimonial-author-role">{t.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

/* ===== CONTACT SECTION ===== */
function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 3000)
        setFormData({ name: '', email: '', subject: '', message: '' })
    }

    return (
        <section className="contact section" id="contact">
            <div className="container">
                <div className="section-header">
                    <p className="section-label reveal">Contact</p>
                    <h2 className="section-title reveal reveal-delay-1">Let's Work Together</h2>
                    <p className="section-subtitle reveal reveal-delay-2">
                        Have a project in mind or just want to chat? I'd love to hear from you.
                    </p>
                </div>
                <div className="contact-grid">
                    <div className="contact-info reveal">
                        <h3>Get in touch</h3>
                        <p>
                            I'm currently open to new opportunities, freelance projects, and collaborations.
                            Whether you have a question or just want to say hi, my inbox is always open.
                        </p>
                        <div className="contact-details">
                            <div className="contact-detail-item">
                                <div className="contact-detail-icon">📧</div>
                                <div className="contact-detail-text">
                                    <span>Email</span>
                                    chandan23br@gmail.com
                                </div>
                            </div>
                            <div className="contact-detail-item">
                                <div className="contact-detail-icon">📱</div>
                                <div className="contact-detail-text">
                                    <span>Phone</span>
                                    +91 9071152113
                                </div>
                            </div>
                            <div className="contact-detail-item">
                                <div className="contact-detail-icon">📍</div>
                                <div className="contact-detail-text">
                                    <span>Location</span>
                                    Bengaluru, India
                                </div>
                            </div>
                        </div>
                        <div className="social-links">
                            <a href="https://github.com/brchandan23" target="_blank" rel="noopener noreferrer" className="social-link" title="GitHub">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                            <a href="mailto:chandan23br@gmail.com" className="social-link" title="Email">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="2" y="4" width="20" height="16" rx="2" />
                                    <path d="M22 7l-10 6L2 7" />
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/in/chandan-b-r-3a98b6267/" target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="contact-form-wrapper reveal reveal-delay-2">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Your name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="your@email.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    placeholder="Project inquiry"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Tell me about your project..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn-submit">
                                {submitted ? '✓ Message Sent!' : 'Send Message →'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

/* ===== FOOTER ===== */
function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <p className="footer-text">
                    © 2026 <span className="gradient-text">Chandan B R</span>. Built with passion & React.
                </p>
                <div className="footer-links">
                    <a href="#about" onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }) }}>About</a>
                    <a href="#projects" onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}>Projects</a>
                    <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}>Contact</a>
                </div>
            </div>
        </footer>
    )
}

/* ===== MAIN APP ===== */
function App() {
    const [loaded, setLoaded] = useState(false)

    // Page loader
    useEffect(() => {
        const timer = setTimeout(() => setLoaded(true), 1800)
        return () => clearTimeout(timer)
    }, [])

    // Scroll-triggered reveal animations
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible')
                    }
                })
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        )

        const elements = document.querySelectorAll('.reveal')
        elements.forEach((el) => observer.observe(el))

        return () => observer.disconnect()
    }, [loaded])

    return (
        <>
            <PageLoader hidden={loaded} />
            <AnimatedBackground />
            <Navbar />
            <main>
                <Hero />
                <About />
                <Projects />
                <Skills />
                <Contact />
            </main>
            <Footer />
        </>
    )
}

export default App
