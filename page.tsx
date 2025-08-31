import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full min-h-screen">
       <nav className="w-full bg-green-900 px-7 py-5 flex justify-between items-center font-semibold">
        <div className="text-lg text-gray-900">
            Latisa
        </div>
        <div className="flex space-x-6 text-sm text-black-700 font-semibold">
            <a href="#" className="text-gray-900 transition">Home</a>
            <a href="#" className="text-gray-900 transition">About</a>
            <a href="#" className="text-gray-900 transition">service</a>
            <a href="#" className="text-gray-900 transition">Portofolio</a>
            <a href="#" className="text-gray-900 transition">Contact</a>
        </div>
    </nav>
    <section className="px-6 container mx-auto md:flex md:justify-between items-center my-6 space-x-6">
      <div className="md:w-2/6 text-center md:text-left">
        <h4 className="text-5xl font-bold mb-5">Nama saya Latisa Marta</h4>
        <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo omnis tempora quibusdam non aperiam in ipsa quasi consequuntur fugiat laboriosam! Velit voluptate voluptatum, quas rerum ad facilis aut odit id.</p>
        <button className="bg-green-950 text-white px-4 py-2 rounded-3xl hover:bg-green-800">Create account</button>
      </div>
      <img className="md:w-2/6 rounded-full" src="/fotosasa.jpeg" alt="" />
    </section>

    <section className="bg-green-900 md:flex md:justify-between items-center w-full mx-auto h-full">
      <img src="/foto2sasa.jpeg" className="w:3/4 md:w-2/6 px-6 py-6 rounded-full flex justify-around mx-auto" alt="" />
      <div className="md:w-3/6 text-center md:text-left">
        <h4 className="text-3xl text-white font-bold">Latisa Marta Sabela</h4>
         <p className="text-white mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus consequuntur amet ab numquam? Odio accusamus ratione, aliquam iure unde exercitationem et corrupti earum consectetur error debitis tempore, non quae eos.</p>
         <button className="bg-green-950 text-white px-4 py-2 rounded-3xl hover:bg-green-800">Cv Download</button>
      </div>
    </section>

    <section className="container mx-auto p-10 my-5 text-center">
      <h3 className="text-4xl font-bold">Our Service</h3>
      <div className="md:flex md:justify-between mt-16 space-x-8">
      {/*1*/}
        <div className="bg-green-900 w-1/3 rounded-md border-grey-200">
          <img className="w-16 rounded-full mx-auto -mt-8" src="/logo laptop.jpg" alt="" />
          <h5 className="font-bold pt-5">Web & Mobile aps</h5>
          <p className="p-5 text-grey-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem corrupti voluptas aut numquam</p>
        </div>
        {/*2*/}
        <div className="hidden md:inline bg-green-900 w-1/3 rounded-md border-grey-200">
          <img className="w-16 rounded-full mx-auto -mt-8" src="/service.jpg" alt="" />
          <h5 className="font-bold pt-5">Lorem</h5>
          <p className="p-5 text-grey-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem corrupti voluptas aut numquam</p>
        </div>
        {/*3*/}
        <div className="hidden md:inline bg-green-900 w-1/3 rounded-md border-grey-200">
          <img className="w-16 rounded-full mx-auto -mt-8" src="/statistik.jpg" alt="" />
          <h5 className="font-bold pt-5">Lorem</h5>
          <p className="p-5 text-grey-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem corrupti voluptas aut numquam</p>
        </div>
      </div>
      </section>

   <section  className="bg-green-900 w-full sm:grid sm:grid-cols-2 h-dvh text-white py-50 px-4 sm:px-8 md:px-16 lg:px-24 justify-between">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
        {/* Kolom Kiri: Our Story & History */}
        <div className="flex flex-col items-start md:pr-10">
          <p className="text-sm font-semibold text-yellow-500 mb-2">OUR STORY</p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
            Some History of My Life, 1980 - 2019
          </h2>
          <p className="text-sm sm:text-base text-gray-300 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
         <div>
                            <form className="flex mt-80">
                                <input type="email" placeholder="Enter your email"
                                    className="w-full bg-white px-4 py-2 rounded-l-lg focus:outline-none text-black"
                                    required />
                                <button type="submit"
                                    className="bg-yellow-500 text-white font-bold px-4 py-2 rounded-r-lg">Sign Up</button>
                            </form>
                        </div>
    </div>
   </section>
    
    
    </div>
  );
}
