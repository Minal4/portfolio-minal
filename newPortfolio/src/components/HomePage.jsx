import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function HomePage() {
  return (
      <div className="App">
        <Header />
        <main className='main'>
          <Outlet />
        </main>
        <Footer />
      </div>      
  );
};
