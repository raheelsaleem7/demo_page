import './App.css';
import AboutUs from './Components/AboutUs/AboutUs';
import Footer from './Components/Footer/Footer';
import Fractional from './Components/FractionalInvesting/Fractional';
import Investers from './Components/TopInvesters/Investers';

function App() {
  return (
    <div>
      <Fractional />
      <Investers />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
