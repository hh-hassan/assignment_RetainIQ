import { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import TableHeader from './TableHeader';
import RowSection from './RowSection';

const RightPart = ({tableData}) => {
    
    const rows = useSelector((store) => store.table.table.length);

    const [rowsArr, setRowsArr] = useState(null);

    useEffect(() => {

        const currRowsArr = [];
    
        for (let i = 0; i < rows; i++) {
            currRowsArr.push(<RowSection key={i} r={i}/>);
        }
    
        setRowsArr(currRowsArr);
    
      }, [rows])
    
    return (
        <div className="flex-1 overflow-x-auto whitespace-nowrap scrollbar-hide">
            <TableHeader/>
            {rowsArr}
        </div>
    );
};

export default RightPart;