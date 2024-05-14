import { useState } from "react";
import "./faqsection.scss";
import FaqSingle from "./FaqSingle";
/*
function FaqSection() {
  return (
    <div id="faq-section">
      <h1>FAQ Section</h1>
      <div className="accordion w-80" id="basicAccordion">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              data-mdb-button-init
              data-mdb-collapse-init
              className="accordion-button collapsed"
              type="button"
              data-mdb-target="#basicAccordionCollapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              Question #1
            </button>
          </h2>
          <div
            id="basicAccordionCollapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-mdb-parent="#basicAccordion"
          >
            <div className="accordion-body">
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              data-mdb-button-init
              data-mdb-collapse-init
              className="accordion-button collapsed"
              type="button"
              data-mdb-target="#basicAccordionCollapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Question #2
            </button>
          </h2>
          <div
            id="basicAccordionCollapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-mdb-parent="#basicAccordion"
          >
            <div className="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              data-mdb-button-init
              data-mdb-collapse-init
              className="accordion-button collapsed"
              type="button"
              data-mdb-target="#basicAccordionCollapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Question #3
            </button>
          </h2>
          <div
            id="basicAccordionCollapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-mdb-parent="#basicAccordion"
          >
            <div className="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
*/

function FaqSection() {
  const [faqs, setFaqs] = useState([
    {
      question: "How many programmers does it take to screw a lightbulb?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra lorem eu dolor rhoncus, at scelerisque ligula gravida. Sed porta id mi sit amet convallis. Etiam iaculis massa sit amet lacus blandit sodales. Nulla ultrices velit a diam placerat congue. Pellentesque iaculis, ipsum quis eleifend dapibus, est dui eleifend ante, quis fermentum mi ligula quis nisl. Ut et ex dui. Integer id venenatis quam.",
      open: true,
    },
    {
      question: "Who is the most awesome person?",
      answer: "You! The viewer!",
      open: false,
    },
    {
      question:
        "How many questions does it take to makes a succesful FAQ Page?",
      answer: "This many!",
      open: false,
    },
    {
      question: "How many programmers does it take to screw a lightbulb?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra lorem eu dolor rhoncus, at scelerisque ligula gravida. Sed porta id mi sit amet convallis. Etiam iaculis massa sit amet lacus blandit sodales. Nulla ultrices velit a diam placerat congue. Pellentesque iaculis, ipsum quis eleifend dapibus, est dui eleifend ante, quis fermentum mi ligula quis nisl. Ut et ex dui. Integer id venenatis quam.",
      open: false,
    },
    {
      question: "Who is the most awesome person?",
      answer: "You! The viewer!",
      open: false,
    },
    {
      question:
        "How many questions does it take to makes a succesful FAQ Page?",
      answer: "This many!",
      open: false,
    },
  ]);

  const toggleFAQ = (index: number) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <div id="faq-section">
      <div className="faqs">
        {faqs.map((faq, index) => (
          <FaqSingle
            faq={faq}
            index={index}
            key={index}
            toggleFAQ={toggleFAQ}
          />
        ))}
      </div>
    </div>
  );
}

export default FaqSection;
