import { ErrorMessage, Field, Form, Formik } from "formik";
import Button from "./Button";
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import * as Yup from 'yup';

export default function Contact() {
  const form = useRef();
  const validationSchema = Yup.object().shape({
    name: Yup.string().min(2).required("max 2 character"),
    email: Yup.string().email().required('Invalid email')
  })

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
              <Formik
                initialValues={{
                  name: '',
                  lastName: '',
                  email: '',
                  message: ''
                }
                }
                validationSchema={validationSchema}

                onSubmit={(values) => {

                  emailjs.send('service_yegsmuy', 'template_n0f5tem', values, 'Bq4MAsmGLD2kcfgxB')
                    .then((result) => {
                      console.log('asd');
                    }, (error) => {
                      console.log(error.text);
                    });
                }}

              >
                {({
                  handleSubmit,
                  handleChange,
                  values,
                  errors,
                  touched,
                  isValid,
                  handleBlur,
                }) => (
                  < Form ref={form}>
                    <div className="input-row">
                      <div className="input-group">
                        <label>First Name</label>
                        <Field style={{ borderColor: `${errors.name ? " red" : " #e6e6e6  "}` }} type="text" name="name" />
                        <ErrorMessage name="name" component="div" />
                      </div>
                      <div className="input-group">
                        <label>Last Name</label>
                        <Field type="text" name="lastName" />
                        <ErrorMessage name="lastName" component="div" />
                      </div>
                    </div>
                    <div className="input-group">
                      <label>Email</label>
                      <Field style={{ borderColor: `${errors.email ? "red" : " #e6e6e6  "}` }} type="text" name="email" />
                      <ErrorMessage name="email" component="div" />


                    </div>
                    <div className="input-group">
                      <label>Message</label>
                      <Field name="message" />
                      <ErrorMessage name="message" component="div" />

                    </div>
                    <div className="btn">
                      <Button type='submit' title='Submit' disabled={!isValid} />
                    </div>
                  </Form>
                )}
              </Formik>
            </div>

          </div>
        </div>
      </div >
    </section >
  );
};
