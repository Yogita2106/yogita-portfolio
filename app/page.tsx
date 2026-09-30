import Hero from "../components/Hero";
import SectionHeading from "../components/SectionHeading";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import { Reveal } from "../components/Reveal";
import { skillGroups, experience } from "../data/portfolio";

export default function Home() {
  return (
    <main>
      <Hero />

      <section className="section about-section" id="about">
        <div className="container">
          <SectionHeading
            number="01"
            eyebrow="ABOUT ME"
            title="Developer mindset, product thinking."
            description="I enjoy moving across the stack — from interfaces and APIs to databases, deployment and mobile experiences."
          />

          <div className="about-grid">
            <Reveal>
              <div className="about-copy">
                <p>
                  I&apos;m <strong>Yogita Gupta</strong>, a Computer Science Engineering
                  undergraduate with a <strong>9.74/10 CGPA</strong>, focused on building
                  practical software with modern web and mobile technologies.
                </p>
                <p>
                  My core web stack includes React.js, Next.js, TypeScript, Node.js,
                  Express.js and MongoDB. I also work with REST APIs, JWT
                  authentication and real-time communication using Socket.io.
                </p>
                <p>
                  Through Android development experience with Flutter and Dart,
                  I&apos;ve also worked on cross-platform mobile applications and
                  product UI.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="stats-panel">
                <div className="stat">
                  <strong>9.74</strong>
                  <span>CGPA / 10</span>
                </div>
                <div className="stat">
                  <strong>GitHub</strong>
                  <span>@Yogita2106</span>
                </div>
                <div className="stat">
                  <strong>Full Stack</strong>
                  <span>Web + APIs + DB</span>
                </div>
                <div className="stat">
                  <strong>Flutter</strong>
                  <span>Mobile development</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section skills-section" id="skills">
        <div className="container">
          <SectionHeading
            number="02"
            eyebrow="TECH STACK"
            title="Tools I use to turn ideas into products."
          />

          <div className="skills-grid">
            {skillGroups.map((group, index) => (
              <Reveal key={group.label} delay={index * 0.05}>
                <article className="skill-card">
                  <span className="skill-number">0{index + 1}</span>
                  <h3>{group.label}</h3>
                  <div className="tag-list">
                    {group.items.map((item) => <span key={item}>{item}</span>)}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Projects />

      <section className="section experience-section" id="experience">
        <div className="container">
          <SectionHeading
            number="04"
            eyebrow="EXPERIENCE"
            title="Professional experience."
          />

          <Reveal>
            <article className="experience-card">
              <div className="experience-date">{experience.period}</div>
              <div className="experience-main">
                <p className="experience-company">{experience.company}</p>
                <h3>{experience.role}</h3>
                <p className="experience-description">
                  Contributed to live Android application projects in a professional
                  team environment using Flutter and Dart.
                </p>
                <ul className="highlight-list">
                  {experience.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
                <div className="tag-list">
                  {experience.stack.map((item) => <span key={item}>{item}</span>)}
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="section education-section" id="education">
        <div className="container">
          <SectionHeading
            number="05"
            eyebrow="EDUCATION"
            title="Computer Science foundation."
          />
          <Reveal>
            <div className="education-card">
              <div>
                <p className="eyebrow">B.TECH • COMPUTER SCIENCE ENGINEERING</p>
                <h3>Modern Institute of Technology &amp; Research Centre</h3>
                <p>Alwar, Rajasthan · Expected June 2027</p>
              </div>
              <div className="education-score">
                <strong>9.74</strong>
                <span>/ 10.0 CGPA</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Contact />

      <footer className="footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} Yogita Gupta</span>
          <span>Built with Next.js &amp; TypeScript</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
