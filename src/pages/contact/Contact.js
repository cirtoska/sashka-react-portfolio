import React from "react";
import Footer from "../../layout/footer/Footer";
import Navbar from "../../layout/navbar/Navbar";

import mobile from "../../assets/images/icons/mobile.png";
import mail from "../../assets/images/icons/mail-color.png";
import location from "../../assets/images/icons/location-color.png";

import "./Contact.scss";

const Contact = () => {
  return (
    <>
      <main className="contact">
        <Navbar />
        <div className="container">
          <div className="title">
            <h2>Contact Me</h2>
            <div className="underline"></div>
          </div>
          <h3>
            I'm interested in freelance opportunities - especialy ambicious or
            large projects. However, if you have any other request or question,
            don't hesitate to use the form.
          </h3>
          <section className="content">
            <article className="basic-contact">
              <div className="contactItem">
                <img src={mobile} alt="mobile icon" />
                <a href="tel:+38978294523">+38978294523</a>
              </div>
              <div className="contactItem">
                <img src={mail} alt="mail icon" />
                <a href="mailto:cirtoska@gmail.com">cirtoska@gmail.com</a>
              </div>
              <div className="contactItem">
                <img src={location} alt="location icon" />
                <span>Prilep, Macedonia</span>
              </div>
            </article>
            <article className="contact-form">
              <form
                action="https://formsubmit.co/598dde396fbcf6fc09490ab6f858613c"
                method="POST"
                id="contact"
              >
                <div className="field-holder">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="input-field"
                    required
                  />
                  <label htmlFor="name" className="active-label">
                    Name *
                  </label>
                </div>
                <div className="field-holder">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="input-field"
                    required
                  />
                  <label htmlFor="email" className="active-label">
                    Email *
                  </label>
                </div>
                <div className="field-holder">
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    className="input-field"
                    required
                  />
                  <label htmlFor="subject" className="active-label">
                    Subject *
                  </label>
                </div>
                <div className="field-holder">
                  <textarea
                    name="message"
                    id="message"
                    className="textarea"
                    required
                  ></textarea>
                  <label htmlFor="message" className="active-label">
                    Message *
                  </label>
                </div>
                <button className="btn-submit" type="submit">
                  Send Message!
                </button>
              </form>
            </article>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
