import './Contact.css';
import fb_icon from '../../assets/ct-1.webp';
import zalo_icon from '../../assets/ct-2.webp';
import mail_icon from '../../assets/ct-1.svg';
import phone_icon from '../../assets/ct-2.svg';
import address_icon from '../../assets/ct-3.svg';

const Contact = () => {
  return (
    <div className="ct sc-pd">
      <div className="container">
        <div className="ct-side row">
          <div className="ct-left col col-6" data-aos="fade-up">
            <div className="ct-left-inner">
              <div className="sec-heading">
                <h2 className="heading">CONTACT US</h2>
              </div>
              <div className="ct-social">
                <a 
                  className="ct-social-link facebook" 
                  href="https://www.facebook.com/cinestarcinemasvietnam" 
                  target="_blank" 
                  rel="noreferrer"
                >
                  <img src={fb_icon} alt="Facebook Icon" />
                  <span className="txt">FACEBOOK</span>
                </a>
                <a 
                  className="ct-social-link zalo" 
                  href="https://zalo.me/2861828859391058401" 
                  target="_blank" 
                  rel="noreferrer"
                >
                  <img src={zalo_icon} alt="Zalo Icon" />
                  <span className="txt">ZALO CHAT</span>
                </a>
              </div>
            </div>
          </div>
          <div className="ct-right col col-6" data-aos="fade-up">
            <div className="ct-box">
              <h3 className="heading">CONTACT INFORMATION</h3>
              <ul className="ct-tt">
                <li>
                  <img src={mail_icon} alt="Mail Icon" />
                  <a href="mailto:marketing.cinestar@gmail.com">marketing.cinestar@gmail.com</a>
                </li>
                <li>
                  <img src={phone_icon} alt="Phone Icon" />
                  <a href="tel:028 7300 8881">028 7300 8881</a>
                </li>
                <li>
                  <img src={address_icon} alt="Address Icon" />
                  <a href="https://maps.app.goo.gl/RYfzjhyyw7vn7PuV8" target="_blank" rel="noreferrer">
                    135 Hai Bà Trưng, Ben Nghe Ward, District 1, HCMC
                  </a>
                </li>
              </ul>
              <div className="ct-form">
                <form>
                  <div className="f-list row">
                    <div className="f-item col">
                      <label className="re-label"></label>
                      <div className="w-full relative mb-input undefined">
                        <input className="re-input" type="text" name="" required placeholder="Full Name" />
                      </div>
                    </div>
                    <div className="f-item col">
                      <label className="re-label"></label>
                      <div className="w-full relative mb-input undefined">
                        <input className="re-input" type="email" name="" required placeholder="Enter Email" />
                      </div>
                    </div>
                    <div className="f-item col">
                      <label className="re-label"></label>
                      <textarea className="re-input" name="" cols="30" rows="10" required placeholder="Contact Information or Feedback"></textarea>
                    </div>
                  </div>
                  <button className="btn btn--pri btn-pad-2" type="submit">
                    <span className="txt">SEND NOW</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
