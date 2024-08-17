import { Link } from "react-router-dom"


const OurCompany = () => {
  return (
    <section className="relative w-full bg-white">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8 lg:py-32">
        <div className="flex flex-col justify-center px-4 py-24 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
          
          <h4 className=" text-lg font-bold text-[#94a3b8]">Our Company</h4>
          <h1 className="text-3xl font-semibold tracking-tight text-black md:text-4xl lg:leading-tight lg:text-5xl">
            We’ve been triumphing <br /> all these <span className="text-accentColor">15 years</span>. <br /> Sacrifices are made up with success.
          </h1>

          <p className="mt-8 text-lg text-textColor">
          Profonet takes into consideration every little detail to make sure the system run smoothly and responsively. Profonet employs a new technique called Minified Technology for securing customers’ database & building up highly confidential firewalls.
          </p>
          <Link to="/about"  className="mt-8 rounded-md text-center bg-secondaryColor py-3 text-sm font-semibold text-bgColor w-32 shadow-sm hover:bg-accentColor focus-visible:outline-2 focus-visible:outline-black">About Us</Link>

        </div>
        
        <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">

            <div className="hidden lg:grid grid-cols-4 gap-4">
                <div className="col-start-1">
                    <img
                        className="motion-safe:animate-bounce-slow mt-5 aspect-[3/2] object-contain lg:aspect-[4/3] lg:h-[100px] xl:aspect-[16/9] "
                        src="/P1.jpg"
                        alt=""
                    />
                </div>
                <div className="col-start-4">
                    <img
                        className="motion-safe:animate-bounce-slow mt-5 aspect-[3/2] object-contain lg:aspect-[4/3] lg:h-[100px] xl:aspect-[16/9] "
                        src="/P2.jpg"
                        alt=""
                    />
                </div>
                
            </div>
            <div className="grid items-center grid-cols-subgrid gap-4 col-span-2">
                <img
                    className=" aspect-[3/2] object-cover lg:aspect-[4/3] lg:h-[400px] xl:aspect-[16/9] "
                    src="/P3.jpg"
                    alt=""
                />
            </div>
            
            <div className="hidden lg:grid grid-cols-4 gap-4">
                <div className="col-start-1">
                    <img
                        className="motion-safe:animate-bounce-slow mt-5 aspect-[3/2] object-contain lg:aspect-[4/3] lg:h-[100px] xl:aspect-[16/9] "
                        src="/P4.jpg"
                        alt=""
                    />
                </div>
                <div className="col-start-4">
                    <img
                        className="motion-safe:animate-bounce-slow mt-5 aspect-[3/2] object-contain lg:aspect-[4/3] lg:h-[100px] xl:aspect-[16/9] "
                        src="/P5.jpg"
                        alt=""
                    />
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default OurCompany