import { useState } from 'react';
import Accordion from './Accordion';

import Progress from './Progress';

export default function Faq() {
  const questions = [
    {
      question: 'Fully Customizable Design & Layout',
      answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      question: 'Fluid, Responsive & Ratina Ready',
      answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      question: 'Seo Optimized & Valid Code',
      answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
  ];

  const [active, setActive] = useState(0);

  const clickHandler = (i) => {
    if (active === i) {
      setActive('0')
    }
    setActive(i)
  }

  return (
    <section className="faq section">
      <div className="container">
        <div className='section__heading sub-title text-left'>
          <p>I MAKE THE FUTURE</p>
          <h2 className='section-title'>I Develop & <span className='highlight'>Create</span> Digital Future.</h2>
          <p>ellentesque magna magna semper dapibus felis necatin aliuen risus. Pellentesque habitant morbi senectus dictum.</p>
        </div>
        <div className="inner-container">
          <div className="faq-content">
            <div className="faq__accordion">
              {questions.map((item, index) => <Accordion key={index} item={item} index={index} onToggle={() => clickHandler(index)} active={active} />)}
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
