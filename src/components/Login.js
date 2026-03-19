import { useState } from "react";
import Header from "./Header";

const Login = () => {
    const [isSignInForm,setisSignInForm] = useState(true);
    const toggleform = ()=>{
        setisSignInForm(!isSignInForm)
    }
  return (
    <div>
      <Header />
      <div>
        <img className="absolute w-full" alt="name" src="https://media.istockphoto.com/id/2166463582/photo/media-concept-multiple-television-screens-smart-tv-digital-data-streaming.webp?a=1&b=1&s=612x612&w=0&k=20&c=7pZTVq87Us65BAt4unfEEfMRp4NJ2UwJYrMH7FuLJo0="></img>
      </div>
      <div>
        <form className="absolute w-3/12 mx-auto right-0 left-0 my-36 p-10 bg-black text-white bg-opacity-80 rounded">
            <h1 className="py-4 text-3xl font-bold">{isSignInForm ? "Sign In" :" Sign Up"}</h1>
            {!isSignInForm&&<input className="py-2 px-2 my-2 w-full bg-gray-700 rounded"  type="text" placeholder="Enter Name"/>}
            <input className="py-2 px-2 my-2 w-full bg-gray-700 rounded"  type="email" placeholder="Enter Email"/>
            <input className="py-2 px-2 my-2 w-full bg-gray-700 rounded"  type="password" placeholder="Enter Password"/>
            <button className="p-3 my-4 bg-red-800 w-full rounded"  type="submit">{isSignInForm ? "Sign In" :" Sign Up"}</button>
            <span  onClick={toggleform}>New to Netflix? Sign Up Now</span>
        </form>
      </div>
    </div>
  );
};

export default Login;
