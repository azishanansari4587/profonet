import { ArrowRight } from "lucide-react"


const WorkSteps = () => {
  return (
    <>
        <section className="bg-white">
            <div className="mx-auto max-w-7xl px-4 py-24">
                <div>
                    <h3 className="text-lg text-[#94a3b8] font-bold tracking-widest leading-loose py-2 uppercase">How we works</h3>
                    <div className="flex items-center justify-between">
                        <h2 className="text-3xl font-semibold tracking-wide leading-loose lg:text-5xl">How Profonet assist <span className="text-accentColor block py-1">your business</span></h2>
                        <h2 className="text-9xl text-[#ffedd5] text-pretty text-justify font-bold ">04</h2>
                    </div>
                </div>


                <div className="mt-8 grid grid-cols-1  md:grid-cols-2 xl:mt-12 xl:grid-cols-4">
                    <a href='' className="" >   
                        
                        <div  className="space-y-3 rounded-lg hover:drop-shadow-lg hover:shadow-lg hover:border hover:border-accentColor  hover:bg-white p-8">
                            <div className="h-12 w-12 rounded-full border text-center font-semibold text-3xl py-1">1</div>
                            <div className="text-xl font-semibold capitalize text-black py-2">01. Discussion</div>
                            <p className="text-sm text-gray-500">
                            We meet customers in set place to discuss the details about needs and demands before proposing a plan
                            </p>
                            <div className="-mx-1  inline-flex transform items-center text-sm font-semibold capitalize text-black transition-colors duration-300 hover:underline">
                                <span className='mx-1' >read more</span>
                                <ArrowRight size={16} />
                            </div>
                            
                            
                        </div>
                    </a>

                    <a href=''>   
                        
                        <div  className="space-y-3 rounded-lg hover:drop-shadow-lg hover:shadow-lg hover:border hover:border-accentColor  hover:bg-white p-8">
                            <div className="h-12 w-12 rounded-full border text-center font-semibold text-3xl py-1">2</div>
                            <div className="text-xl font-semibold capitalize text-black py-2">02. Ideas & concepts</div>
                            <p className="text-sm text-gray-500">
                                Our experts come up with all kinds of ideas and initiatives for delivering the best solutions for IT services chosen.
                            </p>
                            <div className="-mx-1  inline-flex transform items-center text-sm font-semibold capitalize text-black transition-colors duration-300 hover:underline">
                                <span className='mx-1' >read more</span>
                                <ArrowRight size={16} />
                            </div>
                            
                            
                        </div>
                    </a>

                    <a href=''>   
                        
                        <div  className="space-y-3 rounded-lg hover:drop-shadow-lg hover:shadow-lg hover:border hover:border-accentColor hover:bg-white p-8">
                            <div className="h-12 w-12 rounded-full border text-center font-semibold text-3xl py-1">3</div>
                            <div className="text-xl font-semibold capitalize text-black py-2">03. Testing & Trying</div>
                            <p className="text-sm text-gray-500">
                                After agreeing on the ideas and plans, we will conduct as scheduled and give comments on the results & adaptations.
                            </p>
                            <div className="-mx-1  inline-flex transform items-center text-sm font-semibold capitalize text-black transition-colors duration-300 hover:underline">
                                <span className='mx-1' >look more</span>
                                <ArrowRight size={16} />
                            </div>
                            
                            
                        </div>
                    </a>

                    <a href=''>   
                        
                        <div  className="space-y-3 rounded-lg hover:drop-shadow-lg hover:shadow-lg hover:border hover:border-accentColor hover:bg-white p-8">
                            <div className="h-12 w-12 rounded-full border text-center font-semibold text-3xl py-1">4</div>
                            <div className="text-xl font-semibold capitalize text-black py-2">04. Execute & install</div>
                            <p className="text-sm text-gray-500">
                                Once the final plan is approved, everything will be conducted according to the agreed contract.
                            </p>
                            <div className="-mx-1  inline-flex transform items-center text-sm font-semibold capitalize text-black transition-colors duration-300 hover:underline">
                                <span className='mx-1' >Look more</span>
                                <ArrowRight size={16} />
                            </div>
                            
                            
                        </div>
                    </a>
                </div>
                
            </div>
        </section>
        <section className="bg-[url('/img.png')] bg-fill bg-center">
            <div className="mx-auto max-w-screen px-4 py-24">
                <div className="">
                    <h1 className="mx-auto text-center text-4xl text-black lg:text-6xl">We run all kinds of IT services that now your <span className="text-secondaryColor">success</span>.</h1>
                    <div className='flex place-content-center gap-4 '>
                        <a href="/getStarted" className="mt-8 text-center rounded-md bg-secondaryColor py-5 text-sm font-semibold text-bgColor w-48 shadow-sm hover:bg-accentColor focus-visible:outline-2 focus-visible:outline-black">Talk to Our Experts</a>
                        <a href="/contact" className="mt-8 text-center rounded-md bg-accentColor py-5 text-sm font-semibold text-bgColor w-48 shadow-sm hover:bg-secondaryColor focus-visible:outline-2 focus-visible:outline-black">Contact Now</a>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default WorkSteps