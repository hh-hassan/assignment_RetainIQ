import { createSlice } from '@reduxjs/toolkit';

const tableSlice = createSlice({
    
    name: 'table',
    
    initialState: {
        
        table: [
            { 
                filters: [
                    {title:"target men", isSelected: false}, 
                    {title:"categories shirts", isSelected: true}, 
                    {title:"brand adidas", isSelected: false}
                ],

                content: [{ imgId: null, imgTitle: null }] 
            },  
        ],

        addInProcess: false,
        deleteInProcess: false,
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
            state.table.splice(rowIndex, 1);
        },

        addCol: (state) => {
            state.table.forEach(row => {
                row.content.push({ imgId: null, imgTitle: null });
            });
        },

        deleteCol: (state, action) => {
            const colIndex = action.payload;
            state.table.forEach(row => {
                row.content.splice(colIndex, 1);
            });
        },

        updateBox: (state, action) => {
            const { rowIndex, colIndex, imgId, imgTitle } = action.payload;
            state.table[rowIndex].content[colIndex] = { imgId, imgTitle };
        },

        reorderRows: (state, action) => {
            const { sourceIndex, destinationIndex } = action.payload;
            const [removed] = state.table.splice(sourceIndex, 1);
            state.table.splice(destinationIndex, 0, removed);
        },

        updateFilters: (state, action) => {
            const { rowIndex, selectedOptions } = action.payload;
            state.table[rowIndex] = {
                ...state.table[rowIndex],
                filters: selectedOptions.map((title) => ({
                  title,
                  isSelected: true,
                })),
            };
        },

        selectButton: (state, action) => {
            const { rowIndex, butIndex } = action.payload;
            state.table[rowIndex].filters[butIndex].isSelected = !(state.table[rowIndex].filters[butIndex].isSelected);
        },
    },
});

export const { addRow, deleteRow, addCol, deleteCol, updateBox, reorderRows, updateFilters, selectButton } = tableSlice.actions;

export default tableSlice.reducer;