import "./skills.css";

export const Skills = () => {
  return (
    <section id="my-skills-section" className="my-skills">
      <div className="content-title">
        <div>WHAT I AM</div>
        <div>Specialized in</div>
      </div>
      <div className="skills-list">
        <div className="skill">
          <div className="skill-logo">
            <img src="images/skills/html.svg" />
          </div>
          <div className="skill-name">HTML</div>
        </div>
        <div className="skill">
          <div className="skill-logo">
            <img src="images/skills/css.svg" />
          </div>
          <div className="skill-name">CSS</div>
        </div>
        <div className="skill">
          <div className="skill-logo">
            <img src="images/skills/git.svg" />
            <img src="images/skills/github.svg" />
          </div>
          <div className="skill-name">Git/Github</div>
        </div>
        <div className="skill">
          <div className="skill-logo">
            <img src="images/skills/react.svg" />
          </div>
          <div className="skill-name">React</div>
        </div>
        <div className="skill">
          <div className="skill-logo">
            <img src="images/skills/nodeJs.svg" />
          </div>
          <div className="skill-name">Node.js</div>
        </div>
        <div className="skill">
          <div className="skill-logo">
            <img src="images/skills/mySQL.svg" />
            <img src="images/skills/mongoDB.svg" />
          </div>
          <div className="skill-name">mySQL/mongoDB</div>
        </div>
      </div>
    </section>
  );
};
