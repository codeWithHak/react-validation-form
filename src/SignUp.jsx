import { useState } from "react";
import Image from "./assets/front.jpg";
import Icon from "./assets/google-icon.webp";

function SignUp() {

    const [name,setName] = useState();
    const [email,setEmail] = useState(false);
    const [password,setPassword] = useState();
    const [emailError, setEmailError] = useState(false)
    const [nameError, setNameError] = useState(false)

    const handleName = (e) =>{
    let name = e.target.value
    if(name.length < 3){
    setNameError(true)
  }
    else{
    setNameError(false)
  }
}

  return (
  <div>
<section className=" flex bg-gradient-to-r from-[#005ae6] to-cyan-600 min-h-screen justify-center items-center">
    <div className="flex bg-blue-400 shadow-lg max-w-5xl p-5 rounded-xl items-center">
      <div className="md:w-1/2 px-8 text-gray-100">
    <h2 className="font-bold text-2xl ">Create Account</h2>
    <p className="text-sm mt-4">Enter your credentials to create a new account</p>
    <form className="flex flex-col gap-4  " action="">
      
    <input className="p-2 mt-8 rounded-sm text-black"
             type="text"
             name="name"
             placeholder="Full Name"
             value={name}
             onChange={handleName}
              />
             {nameError ? <span className="text-red-700 text-lg">Name Length must be greater than 2 characters</span>:""}
      <input className="p-2 rounded-sm text-black"
             type="email"
             name="email"
             placeholder="Email"
            />

       <input className="p-2 rounded-sm text-black"
              type="password"
              name="passowrd"
              placeholder="Passowrd"
              value={password}

               />
              <button className="bg-[#005ae6] rounded-xl py-2 text-white hover:scale-105 duration-300">Sign Up</button> 
    </form>

    <div className="mt-7 grid grid-cols-3 items-center text-gray-200">
      <hr className="border-gray-200"/>
      <p className="text-center">OR</p>
      <hr className="border-gray-200"/>
    </div>

    <button className="bg-white border py-2 w-full rounded-xl mt-5 text-black flex justify-center items-center text-sm hover:scale-105 duration-300">
    <img className="w-5 h-5 mr-3 "src={Icon} alt="" />
      Login With Google
    </button>
    
      </div>

      <div className="md:block hidden w-1/2  ">
      <img className=" rounded-2xl" src={Image} alt="image" />
      </div>

    </div>
</section>

  </div>
  )
}

export default SignUp