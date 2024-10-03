"use client";

import { useEffect, useRef } from 'react';
import { useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Table from "./components/Table";
import NavBar from "./components/NavBar";
import FiltersContainer from './components/FiltersContainer';
import DesignsContainer from "./components/DesignsContainer";
import { FaArrowLeft } from 'react-icons/fa';

const Body = () => {

  const isFilterOpen = useSelector((store) => store.filter.isFilterOpen);
  
  const isDesignOpen = useSelector((store) => store.design.isDesignOpen);

  const rows = useSelector((state) => state.table.table.length);
  const cols = useSelector((state) => state.table?.table?.[0]?.content.length);

  const prevRowCount = useRef(rows);
  const prevColCount = useRef(cols);

  useEffect(() => {

    if (prevRowCount.current !== rows) {
      
      if (prevRowCount.current < rows) toast.success('State added!');
      else toast.success('State removed!');

      prevRowCount.current = rows;
    }

    if (prevColCount.current !== cols) {
      
      if (prevColCount.current < cols) toast.success('Variant added!');
      else toast.success('Variant removed!');

      prevColCount.current = cols;
    }

  }, [rows, cols]);

  return (
  
    <div className="relative flex bg-white">

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

      {isDesignOpen && <DesignsContainer/>}

      {isFilterOpen && <FiltersContainer/>}

      <ToastContainer 
        position="top-center"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
        pauseOnHover
        closeButton={false}
        className="absolute flex flex-col justify-center items-center w-44"
      />

    </div>
    
  );
};

export default Body;