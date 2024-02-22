import Hero from './Hero';
import Faq from './Faq';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Client from './Client';
import Video from './Video';

export default function HomePage() {

  return (
    <main className='main'>
      {/* <FormField /> */}
      <Hero />
      <Portfolio />
      <Client />
      <Faq />
      <Video />
      <Contact />
    </main>
  );
};
