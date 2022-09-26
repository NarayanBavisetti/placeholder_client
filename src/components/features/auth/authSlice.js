import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authService from './authServices';

const data = JSON.parse(localStorage.getItem('data'));
const token = JSON.parse(localStorage.getItem('token'));

const initialState = {
	data: data ? {data} : null,
    token:token ? {token} : null,
	isSuccess: false,
	isError: false,
	isLoading: false,
    message:''
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		reset: (state) => {
			state.isLoading = false;
			state.isError = false;
			state.isSuccess = false;
            state.message = ''
		},
	},
	extraReducers: (builder) => {
       builder.addCase(signUpUser.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(signUpUser.fulfilled,(state,action) =>{
            state.isLoading = false
            state.isSuccess = true
            state.data = action.payload
        })
        .addCase(signUpUser.rejected,(state,action) => {
            state.isError= true
            state.isLoading = false
            state.data = null
            state.message = action.payload
        })
        .addCase(logout.fulfilled,(state) => {
             state.data = null
        })
    },
});

export const signUpUser = createAsyncThunk('/signup',
async(user,thunkAPI) => {
    try{
        return await authService.signUpUser(user)
    }catch(error){
        console.log(error)
        const message = (error.response && error.response.data && error.response.data.message) ||
        error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
}
)

export const logout = createAsyncThunk('/logout',
async () => {
    await authService.logout()
}
)

export const {reset} = authSlice.actions

export default authSlice.reducer