import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateBox } from "../../redux/tableSlice";
import { change } from '../../redux/designSlice';
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai';

const DesignsContainer = () => {
    
    const dispatch = useDispatch();

    const designs = useSelector((store) => store.design.designs);
    const location = useSelector((store) => store.design.location);

    const [filteredDesigns, setFilteredDesigns] = useState(designs);

    const handleSearch = () => {
        const newDesigns = designs.filter(design => design.imgTitle.toLowerCase().includes(search.current.value.toLowerCase()));
        setFilteredDesigns(newDesigns);
    };

    const handleInsert = (img, title) => {
        dispatch(updateBox({ rowIndex: location.row, colIndex: location.col, imgId: img, imgTitle: title }));
        dispatch(change());
    }

    const search = useRef(null);
    
    return (
      
      <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50" onClick={() => dispatch(change())}>
        
        <div className="bg-white p-8 rounded-lg shadow-lg w-1/2 text-center max-h-[90vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
          
            <div className="flex justify-end">
                <button className="" onClick={() => dispatch(change())}>
                    <AiOutlineClose size={24} />
                </button>
            </div>

            <div className="flex justify-between items-center py-5 border-b-2 border-b-gray-200">
                
                <div className="text-xl font-semibold">Select a design to link</div>

                <div className="flex items-center border-2 border-slate-400 rounded-lg p-2">
                    
                    <div><AiOutlineSearch size={24} /></div>

                    <input
                        ref={search}
                        type="text"
                        className="outline-none px-2"
                        onChange={handleSearch}
                        placeholder="Search..."
                    />

                </div>

            </div>

            <div className="flex flex-wrap justify-between">
                
                {filteredDesigns.map((design, index) => (
                    
                    <div key={index} className="group relative border border-gray-200 rounded-lg w-40 m-2 p-2">
                        
                        <img src={design.imgId} alt={design.imgTitle} className="w-full h-36 rounded-lg" />

                        <button 
                            className="absolute top-16 right-[50px] bg-white rounded-md px-2 py-1 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            onClick={() => handleInsert(design.imgId, design.imgTitle)}
                        >
                            Insert
                        </button>

                        <div className="text-center font-semibold mt-2">{design.imgTitle}</div>

                    </div>

                ))}

            </div>
            
        </div>

      </div>

    );
  };
  
  export default DesignsContainer;