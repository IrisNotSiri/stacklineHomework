import React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

function SalesChart({ salesData }) {
	const monthMap = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
	const styles = {
		chartContainerStyle: {
			width: '100%',
			height: 300,
			paddingTop: '15px',
			paddingLeft: '15px'
		}
	}

	return (
		<div style={styles.chartContainerStyle}>
			<div>Retail Sales</div>
			<LineChart
				dataset={salesData}
				xAxis={[
					{
						id: 'Date',
						dataKey: 'weekEnding',
						scaleType: 'point',
						valueFormatter: (date) => monthMap[new Date(date).getUTCMonth()],
						tickMinStep: 28,
						tickInterval: (value, index) => {
							const currentMonth = new Date(value).getUTCMonth();
							const prevValue = index > 0 ? new Date(salesData[index - 1].weekEnding).getUTCMonth() : null;
							return prevValue !== currentMonth;
						}
					},
				]}
				leftAxis={null}
				series={[
					{
						id: 'Retail Sales',
						dataKey: 'retailSales',
						stack: 'total',
						showMark: false,
					},
					{
						id: 'Wholesale Sales',
						dataKey: 'wholesaleSales',
						stack: 'total',
						showMark: false,
					},
				]}
				height={300}
			/>
		</div>
	);
}

export default SalesChart;
