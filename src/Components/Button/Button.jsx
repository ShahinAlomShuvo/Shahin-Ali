const Button = ({ name, action }) => {
  return (
    <>
      <button
        onClick={action}
        className='btn bg-[#529180] border-none uppercase md:px-8  font-semibold'
      >
        {name}
      </button>
    </>
  );
};

export default Button;
