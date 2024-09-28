"use client";

import { useSelector } from "react-redux";
import Table from "./components/Table";
import NavBar from "./components/NavBar";
import DesignsContainer from "./components/DesignsContainer";
import { FaArrowLeft } from 'react-icons/fa';

const Body = () => {

  const isOpen = useSelector((store) => store.design.isOpen);

  return (
  
    <div className="flex bg-white">

      <NavBar/>

      <div className="ml-16 flex-1 overflow-auto">

        <div className="flex justify-between items-center mx-10 py-5 border-b-2 border-b-gray-200">
          
          <div className="flex items-center justify-between">
            <button className="m-2 p-1"><FaArrowLeft size={20} /></button>
            <div className="w-80 m-2 p-1 text-2xl border-b border-b-black font-bold">Test_3 Staging</div>
            <div className="flex justify-center items-center m-2 h-5 px-2 text-xs rounded-l-full rounded-r-full text-blue-600 border border-blue-600 bg-blue-100 font-semibold cursor-pointer">Primary feed</div>
          </div>

          <button className="bg-green-600 rounded-md text-sm text-white p-2">Publish Feed</button>

        </div>

        <Table/>

      </div>

      {isOpen && <DesignsContainer/>}

    </div>
  )
};

export default Body;