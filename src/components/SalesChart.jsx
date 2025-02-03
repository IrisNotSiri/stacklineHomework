import React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

function SalesChart({ salesData }) {
	const monthMap = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
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
			<div>Retails Sales</div>
			<LineChart
				dataset={salesData}
				xAxis={[
					{
						id: 'Date',
						dataKey: 'weekEnding',
						scaleType: 'point',
						valueFormatter: (date) => monthMap[new Date(date).getUTCMonth()],
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
