import { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { Droppable } from 'react-beautiful-dnd';
import RowStart from './RowStart';

const LeftPart = () => {

    const rows = useSelector((store) => store.table.table.length);

    const [startArr, setStartArr] = useState(null);

    useEffect(() => {

        const currStartArr = [];
    
        for (let i = 0; i < rows; i++)  currStartArr.push(<RowStart key={i} ind={i+1} />);

        setStartArr(currStartArr);
    
    }, [rows])
    
    return (
        
        <div className="relative z-10">

            <div className="flex justify-center items-center ml-20 mr-2 my-5 w-80 h-12 font-semibold text-slate-500">
                Product filter
            </div>

            <Droppable droppableId="droppable-1">
            {
                (provided) => ( 
                        <div ref={provided.innerRef} {...provided.droppableProps} className="w-[418px]">
                            {startArr}
                            {provided.placeholder}
                        </div>
                    )  
            }
            </Droppable>

        </div>
    )
}

export default LeftPart;