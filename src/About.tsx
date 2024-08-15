import Footer from "./components/Footer"
import Header from "./components/Header"
import NewsLetter from "./components/NewsLetter"
import PartnerLogo from "./components/PartnerLogo"


const About = () => {
  return (
    <>
        <Header/>
        <section>
            <div className="bg-bgColor">
                <div className="mx-auto max-w-screen px-4 py-24">
                    <div className="">
                        <h1 className="text-6xl text-center font-semibold text-primaryColor">About Us</h1>
                        <h2 className="mt-4 text-black text-xl text-center ">Home / About us </h2>
                    </div>
                </div>  
            </div>

            <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                <div className="mx-auto max-w-7xl ltr:sm:text-left rtl:sm:text-right">
                    <div className="grid grid-cols-1 gap-x-12 lg:grid-cols-2">
                        <div className="py-8">
                            <h2 className="py-8 text-2xl font-bold text-gray-900 md:text-4xl">
                                What We are providing you
                            </h2>

                            <p className=" text-xl text-start leading-8 lg:leading-loose  text-gray-500">
                                Profonet Solutions is an organization that provides cost-effective system integration solutions in the field of Information Technology (IT). With our experienced and qualified team of professionals we provide best-in-class designs with next-generation technologies to support your business IT needs. In addition, we also provide Facility Management Services (FMS), Remote Infrastructure Management (RIM) and Annual Maintenance Contract (AMC) services. Profonet Solutions ensures the customers in providing highly reliable quality services and consistent customer satisfaction. Our well versatile professional customer care team assures that the customer needs are understood and the services provided have reached their expectations.
                            </p>
                        </div>
                        <img
                            alt=""
                            src="https://images.unsplash.com/photo-1464582883107-8adf2dca8a9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                            className="h-56 w-full object-cover sm:h-full"
                        />
                    </div>

                    <div className="py-8">
                        <h2 className="py-8 text-2xl font-bold text-gray-900 md:text-4xl">
                            Why are you select Profonet Solutions
                        </h2>

                        <p className=" text-xl text-start leading-8 lg:leading-loose  text-gray-500">
                            Our collaborative style of working encourages active involvement of client at every stage of the product life cycle through its inception, design and development to implementation with the help of certified professionals. Our cost efficient approach coupled with early adoption of leading edge yet effective technologies help us deliver quick-to-market solutions that drive up the bottom-line of our customers. Profonet Solutions by your side generates endless possibilities for the future of your organization products or services.
                        </p>
                        <img
                            alt=""
                            src="/image.jpg"
                            className="py-5 h-56 w-full object-cover sm:h-full"
                        />
                    </div>

                </div>
            </div>

        </section>
        <PartnerLogo/>
        <NewsLetter/>
        <Footer/>
    </>
  )
}

export default About