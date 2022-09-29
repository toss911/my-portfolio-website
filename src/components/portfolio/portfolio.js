import "./portfolio.css";

export const Portfolio = () => {
  return (
    <section id="my-portfolio-section" className="my-portfolio">
      <div className="content-title">
        <div>MY PORTFOLIO</div>
        <div>Recent Works</div>
      </div>
      <div className="portfolio-list">
        <div className="portfolio">
          <div className="portfolio-header">
            <div className="portfolio-icon">
              <img src="images/portfolio/agency-logo.svg" width="50px" />
            </div>
            <div className="portfolio-name">Agency</div>
          </div>
          <div className="circle-1"></div>
          <div className="circle-2"></div>
          <div className="webpage-example">
            <img src="images/portfolio/digital-agency.jpg" />
          </div>
        </div>
        <div className="portfolio">
          <div className="portfolio-header">
            <div className="portfolio-icon">
              <img src="images/portfolio/edTech-logo.svg" width="50px" />
            </div>
            <div className="portfolio-name">BeatsLearning</div>
          </div>
          <div className="circle-1"></div>
          <div className="circle-2"></div>
          <div className="webpage-example">
            <img src="images/portfolio/edTech.svg" />
          </div>
        </div>
        <div className="portfolio">
          <div className="portfolio-header">
            <div className="portfolio-icon">
              <img src="images/portfolio/e-commerce-logo.svg" width="50px" />
            </div>
            <div className="portfolio-name">E-Commerce</div>
          </div>
          <div className="circle-1"></div>
          <div className="circle-2"></div>
          <div className="webpage-example">
            <img src="images/portfolio/e-commerce.svg" />
          </div>
        </div>
      </div>
    </section>
  );
};
