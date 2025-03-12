import { Navbar } from '../components';
import RegisterSection from '../components/RegisterSection';
import Footer from '../components/Footer';
import StarsCanvas from '../components/canvas/Stars';

function RegisterPage() {
  return (
    <div className='relative z-0 bg-primary'>
      <div className='bg-cover bg-no-repeat bg-center'>
        <Navbar />
        <RegisterSection />
        <Footer />
      </div>
    </div>
  );
}

export default RegisterPage;