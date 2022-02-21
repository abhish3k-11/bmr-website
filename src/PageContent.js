import React from "react";
import image from "../Images/Rectangle 7.png";
import upload from "../Images/Group 3.png";

function PageContent() {
    return(
        <>
        <div class="mt-9 ml-16">
            <h6 class="text-[#000000] text-[17px] font-normal tracking-wider text-left">Welcome</h6>
            <h1 class="text-[#000000] text-[27px] font-medium tracking-wider text-left">Abhishek</h1>
        </div>
        <div class="bg-[#FFFFFF] rounded-3xl absolute shadow-[17px_10px_39px_-21px_rgba(0,0,0,0.11)] w-[15rem] h-[18rem] left-[380px] top-[130px]">
    <div class="flex justify-end px-4 pt-4">
        
    </div>
    <div class="flex flex-col items-center">
        <img class="mb-3 w-[13rem] h-[8rem] bg-[#C4C4C4] rounded-3xl absolute opacity-[0.35] box-shadow-[0px_4px_17px_rgba(0, 0, 0, 0.11)" src={image}/>
        <img class="mt-6"  src={upload}/>
        <div class="flex mt-10 mb-12 space-x-3">
            <a href="#" class="inline-flex items-center text-sm font-['Poppins'] not-italic font-medium text-sm text-center text-[#4C4C4C] bg-cyan-400 w-24 h-24 rounded-full ml-8 mr-8">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
             Upload Image
            </a>
            <a href="#" class="inline-flex items-center py-2 px-4 text-sm font-['Poppins'] not-italic font-medium text-sm text-center text-[#4C4C4C] bg-cyan-400 w-24 h-24 rounded-full" style={{marginRight: "23px"}}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
             Use Camera
            </a>
        </div>
            <span class="w-[11] h-[2] mt-60 mb-1.5 absolute not-italic font-medium text-[14px] text-[#7B7B7B]" >Right Eye</span>
    </div>
</div>
</>
    )
}

export default PageContent;
