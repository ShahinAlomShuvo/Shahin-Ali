import { FaArrowDown } from "react-icons/fa6";
import Icons from "../../Components/Icons/Icons";
import picture from "../../assets/images/profile.jpg";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <div className='bg-[#101B2D] min-h-[90vh]'>
      <div className='flex flex-col justify-center items-center space-y-6 py-28'>
        <img
          className='w-52 h-52 rounded-full ring-8 ring-[#417E6D]'
          src={picture}
          alt=''
        />
        <h1 className='text-4xl text-white font-bold text-center'>
          Hi, I am
          <span className='text-[#417E6D]'>
            <Typewriter
              words={[
                " Shahin Ali",
                " Front-end Developer",
                " MERN-Stack Developer",
              ]}
              loop={true}
              cursor
              cursorStyle='|'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>
        <p className='text-lg text-gray-300 px-8 md:px-0 md:w-2/3 lg:w-3/6 mx-auto text-center'>
          I am a frontend web developer. I can provide clean code and pixel
          perfect design. I also make website more & more interactive with web
          animations.
        </p>
        <Icons></Icons>
        <div className='text-gray-300 flex justify-center items-center gap-2 pt-4 hover:text-[#417E6D] transition duration-500 cursor-pointer'>
          <FaArrowDown className='animate-bounce' size={18} />
          <span>Scroll Down</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
