
import { Star } from 'lucide-react'
import { useRef } from 'react';
import toast from 'react-hot-toast';

const NewsLetter: React.FC = () => {
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
      toast("Thanks for subscribe newsletter", {
        icon: "🙏",
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
    <section className=' bg-primaryColor px-4 py-12'>
        <div className="mx-auto max-w-7xl px-2 py-12 lg:px-0">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="w-full md:w-2/3 lg:w-1/2">
                <h2 className="text-3xl font-bold text-white">Sign up for our <span className='text-secondaryColor'>newsletter</span></h2>
                <p className="mt-4 text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc
                    commodo posuere et sit amet ligula.
                </p>
                <div className="mt-4">
                    <p className="font-semibold text-white">
                    Trusted by over 100,000+ businesses and individuals
                    </p>
                    <div className="mt-2 flex items-center">
                        <img src="/google_review.png" width={80} alt="" />
                        <div className="flex space-x-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} className="h-5 w-5 text-starColor" />
                            ))}
                        </div>
                        <span className="ml-2 inline-block">
                            <span className="text-sm font-semibold text-secondaryColor">4.8/5 . 3420 Reviews</span>
                        </span>
                    </div>
                </div>
                </div>
                <div className="mt-10 w-full md:w-2/3 lg:mt-0 lg:w-1/2">
                <form onSubmit={onSubmit} ref ={formRef} className="flex lg:justify-center">
                    <div className="flex w-full max-w-md flex-col space-y-4">
                    <input
                        className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="email"
                        placeholder="Email"
                        name='Email'
                        required
                    ></input>
                    <button
                        type="submit"
                        className="w-full rounded-md bg-accentColor px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-secondaryColor focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                        Subscribe
                    </button>
                    </div>
                </form>
                <p className="mt-2 lg:text-center">
                    <span className="text-sm text-white">
                    By signing up, you agree to our terms of service and privacy policy.
                    </span>
                </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default NewsLetter





