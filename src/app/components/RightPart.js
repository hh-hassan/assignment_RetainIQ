import { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { Droppable } from 'react-beautiful-dnd';
import TableHeader from './TableHeader';
import RowSection from './RowSection';

const RightPart = () => {
    
    const rows = useSelector((store) => store.table.table.length);

    const [rowsArr, setRowsArr] = useState(null);

    useEffect(() => {

        const currRowsArr = [];
    
        for (let i = 0; i < rows; i++)  currRowsArr.push(<RowSection key={i} r={i}/>);
    
        setRowsArr(currRowsArr);
    
    }, [rows])
    
    return (
        
        <div className="flex-1 overflow-x-auto whitespace-nowrap scrollbar-hide">
            
            <TableHeader/>
            
            <Droppable droppableId="droppable-1">
            {
                (provided) => (
                        
                        <div ref={provided.innerRef} {...provided.droppableProps}>
                            {rowsArr}
                            {provided.placeholder}
                        </div>
                    )
            }
            </Droppable>
            
        </div>
    );
};

export default RightPart;