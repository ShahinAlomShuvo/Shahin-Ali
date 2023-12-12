import Icons from "../Icons/Icons";

const Footer = () => {
  return (
    <div>
      <hr />
      <div className='flex flex-wrap gap-5 justify-center md:justify-between items-center container mx-auto px-4 lg:px-0 py-8'>
        <Icons></Icons>
        <div>
          <p className='text-gray-500 font-semibold'>
            © 2023, All right reserved{" "}
            <a
              className='text-[#417E6D] hover:underline transition duration-500 ease-in-out'
              href='https://www.facebook.com/shahinbunny'
            >
              Shahin Ali
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
