import { Link } from 'react-router-dom'

export default function TicketItem({ ticket }) {
	return (
		<tbody className='ticket'>
			<tr>
				<td className='w-1/4'>
					{new Date(ticket.createdAt).toLocaleString('en-US')}
				</td>
				<td className='w-1/4'>{ticket.product}</td>
				<td className={`w-1/4 status status-${ticket.status}`}>
					{ticket.status}
				</td>
				<td className='w-1/4'>
					<Link to={`/ticket/${ticket._id}`} className='btn btn-reverse btn-sm'>
						View
					</Link>
				</td>
			</tr>
		</tbody>
	)
}
