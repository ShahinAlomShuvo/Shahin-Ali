import img from "../../assets/images/yogafusion.png";
const WorkCard = ({ project }) => {
  const { title, image, type, live_link } = project;
  return (
    <a
      className='border border-[#4F596B] rounded bg-[#1B2336] p-5 space-y-4 cursor-pointer group  '
      href={live_link}
      target='_blank'
      rel='noopener noreferrer'
    >
      <div className='overflow-hidden'>
        <img
          className='w-full h-48 lg:h-64 object-cover group-hover:scale-125 transition ease-in-out duration-1000 rounded'
          src={image}
        />
      </div>
      <h2 className='text-xl font-semibold text-white'>{title}</h2>
      <p className='font-medium text-gray-500'>{type}</p>
    </a>
  );
};

export default WorkCard;
