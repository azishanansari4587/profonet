import {BriefcaseBusiness,MapPinned, BookMarked, BrickWall, AlarmClock, Heart } from 'lucide-react'
import { Link } from 'react-router-dom'



const slides =[
    {
        title: 'IT Design',
        icon: <Heart size={64} strokeWidth={1}/>,
        content: ' We provide the most responsive and functional IT design for companies and business worldwide.'
    },
    {
        title: 'IT Management',
        icon: <BriefcaseBusiness size={64} strokeWidth={1}/>,
        content: 'Its possible to simultaneously managed and transform information from one side to another.'
    },
    {
        title: 'Data Security',
        icon: <AlarmClock size={64} strokeWidth={1} />,
        content: 'Backup your database. Store in a safe and secure place while still maintaing it accessibility.'
    },
    {
        title: 'Infrastucture Plan',
        icon: <MapPinned size={64} strokeWidth={1} />,
        content: 'Profonet takes into account all conditions and budgets needed for building infrastructure plan.'
    },
    {
        title: 'Firewall Advancement',
        icon: <BrickWall size={64} strokeWidth={1} />,
        content: 'Enchancing the strength and security of firewalls to protect online data from malicious sources.'
    },
    {
        title: 'Desktop Computing',
        icon: <BookMarked size={64} strokeWidth={1} />,
        content: 'Programming is taken care of by our experienced  and professional specialist in IT management.'
    },
]


const Service = () => {
  return (
    <section className='bg-bgColor'>
        <div className='mx-auto max-w-7xl py-24'>
            <div className="px-2 py-2 md:px-6 md:py-10">
                <p className='text-center font-bold tracking-widest leading-loose py-2 uppercase text-[#94a3b8]'>SERVICES WE DELIVER</p>
                <h1 className="text-2xl text-center tracking-wide py-2 font-bold line-clamp-6 leading-10 text-black lg:text-5xl lg:px-24 xl:px-24">
                    Preparing for your success, 
                    we provide <span className='text-accentColor'>truly prominent IT solutions</span>.
                </h1>
                <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-12 xl:grid-cols-3">
                    {slides.map((item, i) => ( 
                        <div key={i} className="space-y-3 rounded-lg hover:drop-shadow-lg hover:shadow-lg  hover:bg-white p-8">
                            <span className="inline-block rounded-full bg-gray-100 p-3 text-black">
                            {item.icon}
                            </span>
                            <h1 className="text-xl font-semibold capitalize text-black">{item.title}</h1>
                            <p className="text-sm text-gray-500">
                            {item.content}
                            </p>                            
                        </div>
                    ))}
                </div>
            </div>

            <div className='flex place-content-center gap-4'> 
                <Link to='#' className="mt-8 rounded-md bg-secondaryColor text-center py-5 text-sm font-semibold text-bgColor w-48 shadow-sm hover:bg-accentColor focus-visible:outline-2 focus-visible:outline-black">Talk to Our Experts</Link>
                <Link to='/contact' className="mt-8 border rounded-md bg-transparent text-center py-5 text-sm font-semibold text-black w-48 shadow-sm hover:bg-accentColor hover:text-white focus-visible:outline-2 focus-visible:outline-black">Contact Now</Link>
            </div>
        </div>
    </section>
  )
}

export default Service