import { useRef } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';


export default function Accordion({ item, index, onToggle, active }) {

  const answerHeight = useRef(null)
  return (
    <div className="faq__accordion">
      <h3 onClick={onToggle}>
        {item.question}{' '}
        <span>{active === index ? <FaChevronUp /> : <FaChevronDown />}</span>
      </h3>
      <p className={`answer ${active === index ? 'active' : ''}`}>{item.answer}</p>
    </div>
  );
};
