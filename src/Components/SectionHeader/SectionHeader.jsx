const SectionHeader = ({ header, subHeader }) => {
  return (
    <div className='text-center py-20 relative'>
      <h2 className='uppercase text-7xl md:text-9xl font-bold text-gray-800'>
        {header}
      </h2>
      <h3 className=' text-white uppercase text-3xl md:text-4xl font-bold  -mt-[68px] md:-mt-28'>
        {subHeader}
      </h3>
      <span className='absolute w-36 border-4 border-[#417E6D] translate-x-[-50%] rounded mt-2'></span>
    </div>
  );
};

export default SectionHeader;
