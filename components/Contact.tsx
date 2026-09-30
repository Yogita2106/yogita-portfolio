import { ArrowUpRightIcon, GithubIcon, LinkedinIcon, MailIcon } from "./Icons";
import { Reveal } from "./Reveal";

export default function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <Reveal>
          <div className="contact-card">
            <div>
              <p className="eyebrow">LET&apos;S CONNECT</p>
              <h2>Have a project or opportunity in mind?</h2>
              <p>
                I&apos;m open to internships, development opportunities and
                collaborations where I can build useful products and keep growing.
              </p>
            </div>

            <a className="contact-email" href="mailto:ygguptaalwar@gmail.com">
              <MailIcon />
              ygguptaalwar@gmail.com
              <ArrowUpRightIcon />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="contact-links">
            <a href="https://github.com/Yogita2106" target="_blank" rel="noreferrer">
              <GithubIcon /> GitHub
            </a>
            <a href="https://linkedin.com/in/yogitagupta21" target="_blank" rel="noreferrer">
              <LinkedinIcon /> LinkedIn
            </a>
            <a href="mailto:ygguptaalwar@gmail.com">
              <MailIcon /> Email
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
