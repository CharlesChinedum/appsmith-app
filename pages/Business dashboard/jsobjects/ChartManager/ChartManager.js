export default {
	getBarChart: () => {
		const dataSource = {
			chart: {
				yaxisname: "Number (in Units)",
				palettecolors: "#5A38FD",
				theme: "fusion"
			},
			data: [
				{
					"label": "Successful deployments",
					"value": JSObject1.getSuccesfulDeployments()
				},
				{
					"label": "Failed deployments",
					"value": JSObject1.getFailedDeplyments()
				}
			]
		};
		return ({
			type: "column2d",
			dataFormat: 'json',
			dataSource
		});
	},
	getPieChart: () => {
		const dataSource = {
			chart: {
				palettecolors: "#5A38FD, #2ec4b6",
				theme: "fusion"
			},
			data: [
				{
					"label": "Successful deployments",
					"value": JSObject1.getCarSalesRevenue() || 0
				},
				{
					"label": "Failed deployments",
					"value": JSObject1.getCarRepairRevenue() || 0
				}
			]
		};
		return ({
			type: "pie2d",
			dataFormat: 'json',
			dataSource
		});		
	}
}