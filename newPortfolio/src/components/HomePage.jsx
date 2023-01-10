import Hero from './Hero';
import Faq from './Faq';
import Portfolio from './Portfolio';
import Contact from './Contact';

export default function HomePage() {
  return (
      <div className="App">
          <main className='main'>
            <Hero/>
            <Portfolio/>
            <Faq/>
            <Contact/>
          </main>
      </div>
  );
};
