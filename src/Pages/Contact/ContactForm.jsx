import Button from "../../Components/Button/Button";

const ContactForm = () => {
  return (
    <div className='p-8  border border-gray-500 rounded bg-[#1B2336]'>
      <form className='space-y-3'>
        {/* name  */}
        <label className='form-control w-full '>
          <div className='label'>
            <span className='label-text text-white text-base font-semibold'>
              Name
            </span>
          </div>
          <input
            type='text'
            placeholder='Enter your name....'
            className='input input-bordered input-success w-full  bg-[#1B2335] border-gray-500 text-gray-200'
          />
        </label>
        {/* email  */}
        <label className='form-control w-full '>
          <div className='label'>
            <span className='label-text text-white text-base font-semibold'>
              Email
            </span>
          </div>
          <input
            type='email'
            placeholder='Enter your email....'
            className='input input-bordered input-success w-full  bg-[#1B2335] border-gray-500 text-gray-200'
          />
        </label>
        {/* subject  */}
        <label className='form-control w-full '>
          <div className='label'>
            <span className='label-text text-white text-base font-semibold'>
              Subject
            </span>
          </div>
          <input
            type='text'
            placeholder='Enter your subject....'
            className='input input-bordered input-success w-full  bg-[#1B2335] border-gray-500 text-gray-200'
          />
        </label>
        {/* message  */}
        <label className='form-control w-full '>
          <div className='label'>
            <span className='label-text text-white text-base font-semibold'>
              Message
            </span>
          </div>

          <textarea
            rows={4}
            className='textarea textarea-success  bg-[#1B2335] border-gray-500 text-gray-200'
            placeholder='Enter your message....'
          ></textarea>
        </label>
        <Button name={"Send Email"}></Button>
      </form>
    </div>
  );
};

export default ContactForm;
