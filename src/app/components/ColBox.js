// import { useEffect, useRef } from 'react';
import { useDispatch, useSelector} from "react-redux";
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { change, setLocation } from '../../redux/designSlice';
import { AiOutlineEdit } from 'react-icons/ai';

const ColBox = ({r, c}) => {

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setLocation({row: r, col:c}));
        dispatch(change());
    }

    const data = useSelector((store) => store.table.table?.[r]?.content?.[c]);

    // const id = useSelector((store) => store.table.table?.[r]?.content?.[c]?.imgId);
    // const prevId = useRef(id);
    // useEffect(() => {
        
    //     if (prevId.current !== id) 
    //     {
    //         toast.success('Variant template updated!');
    //         prevId.current = id;
    //     }

    // }, [id]);
    
    return (
        
        <div className="border-x border-x-gray-300 w-52 h-40 my-5 flex justify-center items-center">
            
            <div className="flex justify-center items-center bg-white h-40 w-40 m-auto p-2 rounded-md">
                
                {data?.imgTitle ? 
                
                    (
                        <div className="group relative">
                            <img src={data.imgId} alt={data.imgTitle} className="w-36 h-[130px] rounded-md" />
                            <button onClick={handleClick} className="absolute top-12 left-[50px] bg-white px-3 py-2 rounded-md cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300"><AiOutlineEdit size={24} /></button>
                            <div className="text-center">{data.imgTitle}</div>
                        </div>
                    ) : 
                    
                    (
                        <button 
                            className="px-2 py-1 border-2 border-gray-100"
                            onClick={handleClick}
                        >
                            + Add design
                        </button>
                    )}

            </div>

            {/* <ToastContainer 
                position="top-center"
                autoClose={2000}
                hideProgressBar={true}
                newestOnTop={true}
                closeOnClick
                pauseOnHover
                closeButton={false}
                className="absolute flex flex-col justify-center items-center w-60"
            /> */}

        </div>
        
    )
}

export default ColBox;