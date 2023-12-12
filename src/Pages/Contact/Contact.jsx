import SectionHeader from "../../Components/SectionHeader/SectionHeader";
import { FaEnvelope, FaHouse, FaPhone } from "react-icons/fa6";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <>
      <SectionHeader
        header={"Contact"}
        subHeader={"Contact Us"}
      ></SectionHeader>
      <div className='grid lg:grid-cols-12 gap-5 py-10 container mx-auto px-4 md:0'>
        <div className='space-y-8 col-span-5'>
          <div className='space-y-2 pb-10'>
            <h2 className='text-2xl font-semibold text-white'>
              Contact Information
            </h2>
            <p className='text-gray-500 font-semibold pb-4 w-[80%] '>
              Feel Free to contact me for any queries or information. <br />
              Iam always here for your concern
            </p>
            <span className='absolute w-36 border-4 border-[#417E6D]  rounded mt-2'></span>
          </div>

          {/* contact with phone  */}
          <div className='flex gap-5 items-center p-5 text-white border border-gray-500 rounded w-[98%] md:w-[80%] bg-[#1B2336]'>
            <div className='text-[#65C29C] bg-[#3A505D] p-6 rounded-full'>
              <FaPhone size={26} />
            </div>
            <div>
              <h5 className='text-xl font-semibold'>Contact on phone</h5>
              <p className='text-sm md:text-base'>+88 01723-981861</p>
            </div>
          </div>

          {/* contact with email  */}
          <div className='flex gap-5 items-center p-5 text-white border border-gray-500 rounded w-[98%] md:w-[80%] bg-[#1B2336]'>
            <div className='text-[#65C29C] bg-[#3A505D] p-6 rounded-full'>
              <FaEnvelope size={26} />
            </div>
            <div>
              <h5 className='text-xl font-semibold'>Contact on Email</h5>
              <p className='text-sm md:text-base'>
                shahinalomshuvo94@gmail.com
              </p>
            </div>
          </div>

          {/* contact Address  */}
          <div className='flex gap-5 items-center p-5 text-white border border-gray-500 rounded w-[98%] md:w-[80%] bg-[#1B2336]'>
            <div className='text-[#65C29C] bg-[#3A505D] p-6 rounded-full'>
              <FaHouse size={26} />
            </div>
            <div>
              <h5 className='text-xl font-semibold'>Contact Address</h5>
              <p className='text-sm md:text-base'>Rajshahi,Bangladesh</p>
            </div>
          </div>
        </div>
        <div className='col-span-7'>
          <ContactForm></ContactForm>
        </div>
      </div>
    </>
  );
};

export default Contact;
