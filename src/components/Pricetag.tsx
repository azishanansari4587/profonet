
// import { CheckCircle } from 'lucide-react'

import { CheckCircle, CircleX } from "lucide-react"

const Pricetag = () => {
    return (
        <section className="relative overflow-hidden py-10">
            <div className="relative mx-auto max-w-7xl px-4">
                <div className="mx-auto mb-24 max-w-2xl text-center lg:max-w-5xl">
                    <p className="text-center font-bold tracking-widest leading-loose py-2 uppercase text-[#94a3b8]">
                        Pricing and plan
                    </p>
                    <h1 className="mb-8 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-5xl">
                        1 monthly fee for all <span className="text-accentColor">IT services</span>.
                    </h1>
                    
                </div>
                <div className="mx-auto max-w-5xl">
                    <div className="flex justify-center flex-wrap items-center">
                        <div className="w-full lg:-mr-2 lg:w-1/3">
                            <div className="mx-auto max-w-sm rounded-md border border-gray-200 bg-white pb-20 pl-5 pr-8 pt-6 lg:pb-8">
                                <span className="mb-2 block text-sm font-semibold text-gray-400">Basic</span>
                                <img src="/basic.png" alt="" />
                                <span className="flex items-end">
                                <span className="text-4xl font-extrabold leading-none">$70</span>
                                <span className="text-sm font-semibold">/month</span>
                                </span>
                                <div className="mt-7 border-t border-gray-100 pt-5">
                                    <ul className="mb-11">
                                        <li className="mb-4 flex items-center">
                                            <CheckCircle className="mr-2 text-secondaryColor" size={16} />
                                            <p className="font-semibold leading-normal">1 Team Members</p>
                                        </li>
                                        <li className="mb-4 flex items-center">
                                            <CheckCircle className="mr-2 text-secondaryColor" size={16} />
                                            <p className="font-semibold leading-normal">800+ UI Blocks</p>
                                        </li>
                                        <li className="mb-4 flex items-center">
                                            <CheckCircle className="mr-2 text-secondaryColor" size={16} />
                                            <p className="font-semibold leading-normal">5 GB Cloud Storage</p>
                                        </li>
                                        <li className="mb-4 flex items-center">
                                            <CircleX className="mr-2 text-red" size={16} />
                                            <p className="font-semibold leading-normal">Individual Email Account</p>
                                        </li>
                                        <li className="flex items-center">
                                            <CircleX className="mr-2 text-red" size={16} />
                                            <p className="font-semibold leading-normal">Premium Support</p>
                                        </li>
                                    </ul>
                                <button
                                    type="button"
                                    className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-secondaryColor hover:text-white hover:border-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                >
                                    Choose Plan
                                </button>
                                </div>
                            </div>
                        </div>
                        <div className="-mt-4 w-full lg:-mt-0 lg:w-1/3">
                            <div className="pt-22 relative mx-auto max-w-sm rounded-lg border border-darkGrey  px-10 pb-16 ">
                                <div className="absolute left-1/2 top-0 inline-flex -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full bg-white p-2">
                                    <div className="flex-shrink-0 rounded-full bg-black px-5 py-4 text-sm font-semibold uppercase text-white">
                                        Most Popular
                                    </div>
                                </div>
                                
                                <span className="mb-2 block pt-10 text-sm font-semibold ">Professional </span>
                                <img src="/professional.png" alt="" />
                                <span className="flex items-end">
                                <span className="text-4xl font-extrabold leading-none">$100</span>
                                <span className="text-sm font-semibold">/month</span>
                                </span>
                                <div className="mt-7 border-t border-black pt-5">
                                    <ul className="mb-11">
                                        <li className="mb-4 flex items-center">
                                            <CheckCircle className="mr-2 text-secondaryColor" size={16} />
                                            <p className="font-semibold leading-normal">3 Team Members</p>
                                        </li>
                                        <li className="mb-4 flex items-center">
                                            <CheckCircle className="mr-2 text-secondaryColor" size={16} />
                                            <p className="font-semibold leading-normal">1200+ UI Blocks</p>
                                        </li>
                                        <li className="mb-4 flex items-center">
                                            <CheckCircle className="mr-2 text-secondaryColor" size={16} />
                                            <p className="font-semibold leading-normal">10 GB Cloud Storage</p>
                                        </li>
                                        <li className="mb-4 flex items-center">
                                            <CheckCircle className="mr-2 text-secondaryColor" size={16} />
                                            <p className="font-semibold leading-normal">Individual Email Account</p>
                                        </li>
                                        <li className="flex items-center">
                                            <CircleX className="mr-2 text-red" size={16} />
                                            <p className="font-semibold leading-normal">Premium Support</p>
                                        </li>
                                    </ul>
                                    <button
                                        type="button"
                                        className="rounded-md bg-white px-3 py-2 text-sm border font-semibold text-black shadow-sm hover:bg-secondaryColor hover:text-white hover:border-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                    >
                                        Choose Plan
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="-mt-4 w-full lg:-ml-2 lg:-mt-0 lg:w-1/3">
                            <div className="rounded-b-5xl lg:rounded-r-5xl mx-auto max-w-sm border border-gray-200 bg-white pb-8 pl-8 pr-5 pt-12 lg:rounded-b-none lg:pt-6">
                                <span className="mb-2 block text-sm font-semibold text-gray-400">Advance</span>
                                <img src="/advance.png" alt="" className="py-3" />
                                <span className="flex items-end">
                                <span className="text-4xl font-extrabold leading-none">$150</span>
                                <span className="text-sm font-semibold">/month</span>
                                </span>
                                <div className="mt-7 border-t border-gray-100 pt-5">
                                    <ul className="mb-11">
                                        <li className="mb-4 flex items-center">
                                            <CheckCircle className="mr-2 text-secondaryColor" size={16} />
                                            <p className="font-semibold leading-normal">5 Team Members</p>
                                        </li>
                                        <li className="mb-4 flex items-center">
                                            <CheckCircle className="mr-2 text-secondaryColor" size={16} />
                                            <p className="font-semibold leading-normal">2000+ UI Blocks</p>
                                        </li>
                                        <li className="mb-4 flex items-center">
                                            <CheckCircle className="mr-2 text-secondaryColor" size={16} />
                                            <p className="font-semibold leading-normal">15 GB Cloud Storage</p>
                                        </li>
                                        <li className="mb-4 flex items-center">
                                            <CheckCircle className="mr-2 text-secondaryColor" size={16} />
                                            <p className="font-semibold leading-normal">Individual Email Account</p>
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="mr-2 text-secondaryColor" size={16} />
                                            <p className="font-semibold leading-normal">Premium Support</p>
                                        </li>
                                    </ul>
                                <button
                                    type="button"
                                    className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-secondaryColor hover:text-white hover:border-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                >
                                    Choose Plan
                                </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricetag





