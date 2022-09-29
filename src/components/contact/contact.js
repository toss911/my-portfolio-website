import "./contact.css";

export const Contact = () => {
  return (
    <section id="contact-me-section" className="contact-me">
      <div className="content-title">
        <div>CONTACT ME</div>
        <div>Get In Touch</div>
      </div>
      <div className="contact">
        <div className="contact-info">
          <div className="circle-1"></div>
          <div className="circle-2"></div>
          <div className="contact-info-header">Contact Information</div>
          <div className="contact-intro">
            If you are interested in my work, please feel free to contact me.
            I'd love to hear from you!
          </div>
          <div className="contact-name">
            <div className="icon">
              <img src="images/contact/account-icon.svg" />
            </div>
            <div className="name">Tossaporn Udomsap</div>
          </div>
          <div className="contact-number">
            <div className="icon">
              <img src="images/contact/call-icon.svg" />
            </div>
            <div className="number">+66 99-440-2211</div>
          </div>
          <div className="contact-email">
            <div className="icon">
              <img src="images/contact/message-icon.svg" />
            </div>
            <div className="email">tossaporn.udom@gmail.com</div>
          </div>
          <div className="contact-social-network">
            <div className="github">
              <a href="https://github.com/toss911">
                <img src="images/contact/github-icon.svg" width="50px" />
              </a>
            </div>
            <div className="linkedin">
              <a href="https://www.linkedin.com/in/tossaporn-udomsap-0aa48a13b">
                <img src="images/contact/linkedIn-icon.svg" width="50px" />
              </a>
            </div>
            <div className="facebook">
              <a href="https://www.facebook.com/toss11/">
                <img src="images/contact/facebook-icon.svg" width="50px" />
              </a>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <form
            onSubmit={() =>
              alert(
                `Thank you for your message! I will contact you back shortly.`
              )
            }
          >
            <label>
              Name
              <input
                type="text"
                placeholder="Your name"
                id="send-message-form"
              />
            </label>
            <label>
              Email
              <input type="email" placeholder="Your email" />
            </label>
            <label>
              Message
              <input type="text" placeholder="Your message" />
            </label>
            <div>
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
