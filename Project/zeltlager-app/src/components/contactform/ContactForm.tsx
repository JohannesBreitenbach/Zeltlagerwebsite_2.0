import React from "react";
import "./contactform.scss";
import FormCard from "./FormCard";
import FaqSection from "../faq_section/FaqSection";

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
            <div className="col-12 contact-form-container p-5">
              <FormCard />
            </div>
          </div>
        </div>
      </div>
      <FaqSection />
    </>
  );
}

export default ContactForm;
