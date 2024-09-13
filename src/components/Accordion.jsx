import { FaChevronDown, FaChevronUp } from 'react-icons/fa';


export default function Accordion({ item, index, onToggle, active }) {
  const activeColor = {
    color: 'var(--color-light)',
    backgroundColor: 'var(--background-hover-button)'
  }
  return (
    <div className="faq__accordion">
      <h3 onClick={onToggle} style={active === index ? activeColor : {}}>
        {item.question}{' '}
        <span>{active === index ? <FaChevronUp /> : <FaChevronDown />}</span>
      </h3>
      <p className={`answer ${active === index ? 'active' : ''}`}>{item.answer}</p>
    </div >
  );
};
