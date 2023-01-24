import Hero from './Hero';
import Faq from './Faq';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Client from './Client';
import Video from './Video';

export default function HomePage() {

  return (
    <div className="App">
      <main className='main'>
        <Hero />
        <Video />
        <Portfolio />
        <Client />
        <Faq />
        <Contact />
      </main>
    </div>
  );
};
