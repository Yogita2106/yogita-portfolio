"use client";

import { motion } from "motion/react";
import { ArrowDownIcon, ArrowUpRightIcon, GithubIcon, LinkedinIcon } from "./Icons";

export default function Hero() {
  return (
    <section className="hero section" id="top">
      <div className="hero-grid" />
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      <div className="container hero-inner">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow"><span /> FULL STACK DEVELOPER • FLUTTER</p>

          <h1>
            I build digital
            <span className="gradient-text"> products </span>
            that feel right.
          </h1>

          <p className="hero-description">
            I&apos;m Yogita Gupta — a Computer Science Engineering undergraduate and
            developer building full-stack web applications, real-time systems and
            Flutter-based mobile experiences.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              Explore my work <ArrowUpRightIcon />
            </a>
            <a className="button button-ghost" href="/resume/Yogita_Gupta_Resume.pdf" download>
              Download Resume
            </a>
          </div>

          <div className="social-row">
            <a href="https://github.com/Yogita2106" target="_blank" rel="noreferrer" aria-label="GitHub">
              <GithubIcon />
            </a>
            <a href="https://linkedin.com/in/yogitagupta21" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedinIcon />
            </a>
            <a href="mailto:ygguptaalwar@gmail.com" aria-label="Email">
              <span className="social-letter">@</span>
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-card-wrap"
          initial={{ opacity: 0, scale: 0.94, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero-card">
            <div className="profile-head">
              <div
                className="profile-avatar"
                role="img"
                aria-label="Yogita Gupta GitHub profile picture"
              />
              <div className="profile-info">
                <strong>Yogita Gupta</strong>
                <span>@Yogita2106 · GitHub</span>
              </div>
              <a
                className="profile-github"
                href="https://github.com/Yogita2106"
                target="_blank"
                rel="noreferrer"
                aria-label="Open Yogita's GitHub profile"
              >
                <GithubIcon />
              </a>
            </div>

            <div className="profile-meta">
              <span><b>9.74</b> CGPA</span>
              <span><b>Next.js</b> Web</span>
              <span><b>Flutter</b> Mobile</span>
            </div>

            <div className="code-top">
              <div className="window-dots"><i /><i /><i /></div>
              <span>developer.ts</span>
              <span>•••</span>
            </div>

            <div className="code-body">
              <div><span className="code-num">01</span><span className="code-purple">const</span> <span className="code-blue">developer</span> = {'{'}</div>
              <div><span className="code-num">02</span>&nbsp;&nbsp;role: <span className="code-green">&quot;Full Stack Developer&quot;</span>,</div>
              <div><span className="code-num">03</span>&nbsp;&nbsp;frontend: <span className="code-green">&quot;Next.js + React&quot;</span>,</div>
              <div><span className="code-num">04</span>&nbsp;&nbsp;backend: <span className="code-green">&quot;Node.js + MongoDB&quot;</span>,</div>
              <div><span className="code-num">05</span>&nbsp;&nbsp;mobile: <span className="code-green">&quot;Flutter + Dart&quot;</span>,</div>
              <div><span className="code-num">06</span>&nbsp;&nbsp;focus: <span className="code-green">&quot;Practical products&quot;</span></div>
              <div><span className="code-num">07</span>{'}'};</div>
            </div>

            <div className="hero-status">
              <span className="status-dot" />
              Building across web, APIs &amp; mobile
            </div>
          </div>
        </motion.div>
      </div>

      <a className="scroll-hint" href="#about">
        <span>SCROLL TO EXPLORE</span>
        <ArrowDownIcon />
      </a>
    </section>
  );
}
