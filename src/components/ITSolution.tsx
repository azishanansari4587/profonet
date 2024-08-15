
import {ArrowRight, FolderLock, Workflow, Users, Settings, GlobeLock, CircleUser } from 'lucide-react'



const slides =[
    {
        title: 'Profonet Management Goals',
        icon: <CircleUser size={64} color="#1968ee" />,
        path: '/it_design',
        content: 'Our system is composed of currently most modern managing program, user-friendly interface and error-proof conduct methodology.'
    },
    {
        title: 'Efficient Database Security',
        icon: <GlobeLock size={64} color="#1968ee" />,
        path: '/it_management',
        content: "During business transformations, there're possibilities for errors, but our highly advanced database management app spares no room for that."
    },
    {
        title: 'Reliable Multi-function',
        icon: <Settings size={64} color="#1968e6" />,
        path: '/data_security',
        content: 'Your company can totally count on Profonet for all things related to information management, infrastructure design, automation, and other IT services.'
    },
    {
        title: 'High Professional Staffs',
        icon: <Users size={64} color="#1968e6" />,
        path: '/it_design',
        content: 'Having obtained the official & formal training in IT technology and technical fields, our staffs know more than what you might ever think of.'
    },
    {
        title: 'Infrastructure Integration',
        icon: <Workflow size={64} color="#1968e6" />,
        path: '/firewall',
        content: 'At Profonet, we have a holistic and integrated approach towards core modernization to experience technological evolution that make it work.'
    },
    {
        title: 'Quality Control System',
        icon: <FolderLock size={64} color="#1968e6" />,
        path: '/desktop_computing',
        content: "It's more than a responsibility, but a guarantee from us all at Profonet Center to gain customer trust with highly reliable quality control system."
    },
]

const ITSolution = () => {
  return (
    <section className=''>
        <div className='mx-auto max-w-7xl py-24'>
            <div className="px-2 py-2 md:px-6 md:py-10">
                <h1 className="text-2xl text-center tracking-wide py-2 font-bold line-clamp-6 leading-10 text-black lg:text-5xl lg:px-24 xl:px-24">
                    Reliable IT Services for <span className='text-accentColor'>Businesses</span>.
                </h1>
                <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-12 xl:grid-cols-3">
                    {slides.map((item, i) => (
                     <a href={item.path}>   
                        <div key={i} className="space-y-3 rounded-lg drop-shadow-lg shadow-lg bg-white p-8">
                            <span className="inline-block rounded-full bg-gray-100 p-3 text-black">
                            {item.icon}
                            </span>
                            <h1 className="text-xl font-semibold capitalize text-black">{item.title}</h1>
                            <p className="text-sm text-gray-500">
                            {item.content}
                            </p>
                            <div className="-mx-1  inline-flex transform items-center text-sm font-semibold capitalize text-black transition-colors duration-300 hover:underline">
                                <span className='mx-1' >read more</span>
                                <ArrowRight size={16} />
                            </div>
                        </div>
                    </a>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default ITSolution