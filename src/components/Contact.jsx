import { useState } from "react";
import Button from "./Button";

export default function Contact() {
  const [error, setError] = useState(false);
  const [check, setCheck] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  })

  const handleOnChange = (e, i) => {
    const { name, value } = e.target;
    setCheck({ ...check, [name]: value });
  }

  const handleOnClick = (e) => {
    e.preventDefault();
    if (check.firstName === '') {
      setError(true)
    } else {
      setError(false)
    }
    if (check.lastName === '') {
      setError(true)
    } else {
      setError(false)
    }
  }


  return (
    <section className="contact section">
      <div className="contact-map">
        <div className="contact__image">
          <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2972.5525317097995!2d85.34735313226298!3d27.62511685466785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb172e79b37167%3A0x45a12c11b0a4ee33!2sThaiba%2C%2044700!5e0!3m2!1sen!2snp!4v1672304676623!5m2!1sen!2snp" width="100%" height="100%" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      <div className="container">
        <div className="inner-container">
          <div className="contact-form">
            <div className="section__heading">
              <h2 className="section-title">Contact</h2>
              <p>Any Questions or Remarks? Just write us a message.</p>
            </div>

            <div>
              <form onSubmit={(e) => handleOnClick(e)}>
                <div className="input-row">
                  <div className="input-group">
                    <label>First Name</label>
                    <input type="text" name="firstName" value={check.firstName} required onChange={(e) => handleOnChange(e)} />
                    {error && <div className="error">Field Required</div>}
                  </div>
                  <div className="input-group">
                    <label>Last Name</label>
                    <input type="text" name="lastName" value={check.lastName} required onChange={(e) => handleOnChange(e)} />
                    {/* {error && <div className="error">Field Required</div>} */}

                  </div>
                </div>
                <div className="input-group">
                  <label>Email</label>
                  <input type="email" name="email" value={check.email} required onChange={(e) => handleOnChange(e)} />
                  {/* {error && <div className="error">Field Required</div>} */}
                </div>
                <div className="input-group">
                  <label>Message</label>
                  <textarea name="message" value={check.message} required onChange={(e) => handleOnChange(e)} />
                  {/* {error && <div className="error">Field Required</div>} */}

                </div>
                <div className="btn">
                  <Button type="button" title='Submit' />
                </div>
              </form>
            </div>

          </div>
        </div>
      </div >
    </section >
  );
};
