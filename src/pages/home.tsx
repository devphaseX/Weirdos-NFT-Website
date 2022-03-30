import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import About from '../components/_home/sections/About';
import Faq from '../components/_home/sections/Faq';
import RoadMap from '../components/_home/sections/RoadMap';
import ShowCase from '../components/_home/sections/ShowCase';
import Team from '../components/_home/sections/Team';
import Heroes from '../components/_home/sections/Heroes';

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
