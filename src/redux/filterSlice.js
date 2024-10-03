import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
    
    name: 'filter',
    
    initialState: {
        
        isFilterOpen: false,

        row: null,

        filters: [
            { title: "target", content: ["Men", "Women", "Boys", "Girls"] },
            { title: "CATEGORIES", content: ["Tshirts", "Sarees", "Shirts", "Dresses", "Kurtas", "Tops"]},
            { title: "BRAND", content: ["Aura", "Allen Solly", "Aurelia", "Adidas", "Biba", "Cantabil"] },
            { title: "PRICE", content: ["under ₹1000", "betweeen ₹1000 & ₹3000", "betweeen ₹3000 & ₹5000", "betweeen ₹5000 & ₹10000", "above ₹10000"] },
            { title: "COLOR", content: ["Black", "Blue", "White", "Green", "Pink", "Grey", "Red"]},
        ]
    },

    reducers: {
       
        change: (state) => {
            if(state.isFilterOpen) state.row = null;
            state.isFilterOpen = !state.isFilterOpen;
        },

        setLocation: (state, action) => {
            state.row = action.payload;
        }
       
    },
});

export const { change, setLocation } =filterSlice.actions;

export default filterSlice.reducer;