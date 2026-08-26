import {
  Code2,
  Mail,
  ArrowRight,
  Download,
  GraduationCap,
  BriefcaseBusiness,
  FolderGit2,
  Award,
  ExternalLink,
  Database,
  Trophy,
  Phone,
  MapPin,
} from "lucide-react";

import "./App.css";

function App() {
  const projects = [
    {
      title: "Learning Path Recommendation System",
      year: "2026",
      tech: [
    "React",
    "TypeScript",
    "Vite",
    "Tailwind CSS",
    "Supabase",
  ],
      description:
        "Interactive web application that provides personalized learning path recommendations and curated resources to help users build structured learning journeys.",
      github: "https://github.com/Chandrika0806/learning-path-recommendation-system",
      demo: "https://learning-path-recommendation-system.vercel.app/auth",
    },
    {
      title: "Automated News Mailer System",
      year: "2025",
      tech: [
        "Python",
        "Flask",
        "HTML",
        "CSS",
        "JavaScript",
        "Jenkins",
        "Docker",
      ],
      description:
        "Flask-based news platform integrated with NewsAPI for real-time news data, with Jenkins CI/CD and Docker containerization for automated deployment.",
      github: "https://github.com/Chandrika0806/news-mailer",
      demo: "https://news-mailer.onrender.com/",
    },
    {
      title: "Diabetes Prediction Model",
      year: "2026",
      tech: ["Python", "Machine Learning", "Streamlit", "Random Forest"],
      description:
        "AI-powered diabetes risk prediction application that uses a Random Forest machine learning model to analyze health parameters and provide risk predictions.",
      github: "https://github.com/Chandrika0806/diapredict-ai",
      demo: "https://diapredict-ai-0.streamlit.app/",
    },
  ];

  const certifications = [
    "Gen AI Summit — Microsoft",
    "Generative AI — Infosys",
    "DBMS (Intermediate) — NPTEL",
    "DSA using Java — NPTEL",
    "Cloud Computing — Infosys",
  ];

  return (
    <div className="app">
      {/* NAVBAR */}
      <nav className="navbar">
        <a href="#home" className="logo">
          Chandrika <Code2 size={25} />
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#achievements">Achievements</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main>
        {/* HERO */}
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="hello">Hello, I'm</p>

            <h1>Ravi Chandrika Narne</h1>

            <h2>CSE-DS Student | Aspiring Software Engineer</h2>

            <p className="hero-description">
              Passionate about building intelligent systems and solving
              real-world problems through code. I enjoy learning new
              technologies and building impactful software solutions.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn primary">
                View Projects <ArrowRight size={18} />
              </a>

              <a
                href="/Chandrika Resume.pdf"
                className="btn secondary"
                download
              >
                Download Resume <Download size={18} />
              </a>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/Chandrika0806"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/ravi-chandrika-narne-7bb735293/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>

              <a
                href="mailto:chandrikanarne45@gmail.com"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="glow"></div>
            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>
            <div className="code-icon">&lt;/&gt;</div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="about-section" id="about">
          <div className="section-heading">
            <p>GET TO KNOW ME</p>
            <h2>About Me</h2>
          </div>

          <div className="about-grid">
            <div className="about-text">
              <p>
                I am a Computer Science and Engineering - Data Science student
                at the Institute of Aeronautical Engineering, Hyderabad.
              </p>

              <p>
                My interests include software development, data science,
                machine learning, data visualization, and building practical
                solutions using modern technologies.
              </p>

              <div className="about-info">
                <div>
                  <GraduationCap size={22} />
                  <span>
                    <strong>Education</strong>
                    B.Tech CSE - DS
                  </span>
                </div>

                <div>
                  <MapPin size={22} />
                  <span>
                    <strong>Location</strong>
                    Hyderabad, India
                  </span>
                </div>

                <div>
                  <Mail size={22} />
                  <span>
                    <strong>Email</strong>
                    chandrikanarne45@gmail.com
                  </span>
                </div>
              </div>
            </div>

            <div className="stats-grid">
              <div className="stat-card">
                <strong>8.96</strong>
                <span>CGPA</span>
              </div>

              <div className="stat-card">
                <strong>300+</strong>
                <span>LeetCode Problems</span>
              </div>

              <div className="stat-card">
                <strong>200+</strong>
                <span>GFG Problems</span>
              </div>

              <div className="stat-card">
                <strong>2023–2027</strong>
                <span>B.Tech</span>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="skills-section" id="skills">
          <div className="section-heading light">
            <p>WHAT I WORK WITH</p>
            <h2>Technical Skills</h2>
          </div>

          <div className="skills-container">
            <div className="skills-card">
              <div className="skill-category">
                <Code2 size={25} />
                <h3>Languages</h3>
              </div>

              <div className="skill-tags">
                <span>Java</span>
                <span>Python</span>
              </div>
            </div>

            <div className="skills-card">
              <div className="skill-category">
                <Code2 size={25} />
                <h3>Web Development</h3>
              </div>

              <div className="skill-tags">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>RESTful APIs</span>
              </div>
            </div>

            <div className="skills-card">
              <div className="skill-category">
                <Database size={25} />
                <h3>Database</h3>
              </div>

              <div className="skill-tags">
                <span>MySQL</span>
              </div>
            </div>

            <div className="skills-card">
              <div className="skill-category">
                <Code2 size={25} />
                <h3>Core CS</h3>
              </div>

              <div className="skill-tags">
                <span>DSA</span>
                <span>OOP</span>
                <span>DBMS</span>
                <span>CN</span>
                <span>OS</span>
              </div>
            </div>

            <div className="skills-card">
              <div className="skill-category">
                <BriefcaseBusiness size={25} />
                <h3>Tools</h3>
              </div>

              <div className="skill-tags">
                <span>Git</span>
                <span>VS Code</span>
                <span>Power BI</span>
                <span>Microsoft Excel</span>
              </div>
            </div>

            <div className="skills-card">
              <div className="skill-category">
                <BriefcaseBusiness size={25} />
                <h3>CRM</h3>
              </div>

              <div className="skill-tags">
                <span>Salesforce</span>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="experience-section" id="experience">
          <div className="section-heading">
            <p>PROFESSIONAL EXPERIENCE</p>
            <h2>Internship</h2>
          </div>

          <div className="experience-card">
            <div className="experience-icon">
              <BriefcaseBusiness size={32} />
            </div>

            <div className="experience-content">
              <div className="experience-top">
                <div>
                  <h3>Data Visualization Intern</h3>
                  <h4>Welcome Webworks</h4>
                </div>

                <span className="date">May 2026</span>
              </div>

              <p className="location">
                <MapPin size={16} />
                Hyderabad, India
              </p>

              <ul>
                <li>
                  Designed interactive Power BI dashboards using DAX and Power
                  Query to analyze sales performance and business KPIs.
                </li>

                <li>
                  Created KPI dashboards and time-series visualizations to
                  monitor sales and profitability trends.
                </li>

                <li>
                  Delivered actionable insights through data visualization and
                  storyboard-driven analytics.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="projects-section" id="projects">
          <div className="section-heading light">
            <p>MY WORK</p>
            <h2>Featured Projects</h2>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-icon">
                  <FolderGit2 size={30} />
                </div>

                <div className="project-year">{project.year}</div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    View on GitHub <ExternalLink size={17} />
                  </a>

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link demo-link"
                    >
                      Live Demo <ExternalLink size={17} />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ACHIEVEMENTS */}
        <section className="achievements-section" id="achievements">
          <div className="section-heading">
            <p>ACHIEVEMENTS & LEARNING</p>
            <h2>Achievements & Certifications</h2>
          </div>

          <div className="achievement-grid">
            <div className="coding-card">
              <Trophy size={38} />

              <h3>Coding Profiles</h3>

              <div className="coding-stat">
                <strong>300+</strong>
                <span>Problems solved on LeetCode</span>
              </div>

              <div className="coding-stat">
                <strong>200+</strong>
                <span>Problems solved on GeeksforGeeks</span>
              </div>

              <div className="coding-stat">
                <strong>Certified</strong>
                <span>HackerRank Python Basic</span>
              </div>
            </div>

            <div className="certification-card">
              <Award size={38} />

              <h3>Certifications</h3>

              <ul>
                {certifications.map((certificate) => (
                  <li key={certificate}>{certificate}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact-section" id="contact">
          <div className="section-heading light">
            <p>LET'S CONNECT</p>
            <h2>Get In Touch</h2>
          </div>

          <p className="contact-text">
            Feel free to reach out for opportunities, collaborations, or
            interesting conversations about technology.
          </p>

          <div className="contact-cards">
            <a href="mailto:chandrikanarne45@gmail.com">
              <Mail size={25} />
              <div>
                <strong>Email</strong>
                <span>chandrikanarne45@gmail.com</span>
              </div>
            </a>

            <a href="tel:+917989841485">
              <Phone size={25} />
              <div>
                <strong>Phone</strong>
                <span>+91 7989841485</span>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/ravi-chandrika-narne-7bb735293/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="linkedin-text">in</span>

              <div>
                <strong>LinkedIn</strong>
                <span>Connect with me</span>
              </div>
            </a>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <p>© 2026 Ravi Chandrika Narne. Built with React.</p>

        <div className="footer-links">
          <a
            href="https://github.com/Chandrika0806"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/ravi-chandrika-narne-7bb735293/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a href="mailto:chandrikanarne45@gmail.com">
            <Mail size={20} />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;