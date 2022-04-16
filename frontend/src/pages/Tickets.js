import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTickets, reset } from '../features/tickets/ticketSlice'
import Spinner from '../components/Spinner'
import TicketItem from '../components/TicketItem'

export default function Tickets() {
	const { tickets, isLoading, isSuccess } = useSelector(
		(state) => state.tickets
	)

	const dispatch = useDispatch()

	useEffect(() => {
		return () => {
			if (isSuccess) {
				dispatch(reset())
			}
		}
	}, [dispatch, isSuccess])

	useEffect(() => {
		dispatch(getTickets())
	}, [dispatch])

	if (isLoading) {
		return <Spinner />
	}

	return (
		<div className='container mx-auto px-4 text-center'>
			<section className='mt-12 lg:mt-24 mb-12'>
				<h1 className='text-4xl'>Tickets</h1>
			</section>
			<table className='table-auto mx-auto'>
				<thead>
					<tr>
						<th>Date</th>
						<th>Product</th>
						<th>Status</th>
						<th></th>
					</tr>
				</thead>
				{tickets.map((ticket) => (
					<TicketItem key={ticket._id} ticket={ticket} />
				))}
			</table>
		</div>
	)
}
