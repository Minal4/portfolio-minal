import Accordion from './Accordion';
import Progress from './Progress';

export default function Faq() {
  const questions = [
    {
      question: 'Fully Customizable Design & Layout',
      answer: 'The services we offer and involve preparing a financial plan or rendering financial consultation for client based on the client’s financial goals  and objectives asdas.',
    },
    {
      question: 'Fluid, Responsive & Ratina Ready',
      answer: 'The services we offer and involve preparing a financial plan or rendering financial consultation for client based on the client’s financial goals  and objectives asdas.',
    },
    {
      question: 'Seo Optimized & Valid Code',
      answer: 'The services we offer and involve preparing a financial plan or rendering financial consultation for client based on the client’s financial goals  and objectives asdas.',
    },
  ];

  return (
    <section className="faq section">
      <div className="container">
        <div className="section__heading">
          <h2>FAQ</h2>
        </div>
        <div className="inner-container">
          <div className="faq-content">
            <div className="faq__accordion">
              {questions.map((item, index) => <Accordion key={index} item={item} />)}
            </div>
          </div>
          <div className="progress">
            <Progress />
          </div>
        </div>
      </div>
    </section>
  );
};
