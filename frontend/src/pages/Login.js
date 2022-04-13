import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { FaSignInAlt } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { login, reset } from '../features/auth/authSlice'
import { useNavigate } from 'react-router-dom'
import Spinner from '../components/Spinner'

export default function Login() {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	})

	const { email, password } = formData

	const dispatch = useDispatch()
	const navigate = useNavigate()

	const { user, isLoading, isError, isSuccess, message } = useSelector(
		(state) => state.auth
	)

	useEffect(() => {
		if (isError) {
			toast.error(message)
		}

		// Redirect when logged in
		if (isSuccess || user) {
			navigate('/')
		}

		dispatch(reset())
	}, [isError, isSuccess, user, message, navigate, dispatch])

	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}))
	}

	const onSubmit = (e) => {
		e.preventDefault()

		const userData = {
			email,
			password,
		}

		dispatch(login(userData))
	}

	if (isLoading) {
		return <Spinner />
	}

	return (
		<div className='container mx-auto px-4 text-center'>
			<section className='mt-12 lg:mt-24 mb-12'>
				<h1 className='text-4xl'>Login</h1>
				<p className='text-lg mt-2 text-gray-400 italic'>
					Please log in to get support
				</p>
			</section>

			<section className='form'>
				<form onSubmit={onSubmit}>
					<div className='mb-6'>
						<input
							type='email'
							className='bg-slate-500 text-slate-900 rounded p-4 w-full xl:w-1/2 hover:bg-slate-400 transition ease-in-out duration-300 focus:outline-none focus:shadow-outline focus:bg-slate-400 placeholder-slate-300'
							id='email'
							name='email'
							value={email}
							onChange={onChange}
							placeholder='Enter your email'
							required
						/>
					</div>
					<div className='form-group'>
						<input
							type='password'
							className='bg-slate-500 text-slate-900 rounded p-4 w-full xl:w-1/2 hover:bg-slate-400 transition ease-in-out duration-300 focus:outline-none focus:shadow-outline focus:bg-slate-400 placeholder-slate-300'
							id='password'
							name='password'
							value={password}
							onChange={onChange}
							placeholder='Enter password'
							required
						/>
					</div>
					<div className='mt-6'>
						<button className='bg-red-400 text-xl rounded p-4 w-full xl:w-1/2 text-red-900 uppercase hover:bg-red-300 transition ease-in-out duration-300'>
							Log In
						</button>
					</div>
				</form>
			</section>
		</div>
	)
}
