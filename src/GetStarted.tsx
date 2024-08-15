import React, { useRef } from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import NewsLetter from "../components/NewsLetter"
import PartnerLogo from "../components/PartnerLogo"
import toast, { Toaster } from "react-hot-toast"



const GetStarted:React.FC = () => {

  // const [result, setResult] = React.useState<string>("");
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
      toast("Email Sent Successfully", {
        icon: "🎉",
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
      <section className="bg-bgColor">
      <div className="mx-auto max-w-7xl py-12 md:py-24">
          <Toaster position="top-right" reverseOrder={false}/>
          <div className="grid items-center justify-items-center gap-x-4 gap-y-10 lg:grid-cols-2">
            {/* contact from */}
            <div className="flex items-center justify-center">
              <div className="px-2 md:px-12">
                <p className="text-2xl font-bold text-gray-900 md:text-4xl">Get Started</p>
                <p className="mt-4 text-lg text-gray-600">
                  Our friendly team would love to hear from you.
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
                        name="First Name"
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
                        name="Last Name"
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
                      name="Email"
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
                      name="Phone Number"
                      placeholder="Phone number"
                      required
                    />
                  </div>
                  <div className="grid w-full  items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="services"
                    >
                      Choose Services
                    </label>
                    <select
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      id="service"
                      name="Service"
                      required
                    >
                      <option value="Website">Website</option>
                      <option value="Applications">Applications</option>
                      <option value="Cloud Infrastructure Solutions">Cloud Infrastructure Solutions</option>
                      <option value="Data Center Solutions">Data Center Solutions</option>
                      <option value="LAN/WAN/Wireless Solution">LAN/WAN/Wireless Solution</option>
                      <option value="Consulting Services">Consulting Services</option>
                      <option value="Integration Services">Integration Services</option>
                    </select>  

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
                      name="Message"
                      placeholder="Leave us a message"
                      required
                      cols={3}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
            <img
              alt="Contact us"
              className="hidden max-h-full w-full rounded-lg object-cover lg:block"
              src="https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&h=800&q=80"
            />
          </div>
        </div>
      <hr className="mt-6" />
      </section>
      <PartnerLogo/>
      <NewsLetter/>
    <Footer/>  
    </>
  )
}

export default GetStarted