import { createSlice } from '@reduxjs/toolkit';

const tableSlice = createSlice({
    
    name: 'table',
    
    initialState: {
        table: [
            { filters: [{title:"Product collection", isSelected: false}, {title:"contains", isSelected: true}, {title:"Anarkali Kurtas", isSelected: false}], 
            content: [{ imgId: null, imgTitle: null }] },  
        ],
    },

    reducers: {
       
        addRow: (state) => {
            
            const newRow = {
                filters: [],
                content: [],
            };
        
            if (state.table.length === 0) {
                newRow.content.push({
                    imgId: null,
                    imgTitle: null,
                });
            } 
            
            else {
                newRow.content = Array.from({ length: state.table[0].content.length }, () => ({
                    imgId: null,
                    imgTitle: null,
                }));
            }
        
            state.table.push(newRow);
        },
        
        deleteRow: (state, action) => {
            const rowIndex = action.payload;
            if (rowIndex >= 0 && rowIndex < state.table.length) {
                state.table.splice(rowIndex, 1);
            }
        },

        addCol: (state) => {
            state.table.forEach(row => {
                row.content.push({ imgId: null, imgTitle: null });
            });
        },

        deleteCol: (state, action) => {
            const colIndex = action.payload;
            if (colIndex >= 0 && colIndex < state.table[0].content.length) {
                state.table.forEach(row => {
                    row.content.splice(colIndex, 1);
                });
            }
        },

        updateBox: (state, action) => {
            const { rowIndex, colIndex, imgId, imgTitle } = action.payload;
            if (
                rowIndex >= 0 && rowIndex < state.table.length &&
                colIndex >= 0 && colIndex < state.table[rowIndex].content.length
            ) {
                state.table[rowIndex].content[colIndex] = { imgId, imgTitle };
            }
        },

        reorderRows: (state, action) => {
            const { sourceIndex, destinationIndex } = action.payload;
            const [removed] = state.table.splice(sourceIndex, 1);
            state.table.splice(destinationIndex, 0, removed);
        },

        selectButton: (state, action) => {
            const { rowIndex, butIndex } = action.payload;
            state.table[rowIndex].filters[butIndex].isSelected = !(state.table[rowIndex].filters[butIndex].isSelected);
        },

    },
});

export const { addRow, deleteRow, addCol, deleteCol, updateBox, reorderRows, selectButton } = tableSlice.actions;

export default tableSlice.reducer;