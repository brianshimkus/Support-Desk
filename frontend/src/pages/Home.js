import { Link } from 'react-router-dom'

export default function Home() {
	return (
		<div className='container mx-auto px-4 text-center'>
			<section className='mt-12 lg:mt-24 mb-12'>
				<h1 className='text-4xl'>What do you need help with?</h1>
				<p className='text-lg mt-2 text-gray-400 italic'>
					Please choose from an option below
				</p>
			</section>
			<Link to='/new-ticket'>
				<span className='bg-red-400 text-red-900 rounded p-4 hover:bg-red-300 uppercase transition ease-in-out duration-300 align-middle text-xl block lg:inline'>
					Create New Ticket
				</span>
			</Link>

			<Link to='/tickets'>
				<span className='bg-gray-400 text-gray-900 rounded p-4 hover:bg-gray-300 uppercase transition ease-in-out duration-300 align-middle ml-0 lg:ml-8 text-xl block lg:inline mt-6 lg:mt-0'>
					View My Tickets
				</span>
			</Link>
		</div>
	)
}
