import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Draggable } from 'react-beautiful-dnd';
import { addCol} from '../../redux/tableSlice';
import ColBox from './ColBox';

const RowSection = ({r}) => {
    
    const dispatch = useDispatch();
    const cols = useSelector((store) => store.table.table?.[0]?.content.length);

    const [components, setComponents] = useState(null);

    useEffect(() => {

        const currComponent = [];

        for (let i = 0; i < cols; i++)  currComponent.push(<ColBox key={i} r={r} c={i}/>);

        setComponents(currComponent);

    }, [cols])
    
    return (

        <Draggable index={r} draggableId={`row-${r}`}>
        {
            (provided) => (    
                    
                    <div ref={provided.innerRef} {...provided.draggableProps} className="flex items-center">

                        <div className="flex justify-between">
                            {components}
                        </div>

                        <div className="flex justify-between">

                            <button 
                                className= "flex justify-center items-center bg-white text-3xl w-12 h-12 m-5 rounded-md border-2 border-gray-300" 
                                onClick={() => dispatch(addCol())}
                            >
                                +
                            </button>

                        </div>

                    </div>
                )
        }
        </Draggable>

    )
}

export default RowSection;