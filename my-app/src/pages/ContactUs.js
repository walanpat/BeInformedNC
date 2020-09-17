import React from "react";
import insta from "./images/insta_logo.png";
import fb from "./images/fb.png";
import mail from "./images/mail.png";

const ContactUs = () => {
  return (
    <div className="contactPage">
      <div>
        <h2 className="contactHeader">
          Are you a candidate or voter who wants to get in touch? Click below to
          get in contact with us on social media, or email us at the address
          below!
        </h2>
      </div>

      <div style={{paddingLeft: "10%"}}>
        <div>
          <img src={insta} alt="instaLogo" className="contactImage" />
          <span className="contactBody">&nbsp;Instagram:&nbsp;&nbsp;@</span>
          <a href="http://instagram.com/kingjames" className="contactLink">
            BeInformedNC
          </a>
        </div>
        <div>
          <img src={fb} alt="fbLogo" className="contactImage" />
          <span className="contactBody">&nbsp;Facebook:&nbsp;&nbsp;@</span>
          <a href="http://facebook.com/LeBron" className="contactLink">
            Be_Informed_NC
          </a>
        </div>
        <div>
          <img src={mail} alt="emailLogo" className="contactImage" />
          <span className="contactBody">&nbsp;E-mail:&nbsp;&nbsp;@</span>
          <a href="mailto:BeInformedNC@sample.com" subject="HTML link" className="contactLink">
            BeInformedNC@sample.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
