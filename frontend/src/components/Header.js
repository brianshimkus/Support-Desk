import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'

export default function Header() {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const { user } = useSelector((state) => state.auth)

	const onLogout = () => {
		dispatch(logout())
		dispatch(reset())
		navigate('/')
	}

	return (
		<header className='bg-slate-800 text-red-400 shadow'>
			<div className='container mx-auto py-4 flex px-4'>
				<div className='grow text-2xl'>
					<Link to='/'>Support Desk</Link>
				</div>
				<div>
					<ul className='flex'>
						{user ? (
							<li>
								<button
									onClick={onLogout}
									className='bg-gray-400 text-gray-900 rounded py-2 px-3 hover:bg-gray-300 uppercase transition ease-in-out duration-300 align-middle'>
									Log out
								</button>
							</li>
						) : (
							<>
								<ul className='flex'>
									<li>
										<Link
											to='/login'
											className='bg-gray-400 text-gray-900 rounded py-2 px-3 hover:bg-gray-300 uppercase transition ease-in-out duration-300 align-middle'>
											Login
										</Link>
									</li>
									<li>
										<Link
											to='/register'
											className='bg-red-400 text-red-900 rounded py-2 px-3 hover:bg-red-300 uppercase transition ease-in-out duration-300 align-middle ml-4'>
											Register
										</Link>
									</li>
								</ul>
							</>
						)}
					</ul>
				</div>
			</div>
		</header>
	)
}
