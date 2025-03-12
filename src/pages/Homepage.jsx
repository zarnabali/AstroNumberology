import { About, Contact, Hero, Navbar, StarsCanvas} from '../components';
import ChartSection from '../components/Chart';
import FAQSection from '../components/FAQs';
import Footer from '../components/Footer';
import CustomSetion from '../components/CustomSetion';
// Remove BrowserRouter import as it's not needed here

function Homepage() {
  return (
    // Remove the BrowserRouter wrapper
    <div className='relative z-0 bg-primary'>
      <div className='bg-cover bg-no-repeat bg-center'>
        <Navbar/>
        <Hero/>
        <About/>
        <ChartSection />
        <CustomSetion />
        <div className='relative z-0'>
          <Contact/>
          <StarsCanvas/>
        </div>
        <FAQSection/>
        <Footer />
      </div>
    </div>
  )
}

export default Homepage