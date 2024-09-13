import { useState } from 'react';
import Accordion from './Accordion';

import Progress from './Progress';

export default function Faq() {
  const questions = [
    {
      question: 'Fully Customizable Design & Layout',
      answer: "Lead the development of custom WordPress themes, utilizing a combination of HTML, CSS, and JavaScript to create visually appealing and responsive user interfaces",
    },
    {
      question: 'Fluid, Responsive & Browser Compatibility',
      answer: "I specialize in creating fluid, responsive websites with seamless cross-browser and device compatibility, ensuring optimal performance and a consistent user experience across all platforms",
    },
    {
      question: 'Seo Optimized & Valid Code',
      answer: "I specialize in creating SEO-optimized, valid code to build fast, responsive, and accessible websites that deliver optimal user experiences.",
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
          <p>WE MAKE THE FUTURE</p>
          <h2 className='section-title'>I Develop & <span className='highlight'>Create</span> Digital Future.</h2>
          {/* <p>ellentesque magna magna semper dapibus felis necatin aliuen risus. Pellentesque habitant morbi senectus dictum.</p> */}
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
