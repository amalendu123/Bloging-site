import Image from "next/image";
import { Inter } from "next/font/google";
import { FaLock } from "react-icons/fa";
const inter = Inter({ subsets: ["latin"] });
import { CgProfile } from "react-icons/cg";
import { FaGoogle } from "react-icons/fa";
export default function Home() {
  return (
   <div className="flex justify-center items-center h-screen w-screen" style={{background: 'rgb(213,59,245)',
    backgroundImage: 'linear-gradient(90deg, rgba(213,59,245,1) 0%, rgba(91,202,221,1) 30%, rgba(106,135,229,1) 70%)',}}>
      <div className="flex flex-col justify-center items-center sm:gap-10 gap-2 sm:w-96 w-72 sm:h-fit h-[600px] border-2 p-6 shadow-2xl bg-white rounded-xl"  >
        <h1 className="font-bold text-4xl">Login</h1>
        <div className="flex flex-col gap-5 w-full">
          <h4>Username</h4>
          <div className="flex border-b-2 w-full">
            <CgProfile size={20}/>
            <input type="text" name="username" className="bg-transparent border-0 pl-4 text-sm w-full outline-none pb-1" placeholder="Type Your Username"/>
          </div>
        </div>
        <div className="flex flex-col gap-5 w-full">
          <h4>Password</h4>
          <div className="flex border-b-2">
            <FaLock size={20}/>
            <input type="Password" name="password" className="bg-transparent border-0 pl-4 text-sm w-full outline-none pb-1" placeholder="Type Your Password"/>
          </div>
        </div>
        <div className="flex justify-end w-full cursor-pointer">
          <p>Forgot Password?</p>
        </div>
        <button className="p-2 bg-blue-600 rounded-2xl w-full">
          Login
        </button>
        <p>or , signup using </p>
        <div className="flex justify-center items-center">
          <FaGoogle size={30}/>
        </div>
        <p>or , signup using </p>
        <div className="flex justify-center items-center ">
          <button className="w-40 h-10 p-2 flex justify-center items-center bg-red-600 rounded-2xl">
            Sign Up
          </button>
        </div>
      </div>

   </div>
  );
}
