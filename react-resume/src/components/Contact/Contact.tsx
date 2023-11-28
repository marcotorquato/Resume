import './Contact.css'
import { Icon } from '@iconify/react';

export function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Contact</h2>
        </div>

        <div className="row mt-1">
          <div className="col-lg-4">
            <div className="info">
              <div className="address">
                <i><Icon icon="bi:geo-alt-fill" /></i>
                <h4>Location:</h4>
                <p>Genova, Italy</p>
              </div>

              <div className="email">
                <i><Icon icon="line-md:email" /></i>
                <h4>Email:</h4>
                <p>contact@marcotorquato.com</p>
              </div>

              <div className="phone">
              <i><Icon icon="bi:phone" /></i>
                <h4>Call:</h4>
                <p>+39 371 5782684</p>
              </div>
            </div>
          </div>

          <div className="col-lg-8 mt-5 mt-lg-0">
            <form
              action="https://formsubmit.co/marcotorquato97@gmail.com"
              method="POST"
              role="form"
              className="php-email-form"
            >
              <input type="hidden" name="_captcha" value="true" />
              <div className="row">
                <div className="col-md-6 form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  required
                />
              </div>

              <input 
              type="hidden" 
              name="_next" 
              value="https://marcotorquato.com/pomotimer.html"
              />

              <input 
              type="hidden" 
              name="_autoresponse" 
              value="Hello, I received your email! I will get in touch with you as soon as possible!"
              />

              <div className="form-group mt-3">
                <textarea
                  className="form-control"
                  name="message"
                  rows={5}
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">
                  Your message has been sent. Thank you!
                </div>
              </div>
              <div className="text-center">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
