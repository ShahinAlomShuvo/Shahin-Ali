import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const Root = () => {
  return (
    <div className='bg-[#0F1F33] min-h-screen font-RadioCanada'>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
