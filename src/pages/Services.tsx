import Footer from "../components/Footer"
import Header from "../components/Header"
import ITSolution from "../components/ITSolution"
import NewsLetter from "../components/NewsLetter"
import PartnerLogo from "../components/PartnerLogo"




const Services = () => {
  return (
    <div>
        <Header/>
        <section>
            <div className="bg-bgColor">
                <div className="mx-auto max-w-screen px-4 py-24">
                    <div className="">
                        <h1 className="text-6xl text-center font-semibold text-primaryColor">IT Services</h1>
                        <h2 className="mt-4 text-black text-xl text-center ">Home / Services </h2>
                    </div>
                </div>
                
            </div>
            <ITSolution/>
        </section>
        <PartnerLogo/>
        <NewsLetter/>
        <Footer/>
    </div>
  )
}

export default Services