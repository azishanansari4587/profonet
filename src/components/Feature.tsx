

export function Feature() {
  return (
    <section className="bg-bgColor lg:py-12">
        <div className="mx-auto max-w-7xl px-2 lg:px-8 ">
        <h2 className="text-center text-4xl font-semibold py-8"> Why Choose Us</h2>
            <div className="grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
                
                <div>
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primaryColor text-white">
                    <svg
                    className="h-9 w-9 text-blue-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                    />
                    </svg>
                </div>
                <h3 className="mt-8 text-lg font-semibold text-black">Expertise and Experience</h3>
                <p className="mt-4 text-sm text-gray-600">
                Our team of IT management professionals brings extensive experience and a deep understanding of technology and best practices.
                </p>
                </div>
                <div>
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-accentColor text-white">
                    <svg
                    className="h-9 w-9 text-orange-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                    </svg>
                </div>
                <h3 className="mt-8 text-lg font-semibold text-black">Proactive Approach</h3>
                <p className="mt-4 text-sm text-gray-600">
                We anticipate potential issues and address them before they impact your business, ensuring a proactive approach to IT management.
                </p>
                </div>
                <div>
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-secondaryColor text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-wrench"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
                </div>
                <h3 className="mt-8 text-lg font-semibold text-black">Tailored Solutions</h3>
                <p className="mt-4 text-sm text-gray-600">
                We customize our IT management services to meet the unique needs of your business, providing solutions that align with your specific requirements.
                </p>
                </div>
                <div>
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-darkGrey text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-clock"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <h3 className="mt-8 text-lg font-semibold text-black">24/7 Support</h3>
                <p className="mt-4 text-sm text-gray-600">
                Our round-the-clock support ensures that you have access to assistance whenever you need it, keeping your IT operations uninterrupted.
                </p>
                </div>
            </div>
        </div>
    </section>

  )
}
