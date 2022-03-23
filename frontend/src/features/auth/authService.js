import axios from 'axios'

const API_URL = '/api/users/'

// Register user
const register = async (userData) => {
	const res = await axios.post(API_URL, userData)

	if (res.data) {
		localStorage.setItem('user', JSON.stringify(res.data))
	}

	return res.data
}

// Log in user
const login = async (userData) => {
	const res = await axios.post(API_URL + 'login', userData)

	if (res.data) {
		localStorage.setItem('user', JSON.stringify(res.data))
	}

	return res.data
}

// Log out user
const logout = () => localStorage.removeItem('user')

export const authService = {
	register,
	logout,
	login,
}
