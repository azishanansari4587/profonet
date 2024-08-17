import { Link } from "react-router-dom"



const Banner = () => {
  return (

    <section className="relative w-full bg-primaryColor">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8 lg:py-32">
        <div className="flex flex-col justify-center px-4 py-24 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
          
          <h1 className="mt-8 text-3xl font-bold tracking-tight text-bgColor md:text-4xl lg:text-6xl">
            People who care about your growth
          </h1>

          <p className="mt-8 text-lg text-bgColor">
            IT innovation and committed in providing clients with the latest and greatest IT solutions.
          </p>
          <Link  to='/getStarted' className="mt-8 rounded-md bg-secondaryColor text-center py-3 text-sm font-semibold text-bgColor w-32 shadow-sm hover:bg-accentColor focus-visible:outline-2 focus-visible:outline-black"> Get Started</Link>

        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
          <img
            className="animate-bounce-slow aspect-[3/2] object-contain lg:aspect-[4/3] lg:h-[500px] xl:aspect-[16/9] "
            src="/cs4.png"
            alt=""
          />
        </div>
      </div>
    </section>
  )
}

export default Banner