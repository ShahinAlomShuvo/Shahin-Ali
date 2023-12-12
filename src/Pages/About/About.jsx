import Button from "../../Components/Button/Button";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";
import aboutImage from "../../assets/images/about-image.jpg";

const About = () => {
  return (
    <div className='container mx-auto'>
      <SectionHeader header={"about"} subHeader={"about me"}></SectionHeader>
      <div className='grid md:grid-cols-2 gap-16 px-4 md:px-0  py-20'>
        <div>
          <img
            className='ring-8 ring-[#417E6D] rounded '
            src={aboutImage}
            alt=''
          />
        </div>
        <div>
          <h2 className='text-white text-3xl font-bold'>
            Hi, I am <span className='text-[#417E6D]'>Shahin Ali</span>
          </h2>
          <ul className='font-semibold text-lg list-disc space-y-3 pt-4 ml-6 list-inside'>
            <li className='text-[#417E6D]'>
              <strong className='text-gray-300 mr-4'>First Name</strong>: Shahin
            </li>
            <li className='text-[#417E6D]'>
              <strong className='text-gray-300 mr-4'>Last Name</strong>: Ali
            </li>
            <li className='text-[#417E6D]'>
              <strong className='text-gray-300 mr-4'>Age</strong>: 24 Years
            </li>
            <li className='text-[#417E6D]'>
              <strong className='text-gray-300 mr-4'>Nationality</strong>:
              Bangladeshi
            </li>
            <li className='text-[#417E6D]'>
              <strong className='text-gray-300 mr-4'>Languages</strong>:
              Bangla,English
            </li>
            <li className='text-[#417E6D]'>
              <strong className='text-gray-300 mr-4'>Address</strong>:
              Kadirgonj,Rajshahi,Bangladesh
            </li>
            <li className='text-[#417E6D]'>
              <strong className='text-gray-300 mr-4'>Status</strong>: Available
            </li>
          </ul>
          <div className='ml-6 mt-4'>
            <a
              href='https://drive.google.com/file/d/1TZpvPT9cMCdWaXPEskyYfq1OXglhnpRD/view?usp=sharing'
              download
            >
              <Button name={"Download Resume"}></Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
