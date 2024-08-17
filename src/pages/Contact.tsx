'use client'

import toast, { Toaster } from 'react-hot-toast'
import Footer from '../components/Footer'
import Header from '../components/Header'
import NewsLetter from '../components/NewsLetter'
import PartnerLogo from '../components/PartnerLogo'
import { useRef } from 'react'




const Contact = () => {

  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast("Sending....", {
      style:{
        background: "#fff",
        color:"#000",
      }
    });
    const formData = new FormData(event.currentTarget);

    const accessKey = import.meta.env.VITE_REACT_WEBFORM;

    if(accessKey){
        formData.append("access_key", accessKey);
    }else{
        console.log("Access Key is not Defined");
        return;
    }

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      toast("We Will Contact You Soon..", {
        icon: "👋",
        style: {
          borderRadius:"10px",
          background: "#88D66C",
          color: "#fff",
        }
      });

      if (formRef.current) {
        formRef.current.reset();
      }
      // event.currentTarget.reset();
    } else {
      console.log("Error", data);
      toast.error("Error!");
      // data.message
    }
  };
  

  return (
    <>
      <Header/>
      <Toaster position="top-right" reverseOrder={false}/>
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-4">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.827120939083!2d77.60262997595183!3d12.918830387391601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1501a6651841%3A0x49cae48eaf3b81c1!2sAl%20Taha%20Residency!5e0!3m2!1sen!2sin!4v1722582348716!5m2!1sen!2sin"  height="600" className="border-0 w-full "  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" sandbox="allow-same-origin allow-scripts"></iframe>
          
          <div className="mx-auto max-w-7xl py-12 md:py-24">
            <div className="grid items-center justify-items-center gap-x-4 gap-y-10 lg:grid-cols-2">
              {/* contact from */}
              <div className="flex items-center justify-center">
                <div className="px-2 md:px-12">
                  <p className="text-2xl font-bold text-accentColor md:text-4xl">Get in touch</p>
                  <p className="mt-4 text-lg text-gray-600">
                  Empower your business with Profonet Solutions—where expert IT management drives efficiency and success.
                  </p>
                  <form onSubmit={onSubmit} ref={formRef} className="mt-8 space-y-4">
                    <div className="grid w-full gap-y-4 md:gap-x-4 lg:grid-cols-2">
                      <div className="grid w-full  items-center gap-1.5">
                        <label
                          className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          htmlFor="first_name"
                        >
                          First Name
                        </label>
                        <input
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                          type="text"
                          id="first_name"
                          name='First Name'
                          placeholder="First Name"
                          required
                        />
                      </div>
                      <div className="grid w-full  items-center gap-1.5">
                        <label
                          className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          htmlFor="last_name"
                        >
                          Last Name
                        </label>
                        <input
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                          type="text"
                          id="last_name"
                          name='Last Name'
                          placeholder="Last Name"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid w-full  items-center gap-1.5">
                      <label
                        className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                        type="text"
                        id="email"
                        name='Email'
                        placeholder="Email"
                        required
                      />
                    </div>
                    <div className="grid w-full  items-center gap-1.5">
                      <label
                        className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="phone_number"
                      >
                        Phone number
                      </label>
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                        type="tel"
                        id="phone_number"
                        name='Phone Number'
                        placeholder="Phone number"
                      />
                    </div>
                    <div className="grid w-full  items-center gap-1.5">
                      <label
                        className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <textarea
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                        id="message"
                        name='Message'
                        required
                        placeholder="Leave us a message"
                        rows={5}
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full rounded-md bg-secondaryColor px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-accentColor focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
              <img
                alt="Contact us"
                className="hidden max-h-full w-full rounded-lg object-cover lg:block"
                src="https://images.unsplash.com/photo-1543269664-56d93c1b41a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGhhcHB5JTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
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

export default Contact






