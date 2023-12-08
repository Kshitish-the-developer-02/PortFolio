import React from "react";
import html from "../assets/images/html.svg";
import css from "../assets/images/css.svg";
import js from "../assets/images/js.svg";
import expressjs from "../assets/images/expressjs.svg";
import nodejs from "../assets/images/nodejs.svg";
import react from "../assets/images/react.svg";
import tailwind from "../assets/images/tailwind.svg";
import github from "../assets/images/github.svg";
import vscode from "../assets/images/vscode.svg";

function Experience() {
    const techs=[
        {
            id:1,
            src:html,
            title:'HTML',
            style:'shadow-orange-500'
        },
        {
            id:2,
            src:css,
            title:'CSS',
            style:'shadow-blue-500'
        },
        {
            id:3,
            src:js,
            title:'JavaScript',
            style:'shadow-yellow-500'
        },
        {
            id:4,
            src:react,
            title:'React',
            style:'shadow-blue-500 '
        },
        {
            id:5,
            src:nodejs,
            title:'NodeJs',
            style:'shadow-green-500'
        },
        {
            id:6,
            src:expressjs,
            title:'ExpressJs',
            style:'shadow-pink-500 hover:bg-white hover:text-black hover:font-semibold'
        },
        {
            id:7,
            src:tailwind,
            title:'Tailwind',
            style:'shadow-sky-500'
        },
        {
            id:8,
            src:github,
            title:'Github',
            style:'shadow-gray-500'
        },
        {
            id:9,
            src:vscode,
            title:'VsCode',
            style:'shadow-blue-500'
        },
    ]
  return (
    <div className=" bg-gradient-to-b from-gray-800 to-black w-full h-full
    ">
      <div className=" max-w-screen-lg mx-auto  p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className=" text-4xl font-bold border-b-4 inline p-2 border-gray-500 ">Experience</p>
          <p className=" py-6">Thsese are the Technologies i've worked with</p>
        </div>

        <div className=" w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
             {
                 techs.map(({id,src,title,style})=>(
                    <div key={id} className={`shadow-md hover:scale-x-105 duration-500 py-2 rounded-lg ${style}`}>
                    <img src={src} alt="" className=" w-20 mx-auto " />
                    <p className=" mt-4">{title}</p>
                  </div>
                 ))
             }
       
        </div>
   
      </div>
    </div>
  );
}

export default Experience;
