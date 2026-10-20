import SiteHeader from '../components/SiteHeader.jsx';
import HeroVideo from '../components/HeroVideo.jsx';
import Hero from '../components/Hero.jsx';
import Results from '../components/Results.jsx';
import Services from '../components/Services.jsx';
import ProductsShowcase from '../components/ProductsShowcase.jsx';
import Process from '../components/Process.jsx';
import Brands from '../components/Brands.jsx';
import Testimonials from '../components/Testimonials.jsx';
import About from '../components/About.jsx';
import SiteFooter from '../components/SiteFooter.jsx';

export default function Home() {
  return (
    <>
      <SiteHeader />
      <div className="hero-wrap">
        <HeroVideo start="showroom" />
        <Hero />
      </div>
      <main>
        <Services />
        <ProductsShowcase />
        <Results />
        <Process />
        <Brands />
        <Testimonials />
        <About />
      </main>
      <SiteFooter variant="dark" />
    </>
  );
}
