import { createSlice } from '@reduxjs/toolkit';

const designSlice = createSlice({
    
    name: 'design',
    
    initialState: {
        
        isDesignOpen: false,

        location: null,

        designs: [
            { imgId: "https://image.tmdb.org/t/p/w780/58QT4cPJ2u2TqWZkterDq9q4yxQ.jpg", imgTitle: "The Crow" },
            { imgId: "https://image.tmdb.org/t/p/w780/AjV6jFJ2YFIluYo4GQf13AA1tqu.jpg", imgTitle: "It Ends with Us" },
            { imgId: "https://image.tmdb.org/t/p/w780/wWba3TaojhK7NdycRhoQpsG0FaH.jpg", imgTitle: "Despicable Me 4" },
            { imgId: "https://image.tmdb.org/t/p/w780/lZGOK0I2DJSRlEPNOAFTSNxSjDD.jpg", imgTitle: "Blink Twice" },
            { imgId: "https://image.tmdb.org/t/p/w780/865DntZzOdX6rLMd405R0nFkLmL.jpg", imgTitle: "Borderlands" },
            { imgId: "https://image.tmdb.org/t/p/w780/zQc1PITqFxZDbEmHlQgO5Mxc4Od.jpg", imgTitle: "The Substance" },
            { imgId: "https://image.tmdb.org/t/p/w780/kKgQzkUCnQmeTPkyIwHly2t6ZFI.jpg", imgTitle: "Beetlejuice" },
            { imgId: "https://image.tmdb.org/t/p/w780/gUREuXCnJLVHsvKXDH9fgIcfM6e.jpg", imgTitle: "Afraid" },
            { imgId: "https://image.tmdb.org/t/p/w780/rEaJSXAlNfdhRpDHiNcJsoUa9qE.jpg", imgTitle: "Officer Black Belt" },
            { imgId: "https://image.tmdb.org/t/p/w780/qbkAqmmEIZfrCO8ZQAuIuVMlWoV.jpg", imgTitle: "Transformers One" },
        ]
    },

    reducers: {
       
        change: (state) => {
            if(state.isDesignOpen) state.location = null;
            state.isDesignOpen = !state.isDesignOpen;
        },

        setLocation: (state, action) => {
            state.location = action.payload;
        }
       
    },
});

export const { change, setLocation } = designSlice.actions;

export default designSlice.reducer;