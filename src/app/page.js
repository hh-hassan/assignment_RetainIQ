"use client";

import { useSelector, useDispatch} from "react-redux";
import { DragDropContext } from "react-beautiful-dnd";
import dynamic from 'next/dynamic';
import { addRow, reorderRows } from '../redux/tableSlice';
import DesignsContainer from "./components/DesignsContainer";

const LeftPart = dynamic(() => import('./components/LeftPart'), { ssr: false });
const RightPart = dynamic(() => import('./components/RightPart'), { ssr: false });

const Body = () => {

  const isOpen = useSelector((store) => store.design.isOpen);
  
  const dispatch = useDispatch();

  const onDragEnd = (result) => {
    
    const { destination, source } = result;

    if (!destination || destination.index === source.index) return;

    dispatch(reorderRows({
      sourceIndex: source.index,
      destinationIndex: destination.index
    }));

    //console.log

  };

  return (
  
    <div className="m-10 p-10 rounded-lg bg-slate-100">

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="relative flex">
          <LeftPart/>
          <RightPart/>
        </div>
      </DragDropContext>
      
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