import "./about-me.css";

export const AboutMe = () => {
  return (
    <section id="about-me-section" className="about-me">
      <div className="infographic">
        <div className="hollow-circle">
          <div className="rectangular">
            <div>
              <img src="images/about-me/structured-thinking.svg" width="50px" />
            </div>
            <p>Structured Thinking</p>
          </div>
          <div className="rectangular">
            <div>
              <img src="images/about-me/communication.svg" width="50px" />
            </div>
            <p>Communication</p>
          </div>
          <div className="rectangular">
            <div>
              <img src="images/about-me/bulb.svg" width="50px" />
            </div>
            <p>Problem-solving</p>
          </div>
          <div className="rectangular">
            <div>
              <img src="images/about-me/growth.svg" width="50px" />
            </div>
            <p>Growth Mindset</p>
          </div>
        </div>
      </div>
      <div className="icon">
        <img
          src="images/about-me/saly-10.png"
          alt="A man sitting in front of a laptop"
          width="420px"
        />
      </div>
      <div className="content">
        <div className="content-name">ABOUT ME</div>
        <div className="current-role">Software Developer</div>
        <br />
        <div className="self-introduction">
          My name is Tossaporn Udomsap. I graduated with a bachelor's degree in
          Mechanical Engineering from KMUTT in 2021. After graduation, I worked
          at the float glass manufacturer as a Process Engineer for 6 months.
          <br />
          Then, I transitioned from manufacturing field to software development
          by enrolling in TechUp; which is a Full-stack software developer
          bootcamp based in Thailand. I am seeking a job in the Full-stack
          software developer role.
        </div>
        <br />
        <div className="my-hobby">My Hobby</div>
        <div className="hobby-list">
          <div>
            <img
              src="images/about-me/clapper-board.svg"
              alt="clapper board icon"
            />
            <p>Movies/TV series</p>
          </div>
          <div>
            <img src="images/about-me/train.svg" alt="train icon" />
            <p>Travel</p>
          </div>
        </div>
      </div>
    </section>
  );
};
