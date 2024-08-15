

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';


const slides =[
    {
        title: 'IT Design',
        image: 'Itdesign.png',
        path: '/it_design',
        content: ' We provide the most responsive and functional IT design for companies and business worldwide.'
    },
    {
        title: 'IT Management',
        image: 'ITManagement.png',
        path: '/it_management',
        content: 'Its possible to simultaneously managed and transform information from one side to another.'
    },
    {
        title: 'Data Security',
        image: 'dataSecurity.png',
        path: '/data_security',
        content: 'Backup your database. Store in a safe and secure place while still maintaing it accessibility.'
    },
    {
        title: 'Infrastucture Plan',
        image: 'infra.png',
        path: '/it_design',
        content: 'Profonet takes into account all conditions and budgets needed for building infrastructure plan.'
    },
    {
        title: 'Firewall Advancement',
        image: 'firewall.png',
        path: '/firewall',
        content: 'Enchancing the strength and security of firewalls to protect online data from malicious sources.'
    },
    {
        title: 'Desktop Computing',
        image: 'desktopCom.png',
        path: '/desktop_computing',
        content: 'Programming is taken care of by our experienced  and professional specialist in IT management.'
    },
]


const Slider = () => {
  return (
    <div className='bg-bgColor'>
        <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {slides.map((item, index)=>(
            <SwiperSlide>
                <article key={index} className="rounded-xl bg-white p-4 ring ring-indigo-50 sm:p-6 lg:p-4">
                    <div className="flex flex-col items-start sm:gap-8">
                        <div>
                            <img src={item.image} width={50} height={50} alt="" />
                        </div>

                        <div>
                            <h3 className="mt-4 text-lg font-medium sm:text-xl">
                              {item.title}
                            </h3>
                            <p className="mt-1 text-sm text-gray-700">
                            {item.content}
                            </p>
                        </div>
                    </div>
                </article>
            </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Slider