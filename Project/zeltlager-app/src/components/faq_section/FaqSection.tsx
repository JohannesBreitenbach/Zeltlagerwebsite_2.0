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
      question: "Für wen ist das Zeltlager?",
      answer:
        "Das Zeltlager richtet sich an Kinder zwischen 9 und 14 Jahren, die gerne eine Woche mit Freunden in der Natur verbringen und dabei viel Spaß haben möchten.",
      open: false,
    },
    {
      question: "Wie kann ich mich anmelden?",
      //TODO: Falls Anmeldung online möglich, hier ändern
      answer:
        "Einfach den Anmeldungsbogen runterladen, ausfüllen und per Email an info.ulferzeltlager@web.de schicken.",
      open: false,
    },
    {
      question: "Bis wann muss ich mich anmelden?",
      answer:
        "Die Anmeldefrist für das Zeltlager 2024 ist der 24.06.2024, es kann jedoch sein dass bis dahin schon alle Plätze ausgebucht sind. Deshalb gilt, je früher desto besser!",
      open: false,
    },
    {
      question: "Was kostet das Zeltlager?",
      answer:
        "Für das erste Kind einer Familie beträgt die Teilnahmegebühr 95€, für jedes weitere Kind sind es 90€.",
      open: false,
    },
    {
      question: "Was ist in der Teilnahmegebühr enthalten?",
      answer:
        "Hin- und Rückfahrt von den Stadtwerken Aschaffenburg zum Zeltpatz, Frühstück, Mittag- und Abendessen, Tee und Leitungswasser und jsjsjsjsjjshsjsjdkwksdk.",
      open: false,
    },
    {
      question: "Wie bezahle ich die Teilnahmegebühr?",
      answer:
        "Einfach auf folgendes Konto Überweisen: \n \n IBAN: DE63 7955 0000 0008 0568 63 \n BIC: BYLADEM1ASA \n (Kontoinhaber: Kath. Kirchenstiftung ULF)",
      open: false,
    },
  ]);

  return (
    <div id="faq-section">
      <h1 className="p-2 pb-0">Häufig gestellte Fragen:</h1>
      <div id="faq-accordion-container" className="faqs accordion w-100">
        {faqs.map((faq, index) => (
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={"#collapse" + index}
                aria-expanded="false"
                aria-controls={"collapse" + index}
              >
                {faq.question}
              </button>
            </h2>
            <div
              id={"collapse" + index}
              className="accordion-collapse collapse"
              data-bs-parent="#faq-accordion-container"
            >
              <div className="accordion-body">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FaqSection;
