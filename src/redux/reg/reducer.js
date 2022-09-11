import { createSlice} from '@reduxjs/toolkit';

const regSlice = createSlice({
    name: 'reg',
    initialState : {
        fullName: null,
        age: 0,
        email: null,
        date: null,
        address: null,
        timespan: null
    },
    reducers: {
        sendRegData: (state, action) => {
            state.fullName = action.payload.fullName;
            state.age = action.payload.age;
            state.email = action.payload.email;
            state.date = action.payload.date;
            state.address = action.payload.address;
            state.timespan = action.payload.timespan;
        }
    }
});

export const {sendRegData}  = regSlice.actions;
export default regSlice.reducer;