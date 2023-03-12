import {AiOutlineComment} from "react-icons/ai";
import * as React from "react";

export default function BoostingTab() {
	const [clickedRowId, setClickedRowId] = React.useState(null);
	const [tableData, setTableData] = React.useState([
		{
			order: 1,
			game: 'Lol',
			match_quantity: 21,
			win_rate: '80%',
			game_complete: 21,
			remainder: 21,
			compensation: 21,
			role: 'ADC',
			status: 'Devam Ediyor',
			message_count: '1',
		},
		{
			order: 2,
			game: 'Lol',
			match_quantity: 21,
			win_rate: '80%',
			game_complete: 21,
			remainder: 21,
			compensation: 21,
			role: 'ADC',
			status: 'Bitti',
			message_count: '0',
		},
		{
			order: 3,
			game: 'Lol',
			match_quantity: 21,
			win_rate: '80%',
			game_complete: 21,
			remainder: 21,
			compensation: 21,
			role: 'ADC',
			status: 'Bitti',
			message_count: '0',
		},
		{
			order: 4,
			game: 'Lol',
			match_quantity: 21,
			win_rate: '80%',
			game_complete: 21,
			remainder: 21,
			compensation: 21,
			role: 'ADC',
			status: 'Devam Ediyor',
			message_count: '1',
		},
	]);
	const [isToggled, setIsToggled] = React.useState(false);
	const handleClicked = (id) => {
		const newTableData = tableData.map((item) => {
			if (item.order === id) {
				const newTable = clickedRowId === id ? 'Devam Ediyor' : 'Durduruldu';
				setClickedRowId(clickedRowId == id ? null : id);
				return {...item, status: newTable};
			}
			return item;
		});
		setTableData(newTableData);
	}
	return (
		<>
			<h3 className='text-white text-xl'>Boosting</h3>
			<p className="!text-md pt-1 pb-10">Sipariş rank ilerlemenizi buradan görebilirsiniz.</p>
			<div class="overflow-x-auto">
				<table className="min-w-full  text-sm">
					<thead>
					<tr>
						<th className="whitespace-nowrap uppercase px-4 py-2 text-left"></th>
						<th className="whitespace-nowrap uppercase px-4 py-2 text-left font-bold text-white">Oyun</th>
						<th className="whitespace-nowrap uppercase px-4 py-2 text-left font-bold text-white">Maç
							Sayısı
						</th>
						<th className="whitespace-nowrap uppercase px-4 py-2 text-left font-medium text-white">Win
							Rate
						</th>
						<th className="whitespace-nowrap uppercase px-4 py-2 text-left font-bold text-white">Oynanan</th>
						<th className="whitespace-nowrap uppercase px-4 py-2 text-left font-bold text-white">Kalan</th>
						<th className="whitespace-nowrap uppercase px-4 py-2 text-left font-bold text-white">Telafi</th>
						<th className="whitespace-nowrap uppercase px-4 py-2 text-left font-bold text-white">Role</th>
						<th className="whitespace-nowrap uppercase px-4 py-2 text-left font-bold text-white">Durum</th>
						<th className="whitespace-nowrap uppercase px-4 py-2 text-left"></th>
					</tr>
					</thead>

					<tbody class="divide-y divide-[#686868]">
					{
						tableData.map((item, index) => {
							return (
								<tr key={item.order} className='leading-10 !border-color-[#686868]'>
									<td className="whitespace-nowrap px-4 py-2 text-normal font-medium text-[#a4a4a4]">
										Sipariş #{item.order}
									</td>
									<td className="whitespace-nowrap px-4 py-2 text-[#a4a4a4]">{item.game}</td>
									<td className="whitespace-nowrap px-4 py-2 text-[#a4a4a4]">{item.match_quantity}</td>
									<td className="whitespace-nowrap px-4 py-2 text-[#a4a4a4]">{item.win_rate}</td>
									<td className="whitespace-nowrap px-4 py-2 text-[#a4a4a4]">{item.game_complete}</td>
									<td className="whitespace-nowrap px-4 py-2 text-[#a4a4a4]">{item.remainder}</td>
									<td className="whitespace-nowrap px-4 py-2 text-[#a4a4a4]">{item.compensation}</td>
									<td className="whitespace-nowrap px-4 py-2 text-[#a4a4a4]">{item.role}</td>
									<td className="whitespace-nowrap px-4 py-2 text-[#a4a4a4]">
										{clickedRowId === item.order ? 'Durduruldu' : item.status}
									</td>
									<td className="whitespace-nowrap px-4 py-2 text-[#a4a4a4] flex justify-between items-center">
										<button
											className={`inline-block rounded-full bg-[#0028f2] px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700
													${item.status === 'Bitti' ? 'hidden' : ''}
											`}
											onClick={() => handleClicked(item.order)}
										>
											{clickedRowId === item.order ? 'Devam Et' : 'Durdur'}
										</button>
										<div
											className=' relative inline-block'>
									<span
										className='bg-[#ed8e07] rounded-full h-7 w-7 flex items-center justify-center'>
										<AiOutlineComment
											className='text-white'/>
									</span>

											<span
												className={`
													absolute top-0 right-0  px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full
														${item.message_count < 1 ? 'hidden' : 'inline-flex  items-center justify-center'}
													`}>{item.message_count}</span>
										</div>

									</td>
								</tr>
							)
						})
					}
					</tbody>
				</table>
			</div>
		</>
	)
}