import React from "react";
import "./contactform.scss";
import FormCard from "./FormCard";

function ContactForm() {
  return (
    <>
      <div id="contactComponent">
        <section
          id="intro"
          className="bg-image position-fixed top-0 start-0 z-n1"
        >
          <div className="mask"></div>
        </section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="contact-form-container">
                <FormCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactForm;
