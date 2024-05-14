import "./faqsingle.scss";

interface FaqSingleParams {
  faq: { question: string; answer: string; open: boolean };
  index: number;
  toggleFAQ: (index: number) => void;
}

function FaqSingle({ faq, index, toggleFAQ }: FaqSingleParams) {
  return (
    <div
      className={"faq " + (faq.open ? "open" : "")}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div className="faq-question">{faq.question}</div>
      <div className="faq-answer">{faq.answer}</div>
    </div>
  );
}

export default FaqSingle;
