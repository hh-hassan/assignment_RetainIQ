import { useDispatch, useSelector } from 'react-redux';
import { Draggable } from 'react-beautiful-dnd';
import { deleteRow, selectButton } from '../../redux/tableSlice'
import { change, setLocation } from '../../redux/filterSlice';
import { FaTrash } from "react-icons/fa";
import { MdApps } from "react-icons/md";

const RowStart = ({ind}) => {
    
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setLocation(ind-1));
        dispatch(change());
    }

    const handleButton = (index) => {
        dispatch(selectButton({rowIndex: ind-1, butIndex: index}));
        dispatch(setLocation(ind-1));
        dispatch(change());
    }

    const filters = useSelector((store) => store.table.table?.[ind-1]?.filters);
    
    if(!filters) return;
    
    return ( 
        
        <Draggable index={ind-1} draggableId={`row-${ind-1}`}>
        {
            (provided, snapshot) => {
                
                const style = {
                    ...provided.draggableProps.style,
                    left: snapshot.isDragging ? "144px" : "",
                    width: "418px",
                };
                
                return(  
                    
                    <div ref={provided.innerRef} {...provided.draggableProps} style={style} className="flex items-center justify-between h-[200px]">
                                
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

                        <div className="group flex items-center justify-center mx-5 my-5 w-80 h-40 border-2 border-dashed border-gray-200 bg-white">   
                        {   
                            filters?.length===0?
                                
                                <button className="px-2 py-1 border-2 border-gray-100" onClick={handleClick}>+ Add Product Filters</button>
                                    :
                                        <div className="flex items-center justify-center rounded-md bg-white group-hover:border-2 group-hover:border-gray-200 group-hover:px-2 group-hover:w-[480px] group-hover:h-auto group-hover:z-5 group-hover:absolute group-hover:transition-all group-hover:duration-300 group-hover:translate-x-20">
                                            <div className="flex flex-wrap items-center justify-center rounded-md bg-white group-hover:border-2 group-hover:border-gray-100 group-hover:px-2 group-hover:py-1 group-hover:m-3">
                                                {
                                                    filters.map((f, index) => 
                                                    
                                                    <button 
                                                        key={index}
                                                        className={`border border-gray-200 m-1 p-1 text-sm rounded-md transition-colors duration-200 ${f.isSelected ? 'text-green-700 bg-green-50 border-green-400 font-semibold' : ''}`}
                                                        onClick={() => handleButton(index)}
                                                    >
                                                        {f.title}
                                                    </button>)
                                                }
                                            </div>
                                        </div>
                        }
                        </div>

                    </div>
                )
            }
        }
        </Draggable>
           
    )
}

export default RowStart;