import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFilters } from "../../redux/tableSlice";
import { change } from '../../redux/filterSlice';
import { AiOutlineClose } from 'react-icons/ai';

const FiltersContainer = () => {
    
    const dispatch = useDispatch();

    const filters = useSelector((store) => store.filter.filters);
    const row = useSelector((store) => store.filter.row);

    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleCheckboxChange = (title, option) => {
        
        const selected = `${title} ${option}`.toLowerCase();
      
        setSelectedOptions((prev) => {
          if (prev.includes(selected))  return prev.filter((item) => item !== selected);
          else  return [...prev, selected];
        });

    };

    const handleAdd = () => {
        dispatch(updateFilters({ rowIndex: row, selectedOptions: selectedOptions }));
        dispatch(change());
    };

    return (
      
      <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50" onClick={() => dispatch(change())}>
        
        <div className="bg-white p-8 rounded-lg shadow-lg w-1/2 text-center max-h-[90vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
          
            <div className="flex justify-end">
                <button className="" onClick={() => dispatch(change())}>
                    <AiOutlineClose size={24} />
                </button>
            </div>

            <div className="flex justify-between items-center py-5 border-b-2 border-b-gray-200">
                <div className="text-xl font-semibold">Select filters to add...</div>
            </div>

            <div className="flex text-left my-2">
                
                {filters[0].content.map((option, idx) => (
                                
                    <label key={idx} className="m-2 flex items-center">

                        <input
                            type="checkbox"
                            onChange={() => handleCheckboxChange(filters[0].title, option)}
                            className="h-4 w-4 rounded-full appearance-none border-2 border-gray-300 checked:bg-green-600"
                        />

                        <span className="m-2">{option}</span>

                    </label>

                ))}

            </div>
            
            <div className="flex justify-between">

                {filters.slice(1).map((filter, index) => (
                        
                        <div key={index}>
                        
                            <div className="text-orange-500 font-semibold">{filter.title}</div>
                            
                            {filter.content.map((option, idx) => (
                                
                                <label key={idx} className="flex justify-start items-center my-1">

                                    <input
                                        type="checkbox"
                                        onChange={() => handleCheckboxChange(filter.title, option)}
                                        className="mx-1 h-3 w-3 appearance-none border-2 border-gray-300 checked:bg-green-600"
                                    />

                                    <span>{option}</span>

                                </label>

                            ))}
                            
                        </div>
                ))}

            </div>

            <button onClick={handleAdd} className="bg-green-600 rounded-md text-white px-5 py-2">Add filters</button>
            
        </div>

      </div>

    );
  };
  
  export default FiltersContainer;