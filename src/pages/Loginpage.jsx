import { Navbar } from '../components';
import LoginSection from '../components/LoginSection';
import Footer from '../components/Footer';

function LoginPage() {
  return (
    <div className='relative z-0 bg-primary'>
      <div className='bg-cover bg-no-repeat bg-center'>
        <Navbar />
        <LoginSection />
        <Footer />
      </div>
    </div>
  );
}

export default LoginPage;