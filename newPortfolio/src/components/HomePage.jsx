import Hero from './Hero';
import Faq from './Faq';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Client from './Client';

export default function HomePage() {
  var body = document.body;
  const newCursor = document.createElement('div');
  newCursor.setAttribute('class', 'cursor');
  body.appendChild(newCursor)

  window.addEventListener("scroll", scrollCursor);
  // RESIZE FUNCTION
  window.addEventListener("resize", scrollCursor);

  // // LOAD FUNCTION
  window.addEventListener("load", scrollCursor);

  function scrollCursor() {
    let circle = document.querySelector('.cursor');
    let link = document.querySelectorAll('a,button');

    const onMouseMove = (e) => {
      const y = e.pageY;
      const x = e.pageX;
      const scrollLeft = (window.pageXOffset !== undefined) ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft;
      const scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
      circle.style.left = x - scrollLeft + 'px';
      circle.style.top = y - scrollTop + 'px';
    }
    body.addEventListener('mousemove', onMouseMove);
    link.forEach((item) => {
      item.addEventListener('mouseenter', function () {
        circle.style.scale = 4;
        circle.style.transition = '0.5s cubic-bezier(0.19, 0.59, 0.31, 0.71) 0s';
      })

      item.addEventListener('mouseleave', function () {
        circle.style.scale = 1;
        circle.style.transition = '0.2s cubic-bezier(0.19, 0.59, 0.31, 0.71) 0s';
      })
    })
  }

  return (
    <div className="App">
      <main className='main'>
        <Hero />
        <Portfolio />
        <Client />
        <Faq />
        <Contact />
      </main>
    </div>
  );
};
