import Footer from "./components/Footer"
import Header from "./components/Header"
import NewsLetter from "./components/NewsLetter"
import PartnerLogo from "./components/PartnerLogo"

const slides =[
  {
      title: 'IT Consulting',
      img: 'S1.png',
      path: '/it_design',
      content: ' Our IT consulting services provide strategic guidance to help you navigate the complexities of technology and make informed decisions. We assess your current IT environment, identify opportunities for improvement, and develop a roadmap to align technology with your business objectives.'
  },
  {
      title: 'Managed IT Services',
      img:'S2.png',
      path: '/it_management',
      content: 'Focus on your core business while we handle the day-to-day management of your IT systems. Our managed IT services include network monitoring, system maintenance, and proactive support, ensuring that your technology operates smoothly and efficiently.'
  },
  {
      title: 'Cloud Solutions',
      img:'S3.png',
      path: '/data_security',
      content: 'Leverage the power of the cloud with our customized cloud solutions. We offer cloud migration, infrastructure setup, and management services to help you take advantage of the flexibility, scalability, and cost-efficiency of cloud technology.'
  },
  {
      title: 'CyberSecurity Services',
      img:'S4.png',
      path: '/it_design',
      content: 'Protect your business from cyber threats with our comprehensive cybersecurity services. We implement robust security measures, conduct vulnerability assessments, and provide continuous monitoring to safeguard your data and systems from potential attacks.'
  },
  {
      title: 'Data Backup & Recovery',
      img:'S5.png',
      path: '/firewall',
      content: 'Ensure the safety and integrity of your critical data with our backup and recovery solutions. We design and implement reliable backup systems and disaster recovery plans to protect your information and minimize downtime in case of emergencies.'
  },
  {
      title: 'Network Solutions',
      img:'S6.png',
      path: '/desktop_computing',
      content: 'Optimize your network infrastructure with our expert network solutions. We handle network design, setup, and management to ensure high performance, reliability, and security for your business’s connectivity needs.'
  },
  {
      title: 'IT Training & Support',
      img:'support.png',
      path: '/desktop_computing',
      content: 'Empower your team with the knowledge and skills they need to effectively use technology. We offer training programs and support services to help your staff stay up-to-date with the latest tools and best practices.'
  },
  {
      title: 'Hardware & Software Support',
      img:'hardware.png',
      path: '/desktop_computing',
      content: 'Receive prompt and efficient support for your hardware and software needs. From installation and configuration to troubleshooting and repair, we provide comprehensive support to keep your technology running smoothly.'
  },
]

const Solutions = () => {
  return (
    <>
    <Header/>
    <section className="relative w-full bg-[url(./image.jpg)] bg-center">
      <div className="mx-auto max-w-screen-xl px-4 py-64 lg:flex lg:h-full lg:items-center">
            <div className="mx-auto max-w-7xl text-center">
                <h1 className="mt-8 text-3xl font-bold tracking-tight text-bgColor md:text-4xl lg:text-6xl">
                    Business IT Solutions
                </h1>

                <p className="mt-8 text-2xl text-white">
                    Reach out to the world’s most reliable IT services.
                </p>
            </div>

            
      </div>

      
    </section>
    <div className='mx-auto max-w-7xl py-24'>
                <div className="px-2 py-2 md:px-6 md:py-10">
                    <h1 className="text-2xl text-center tracking-wide py-2 font-bold line-clamp-6 leading-10 text-black lg:text-5xl lg:px-24 xl:px-24">
                        Preparing for your success, 
                        we provide <span className='text-accentColor'>truly prominent IT solutions</span>.
                    </h1>
                    <p className="text-lg text-center tracking-wide py-8 line-clamp-6 leading-8 text-black">In today's dynamic business environment, having a reliable and efficient IT infrastructure is essential for success. At Profonet Solution, we offer a broad range of IT services designed to support, enhance, and transform your technology landscape. Our goal is to provide tailored solutions that meet your unique needs, ensuring that your IT systems are secure, scalable, and optimized for performance.</p>
                    <div className="mt-8 grid grid-cols-1 text-center gap-8 md:grid-cols-2 xl:mt-12 xl:grid-cols-3">
                        {slides.map((item, i) => (
                            <div key={i} className="space-y-8 rounded-lg drop-shadow-lg shadow-lg bg-white p-8">
                                <div className="grid place-items-center"><img src={item.img} alt={item.title}/></div>
                                <h1 className="text-xl font-semibold capitalize text-black">{item.title}</h1>
                                <p className="text-lg text-start text-gray-500">
                                {item.content}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
    
    <PartnerLogo/>
    <NewsLetter/>
    <Footer/>
    </>
  )
}

export default Solutions