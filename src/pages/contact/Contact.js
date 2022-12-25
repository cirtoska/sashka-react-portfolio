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
      <main class="contact">
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
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  className="input-field"
                  required
                />
                <label htmlFor="name"></label>

                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="input-field"
                  required
                />
                <label htmlFor="email"></label>

                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  className="input-field"
                />
                <label htmlFor="subject"></label>
                <label htmlFor="message">
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Message"
                    className="textarea"
                  ></textarea>
                </label>

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
