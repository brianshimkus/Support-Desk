import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { authService } from './authService'

const initialState = {
	user: null,
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: '',
}

// Register new user
export const register = createAsyncThunk(
	'auth/register',
	async (user, thunkAPI) => {
		try {
			return await authService.register(user)
		} catch (err) {
			const message =
				(err.res && err.res.data && err.res.data.message) ||
				err.message ||
				err.toString()

			return thunkAPI.rejectWithValue(message)
		}
	}
)

// Login user
export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
	console.log(user)
})

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers: (builder) => {},
})

export default authSlice.reducer
