import React from "react";
import "./contactform.css";
import FormCard from "./FormCard";

function ContactForm() {
  return (
    <>
      <header>
        <section>
          <div id="intro" className="bg-image">
            <div className="mask">
              <div className="container d-flex justify-content-center h-100">
                <div className="row">
                  <div className="col-12">
                    <FormCard />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>
    </>
  );
}

export default ContactForm;
