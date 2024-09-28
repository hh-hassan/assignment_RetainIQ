import { useDispatch } from 'react-redux';
import { Draggable } from 'react-beautiful-dnd';
import { deleteRow} from '../../redux/tableSlice'
import { FaTrash } from "react-icons/fa";
import { MdApps } from "react-icons/md";

const RowStart = ({ind}) => {
    
    const dispatch = useDispatch();
    
    return ( 
        
        <Draggable index={ind-1} draggableId={`row-${ind-1}`}>
        {
            (provided) => (
                    
                    <div ref={provided.innerRef} {...provided.draggableProps} className="flex items-center justify-between">
                                
                        <div className="flex items-center justify-centre h-40 border-r-2 border-r-gray-200 p-2">
                            
                            <div className="group cursor-pointer">
                            
                                <div className="flex items-center justify-center p-1">
                                    <FaTrash className=" text-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" onClick={() => dispatch(deleteRow(ind-1))}/>
                                </div>

                                <div {...provided.dragHandleProps} className="flex items-center justify-between">
                                    <div className="text-3xl font-bold">{ind}</div>
                                    <MdApps size={24} color="black" />
                                </div>
                            
                            </div>

                        </div>


                        <div className="flex justify-center items-center mx-5 my-5 w-80 h-40 border-2 border-dashed border-gray-200 bg-white">
                            <button className="px-2 py-1 border-2 border-gray-100">+ Add Product Filters</button>
                        </div>

                    </div>
                )
        }
        </Draggable>
           
    )
}

export default RowStart;