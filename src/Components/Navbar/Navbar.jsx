import { NavLink } from "react-router-dom";
import Button from "../Button/Button";

const Navbar = () => {
  const navItems = ["Home", "About", "Resume", "Work", "Blogs", "Contact"];

  const navLinks = navItems.map((item, index) => {
    const formattedIndex = String(index + 1).padStart(2, "0");
    return (
      <li
        key={index}
        className='font-bold relative border-b lg:border-b-2 lg:border-transparent hover:border-green-500 transition duration-500 '
      >
        <NavLink to={`/${item.toLowerCase()}`}>
          <span className='text-green-300'>{formattedIndex}.</span>
          <span className='ml-1'>{item}</span>
        </NavLink>
      </li>
    );
  });

  return (
    <div className='bg-[#101B2D] text-white py-2'>
      <div className='navbar container mx-auto'>
        {/* nav start content  */}
        <div className='navbar-start'>
          <div className='dropdown'>
            <div className='drawer'>
              <input id='my-drawer' type='checkbox' className='drawer-toggle' />
              <div className='drawer-content'>
                <label
                  htmlFor='my-drawer'
                  tabIndex={0}
                  className='btn btn-ghost lg:hidden'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M4 6h16M4 12h8m-8 6h16'
                    />
                  </svg>
                </label>
              </div>

              <div className='drawer-side z-10'>
                <label
                  htmlFor='my-drawer'
                  aria-label='close sidebar'
                  className='drawer-overlay'
                ></label>
                <ul className='menu p-4 w-80 min-h-full bg-[#001E2B] '>
                  {navLinks}
                </ul>
              </div>
            </div>
          </div>
          <NavLink
            to={"/"}
            className='text-green-300 font-bold text-2xl md:text-3xl'
          >
            Shahin Ali
          </NavLink>
        </div>

        {/* nav center content  */}
        <div className='navbar-center hidden lg:flex'>
          <ul className='flex gap-5 '>{navLinks}</ul>
        </div>

        {/* nav end content  */}
        <div className='navbar-end'>
          <Button name={"Hire Me"}></Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
