import {
  FaFacebook,
  FaSquareTwitter,
  FaLinkedin,
  FaGithub,
  FaDiscord,
} from "react-icons/fa6";
const Icons = () => {
  return (
    <div className='flex gap-5'>
      {/* facebook  */}
      <div className='border p-3 rounded text-white hover:bg-[#417E6D] transition duration-1000'>
        <a
          href='https://www.facebook.com/shahinbunny'
          target='_blank'
          rel='noreferrer'
        >
          <FaFacebook size={22} />
        </a>
      </div>
      {/* twitter  */}
      <div className='border p-3 rounded text-white hover:bg-[#417E6D] transition duration-1000'>
        <a
          href='https://twitter.com/ShahinAli00'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaSquareTwitter size={22} />
        </a>
      </div>
      {/* linkedin  */}
      <div className='border p-3 rounded text-white hover:bg-[#417E6D] transition duration-1000'>
        <a
          href='https://www.linkedin.com/in/shahin-ali00'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaLinkedin size={22} />
        </a>
      </div>
      {/* git hub  */}
      <div className='border p-3 rounded text-white hover:bg-[#417E6D] transition duration-1000'>
        <a
          href='https://github.com/ShahinAlomShuvo'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaGithub size={22} />
        </a>
      </div>

      {/* discord  */}
      <div className='border p-3 rounded text-white hover:bg-[#417E6D] transition duration-1000'>
        <a
          href='https://discord.com/channels/shahinali000'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaDiscord size={22} />
        </a>
      </div>
    </div>
  );
};

export default Icons;
