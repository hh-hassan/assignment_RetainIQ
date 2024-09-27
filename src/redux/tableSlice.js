import { createSlice } from '@reduxjs/toolkit';

const tableSlice = createSlice({
    
    name: 'table',
    
    initialState: {
        table: [
            { title: null, content: [{ imgId: null, imgTitle: null }] },
            
        ],
    },

    reducers: {
       
        addRow: (state) => {
            const newRow = {
                title: `Title ${state.table.length + 1}`,
                content: Array.from({ length: state.table[0].content.length }, () => ({
                    imgId: null,
                    imgTitle: null,
                })),
            };
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
            state.table.splice(destinationIndex, 0, removed); // Insert in new position
        },

    },
});

export const { addRow, deleteRow, addCol, deleteCol, updateBox, reorderRows } = tableSlice.actions;

export default tableSlice.reducer;