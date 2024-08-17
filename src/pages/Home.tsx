import Banner from '../components/Banner'
import { Feature } from '../components/Feature'
import Footer from '../components/Footer'
import Header from '../components/Header'
import NewsLetter from '../components/NewsLetter'
import OurCompany from '../components/OurCompany'
import PartnerLogo from '../components/PartnerLogo'
import Pricetag from '../components/Pricetag'
import Services from '../components/Services'
import Slider from '../components/Slider'
import WorkSteps from '../components/WorkSteps'
import '../index.css';


const Home = () => {
  console.log(import.meta.env.VITE_REACT_WEBFORM);
  
  return (
    <>
        <Header/>
        <Banner/>
        <Slider/>
        <OurCompany/>
        <Services/>
        <WorkSteps/>
        <Feature/>
        <Pricetag/>
        <PartnerLogo/>
        <NewsLetter/>
        <Footer/>   
    </>
  )
}

export default Home