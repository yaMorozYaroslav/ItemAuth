import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {auth, register} from '../tools/api'

const initialState = {
	authData: [],
	status: 'idle',
	error: null
	}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		logout: state => state.authData = []
		},
	extraReducers(builder){
	  builder
		.addCase(signUp.fulfilled, (state, action) => {
			state.status = 'succeeded'
		    state.authData = state.authData.concat(action.payload)
			})
		}
	})
	
export const signUp = createAsyncThunk('user/signup', async (source) => {
	const response = await register(source)
	localStorage.setItem('profile', JSON.stringify({...response.data}))
	console.log(response.data)
	return response.data
	})
export const signIn = createAsyncThunk('user/signin', async (source) => {
	const response = await auth(source)
	localStorage.setItem('profile', JSON.stringify({...response.data}))
	console.log(response.data)
	return response.data
	})

export const {logout} = authSlice.actions

export default authSlice.reducer