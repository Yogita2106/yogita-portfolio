"use client";

import { useState } from "react";
import { projects } from "../data/portfolio";
import { ArrowUpRightIcon, GithubIcon, ExternalIcon } from "./Icons";
import { Reveal } from "./Reveal";

export default function Projects() {
  const [filter, setFilter] = useState<"All" | "Full Stack" | "Mobile">("All");
  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <Reveal>
          <div className="projects-head">
            <div>
              <p className="eyebrow">SELECTED WORK</p>
              <h2>Projects that show how I build.</h2>
            </div>
            <div className="filters">
              {(["All", "Full Stack", "Mobile"] as const).map((item) => (
                <button
                  key={item}
                  className={filter === item ? "active" : ""}
                  onClick={() => setFilter(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="projects-grid">
          {visible.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.06} className={project.featured ? "project-card featured" : "project-card"}>
              <div className="project-top">
                <span className="project-index">0{index + 1}</span>
                <span className="project-category">{project.category}</span>
                <span className="project-year">{project.year}</span>
              </div>

              <div className="project-visual">
                <div className="visual-lines" />
                <div className="visual-window">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="visual-title">{project.title}</div>
              </div>

              <div className="project-content">
                <div className="project-title-row">
                  <h3>{project.title}</h3>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`}>
                      <ExternalIcon />
                    </a>
                  )}
                </div>
                <p>{project.description}</p>

                <div className="tag-list">
                  {project.tech.map((tech) => <span key={tech}>{tech}</span>)}
                </div>

                <ul className="highlight-list">
                  {project.highlights.slice(0, 3).map((item) => <li key={item}>{item}</li>)}
                </ul>

                <div className="project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer">
                      <GithubIcon /> GitHub <ArrowUpRightIcon />
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer">
                      Live <ArrowUpRightIcon />
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
