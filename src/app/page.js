"use client";

import { useSelector, useDispatch} from "react-redux";
import { addRow } from '../redux/tableSlice';
import LeftPart from "./components/LeftPart";
import RightPart from './components/RightPart';
import DesignsContainer from "./components/DesignsContainer";

const Body = () => {

  const isOpen = useSelector((store) => store.design.isOpen);
  
  const dispatch = useDispatch();

  return (
  
    <div className="m-10 p-10 rounded-lg bg-slate-100">

      <div className="relative flex">
        <LeftPart/>
        <RightPart/>
      </div>
  
      <button 
        className= "flex justify-center items-center bg-white text-3xl w-12 h-12 rounded-md border-2 border-gray-300" 
        onClick={() => dispatch(addRow())}
      >
        +
      </button>

      {isOpen && <DesignsContainer/>}
    
    </div>
  )
};

export default Body;