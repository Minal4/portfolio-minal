import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';


export default function Accordion({ item }) {

  const [active, setActive] = useState(false);
  
  return (
    <div className="faq__accordion">
      <h3 onClick={() => setActive(!active)}>
        {item.question}{' '}
        <span>{active ? <FaChevronUp /> : <FaChevronDown />}</span>
      </h3>
      {active && <p className={active ? 'active' : ''}>{item.answer}</p>}
    </div>
  );
};
