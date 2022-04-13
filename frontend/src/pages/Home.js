import { Link } from 'react-router-dom'

export default function Home() {
	return (
		<div className='container mx-auto px-4 text-center'>
			<section className='mt-24 mb-12'>
				<h1 className='text-3xl'>What do you need help with?</h1>
				<p className='text-lg mt-2 text-gray-400 italic'>
					Please choose from an option below
				</p>
			</section>
			<Link to='/new-ticket'>
				<span className='bg-red-400 text-red-900 rounded py-2 px-3 hover:bg-red-300 uppercase transition ease-in-out duration-300 align-middle ml-4'>
					Create New Ticket
				</span>
			</Link>

			<Link to='/tickets'>
				<span className='bg-gray-400 text-gray-900 rounded py-2 px-3 hover:bg-gray-300 uppercase transition ease-in-out duration-300 align-middle ml-4'>
					View My Tickets
				</span>
			</Link>
		</div>
	)
}
