import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { createTicket, reset } from '../features/tickets/ticketSlice'
import Spinner from '../components/Spinner'

function NewTicket() {
	const { user } = useSelector((state) => state.auth)
	const { isLoading, isError, isSuccess, message } = useSelector(
		(state) => state.tickets
	)

	const [name] = useState(user.name)
	const [email] = useState(user.email)
	const [product, setProduct] = useState('iPhone')
	const [description, setDescription] = useState('')

	const dispatch = useDispatch()
	const navigate = useNavigate()

	useEffect(() => {
		if (isError) {
			toast.error(message)
		}

		if (isSuccess) {
			dispatch(reset())
			navigate('/tickets')
		}

		dispatch(reset())
	}, [dispatch, isError, isSuccess, navigate, message])

	const onSubmit = (e) => {
		e.preventDefault()
		dispatch(createTicket({ product, description }))
	}

	if (isLoading) {
		return <Spinner />
	}

	return (
		<div className='container mx-auto px-4 text-center'>
			<section className='mt-12 lg:mt-24 mb-12'>
				<h1 className='text-4xl'>Create New Ticket</h1>
				<p className='text-lg mt-2 text-gray-400 italic'>
					Please fill out the form below
				</p>
			</section>

			<section className='form'>
				<div className='mb-6'>
					<input
						type='text'
						className='bg-gray-400 text-slate-900 rounded p-4 w-full xl:w-1/2 transition ease-in-out duration-300 focus:outline-none focus:shadow-outline focus:bg-slate-400 placeholder-slate-300'
						value={name}
						disabled
					/>
				</div>
				<div className='mb-6'>
					<input
						type='text'
						className='bg-gray-400 text-slate-900 rounded p-4 w-full xl:w-1/2 transition ease-in-out duration-300 focus:outline-none focus:shadow-outline focus:bg-slate-400 placeholder-slate-300'
						value={email}
						disabled
					/>
				</div>
				<form onSubmit={onSubmit}>
					<div className='mb-6'>
						<select
							name='product'
							id='product'
							className='bg-slate-500 text-slate-900 rounded p-4 w-full xl:w-1/2 hover:bg-slate-400 transition ease-in-out duration-300 focus:outline-none focus:shadow-outline focus:bg-slate-400 placeholder-slate-300'
							value={product}
							onChange={(e) => setProduct(e.target.value)}>
							<option class='placeholder'>Choose Product</option>
							<option value='iPhone'>iPhone</option>
							<option value='Macbook Pro'>Macbook Pro</option>
							<option value='iMac'>iMac</option>
							<option value='iPad'>iPad</option>
						</select>
					</div>
					<div className='mb-6'>
						<textarea
							name='description'
							id='description'
							className='bg-slate-500 text-slate-900 rounded p-4 w-full xl:w-1/2 hover:bg-slate-400 transition ease-in-out duration-300 focus:outline-none focus:shadow-outline focus:bg-slate-400 placeholder-slate-300'
							placeholder='Description'
							value={description}
							onChange={(e) => setDescription(e.target.value)}></textarea>
					</div>
					<button className='bg-red-400 text-xl rounded p-4 w-full xl:w-1/2 text-red-900 uppercase hover:bg-red-300 transition ease-in-out duration-300'>
						Create Ticket
					</button>
				</form>
			</section>
		</div>
	)
}

export default NewTicket
