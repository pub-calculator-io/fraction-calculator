'use strict'

let switchTheme = null;

import("./assets/js/lib/chartjs/chart.js").then((e) => {
	let Chart = e.Chart
	let registerables = e.registerables
	Chart.register(...registerables)
			
	const theme = localStorage.getItem('theme') !== 'system' ? localStorage.getItem('theme') : window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
	const colors = {
		light: {
			purple: '#A78BFA',
			yellow: '#FBBF24',
			sky: '#7DD3FC',
			blue: '#1D4ED8',
			textColor: '#6B7280',
			yellowGradientStart: 'rgba(250, 219, 139, 0.33)',
			purpleGradientStart: 'rgba(104, 56, 248, 0.16)',
			skyGradientStart: 'rgba(56, 187, 248, 0.16)',
			tealGradientStart: 'rgba(56, 248, 222, 0.16)',
			yellowGradientStop: 'rgba(250, 219, 139, 0)',
			purpleGradientStop: 'rgba(104, 56, 248, 0)',
			gridColor: '#DBEAFE',
			tooltipBackground: '#fff',
			fractionColor: '#EDE9FE',
		},
		dark: {
			purple: '#7C3AED',
			yellow: '#D97706',
			sky: '#0284C7',
			blue: '#101E47',
			textColor: '#fff',
			yellowGradientStart: 'rgba(146, 123, 67, 0.23)',
			purpleGradientStart: 'rgba(78, 55, 144, 0.11)',
			skyGradientStart: 'rgba(56, 187, 248, 0.16)',
			tealGradientStart: 'rgba(56, 248, 222, 0.16)',
			yellowGradientStop: 'rgba(250, 219, 139, 0)',
			purpleGradientStop: 'rgba(104, 56, 248, 0)',
			gridColor: '#162B64',
			tooltipBackground: '#1C3782',
			fractionColor: '#41467D',
		},
	};

	let options = {
		plugins: {
			tooltip: {
				enabled: false,
			},
			legend: {
				display: false,
			},
		},
	};
	let fractionF = new Chart(document.getElementById('fractionFirst'), {
		type: 'pie',
		data: {
			datasets: [
				{
					data: [1, 1],
					backgroundColor: ['#6D28D9', colors[theme].fractionColor],
					weight: 1,
					borderColor: '#DDD6FE',
					borderWidth: 0,
				},
			],
		},
		options: options,
	});
	let fractionS = new Chart(document.getElementById('fractionSecondary'), {
		type: 'pie',
		data: {
			datasets: [
				{
					data: [1, 2],
					backgroundColor: ['#6D28D9', colors[theme].fractionColor],
					weight: 1,
					borderColor: '#DDD6FE',
					borderWidth: 0,
				},
			],
		},
		options: options,
	});
	let fractionA = new Chart(document.getElementById('fractionAnswer'), {
		type: 'pie',
		data: {
			datasets: [
				{
					data: [5, 1],
					backgroundColor: ['#6D28D9', colors[theme].fractionColor],
					weight: 1,
					borderColor: '#DDD6FE',
					borderWidth: 0,
				},
			],
		},
		options: options,
	});

	switchTheme = function(theme) {
		fractionF.data.datasets[0].backgroundColor = ['#6D28D9', colors[theme].fractionColor];
		fractionS.data.datasets[0].backgroundColor = ['#6D28D9', colors[theme].fractionColor];
		fractionA.data.datasets[0].backgroundColor = ['#6D28D9', colors[theme].fractionColor];
		fractionF.update()
		fractionS.update()
		fractionA.update()
	}

	window.changeChartData = function(values, values_two, values_three) {
		fractionF.data.datasets[0].data = values
		fractionF.update()
		fractionS.data.datasets[0].data = values_two
		fractionS.update()
		fractionA.data.datasets[0].data = values_three
		fractionA.update()
	}
})