import Layout from './components/Layout';
import Hero from './components/Hero';
import FestivalInfo from './components/FestivalInfo';
import CountDown from './components/CountDown';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <FestivalInfo />
      <CountDown />
    </Layout>
  );
}
