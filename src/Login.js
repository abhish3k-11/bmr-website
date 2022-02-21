import React from "react";
import google from "../Images/google.png";

function Login() {
    return(
        <>
       <div class="flex items-center justify-center min-h-screen bg-[#E5E5E5]">
    <div class="px-8 py-6 mt-4 bg-[#FAFAFA] shadow-lg w-[28rem] h-[31rem] rounded-[60px]">
        <p class="w-[33.6rem] h-[3rem] mt-4 ml-2 font-black text-lg text-[#3D3D3D] text-left">Nice to see you again</p>
        <form action="">
            <div class="mt-4">
                <div>
                    <label class="block text-left font-semibold text-[15px] ml-9 text-[#4B4B4B]" for="email">Login</label>
                            <input type="text" placeholder="Email or phone number" class="w-[22rem] h-[2.5rem] px-4 py-2 mt-2 border rounded-[6px] text-[13px] text-[#A6A6A6] bg-[#E9E9E9] font-normal tracking-wider" />
                </div>
                <div class="mt-4">
                    <label class="block text-left font-semibold text-[15px] ml-8 text-[#4B4B4B]">Password</label>
                            <input type="password" placeholder="Enter Password" class="w-[22rem] h-[2.5rem] px-4 py-2 mt-2 border rounded-[6px] text-[13px] text-[#A6A6A6] bg-[#E9E9E9] font-normal tracking-wider"/>
                </div>
                <div class="flex items-baseline justify-between mt-3">
                    <p class="text-[10px] text-[#4B4B4B] font-normal tracking-wide ml-5">Remember me</p>
                    <a href="#" class="text-[10px] text-[#6BE1F4] tracking-wide hover:underline">Forgot password?</a>
                </div>
                <div class="grid grid-cols-1 divide-y" >
                <div>
                <button class="w-[22rem] h-[2.5rem] px-6 py-2 mt-4 mb-4 text-[#F7F7F7] text-[15px] font-medium tracking-wide bg-[#007AFF] rounded-[6px] ">Sign in</button>
                </div>
                <div class="">
                <button class="w-[22rem] h-[2.5rem] px-6 py-2 mt-4 text-[#FFFFFF] text-[14px] font-normal tracking-wide bg-[#333333] rounded-[6px] "><img src={google} />Or sign in with google</button>
                </div>
                </div>
                <div class="flex items-baseline justify-between text-center mt-5">
                    <p class="text-[10px] text-[#000000] ml-20">Do you have an account?</p>
                    <a href="#" class="text-[10px] text-[#007AFF] mr-28 hover:underline">Sign up now</a>
                </div>
            </div>
        </form>
    </div>
</div>
</>
    )
}

const DashboardIconSvg = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-10" viewBox="0 0 20 20" fill="#6366f1">
    <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
  </svg>
  );
  

export default Login;