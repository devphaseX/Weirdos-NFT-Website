import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import About from '../components/sections/About';
import Faq from '../components/sections/Faq';
import RoadMap from '../components/sections/RoadMap';
import ShowCase from '../components/sections/ShowCase';
import Team from '../components/sections/Team';
import Heroes from '../components/_home/Heroes';
import '../styles/pages/home/index.css';

export default function Home() {
  return (
    <div>
      <Navigation />
      <Heroes />
      <About />
      <RoadMap />
      <ShowCase />
      <Team />
      <Faq />
      <Footer />
    </div>
  );
}
