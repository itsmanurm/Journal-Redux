
import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'not-authenticated', // 'not-authenticated'. 'authenticated'
        uid: null,
        email: null,
        displayname: null,
        photoURL: null,
        errorMessage: null,
    },
    reducers: {
        login: ( state, {payload} ) => {

            state.status= 'authenticated'; // 'not-authenticated'. 'authenticated'
            state.uid= payload.uid;
            state.email= payload.email;
            state.displayname= payload.displayname;
            state.photoURL= payload.photoURL;
            state.errorMessage= payload.errorMessage;

        },
        logout: ( state, { payload } ) => {
            state.status= 'not-authenticated'; // 'not-authenticated'. 'authenticated'
            state.uid= null;
            state.email= null;
            state.displayname= null;
            state.photoURL= null;
            state.errorMessage= payload.errorMessage;

        },
        checkingCredenctials: ( state ) => {
            state.status = 'checking';

        },
    }
});


// Action creators are generated for each case reducer function
export const { login, logout, checkingCredenctials } = authSlice.actions; 