import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { FaTrashAlt } from 'react-icons/fa';
import { deleteCol } from '../../redux/tableSlice';

const TableHeader = () => {
    
    const dispatch = useDispatch();
    const cols = useSelector((store) => store.table.table[0].content.length);

    const [titles, setTitles] = useState(null);

    useEffect(() => {

        const currTitles = [];

        for (let i = 0; i < cols; i++) {
            currTitles.push(
                <div className="group flex justify-center hover:justify-between items-center border-x border-x-gray-300 my-5 hover:px-3 py-1  w-52 h-12">
                    <div>{i===0? "Primary Variant" : `Variant ${i+1}`}</div>
                    <div onClick={() => dispatch(deleteCol(i))}><FaTrashAlt className="text-red-500 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={20} /></div>
                </div>
            );
        }

        setTitles(currTitles);

    }, [cols])
    
    return (

        <div className="flex items-center">

            <div className="flex justify-between">
                {titles}
            </div>

        </div>
               
    );
}

export default TableHeader;