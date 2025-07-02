import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FestivalInfo from './components/FestivalInfo';
import CountDown from './components/CountDown';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <FestivalInfo />
      <CountDown />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
