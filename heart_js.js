/*
-----------------REFERENCES----------------------
http://bl.ocks.org/alansmithy/d832fc03f6e6a91e99f4
https://bl.ocks.org/LauraCortes/bd506812787c423e4560e72102a7ce94
http://bl.ocks.org/tmaybe/6144082
http://bl.ocks.org/nnattawat/8916402
https://bl.ocks.org/d3noob/96b74d0bd6d11427dd797892551a103c
https://observablehq.com/@d3/grouped-bar-chart
https://cmsdk.com/javascript/updating-graph-in-d3.html
http://qaru.site/questions/170369/d3selectelement-not-working-when-code-above-the-html-element
https://www.datamake.io/blog/d3-zoom

*/

//create svg element
var svgDoc = d3.select('.pictogram').append('svg').attr('viewBox', '0 0 100 100');

//define an icon store it in svg <defs> elements as a reusable component - this geometry can be generated from Inkscape, Illustrator or similar
svgDoc
	.append('defs')
	.append('g')
	.attr('id', 'iconCustom')
	.append('path')
	.attr(
		'd',
		'M3.5,2H2.7C3,1.8,3.3,1.5,3.3,1.1c0-0.6-0.4-1-1-1c-0.6,0-1,0.4-1,1c0,0.4,0.2,0.7,0.6,0.9H1.1C0.7,2,0.4,2.3,0.4,2.6v1.9c0,0.3,0.3,0.6,0.6,0.6h0.2c0,0,0,0.1,0,0.1v1.9c0,0.3,0.2,0.6,0.3,0.6h1.3c0.2,0,0.3-0.3,0.3-0.6V5.3c0,0,0-0.1,0-0.1h0.2c0.3,0,0.6-0.3,0.6-0.6V2.6C4.1,2.3,3.8,2,3.5,2z'
	);

//background rectangle
//svgDoc.append('rect').attr('width', 100).attr('height', 100);

//specify the number of columns and rows for pictogram layout
var numCols = 10;
var numRows = 10;

//padding for the grid
var xPadding = 10;
var yPadding = 15;

//horizontal and vertical spacing between the icons
var hBuffer = 8;
var wBuffer = 8;

//generate a d3 range for the total number of required elements
var myIndex = d3.range(numCols * numRows);

//create group element and create an svg <use> element for each icon
svgDoc
	.append('g')
	.attr('id', 'pictoLayer')
	.selectAll('use')
	.data(myIndex)
	.enter()
	.append('use')
	.attr('xlink:href', '#iconCustom')
	.attr('id', function(d) {
		return 'icon' + d;
	})
	.attr('x', function(d) {
		var remainder = d % numCols; //calculates the x position (column number) using modulus
		return xPadding + remainder * wBuffer; //apply the buffer and return value
	})
	.attr('y', function(d) {
		var whole = Math.floor(d / numCols); //calculates the y position (row number)
		return yPadding + whole * hBuffer; //apply the buffer and return the value
	})
	.classed('iconPlain', true);

let showPictogram = () => {
	d3.selectAll('use').attr('class', function(d) {
		if (d < patients[currentGender]) {
			if (currentGender == 0) return 'iconFemale';
			if (currentGender == 1) return 'iconmale';
			return 'iconGlobal';
		} else {
			return 'iconPlain';
		}
	});
};

let showChest = () => {
	$('.chest-pain').html('');
	var svg = d3.select('.chest-pain'),
		margin = { top: 20, right: 100, bottom: 30, left: 40 },
		width = +svg.attr('width') - margin.left - margin.right,
		height = +svg.attr('height') - margin.top - margin.bottom,
		g = svg.append('g').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

	// set x scale
	var x = d3.scaleBand().rangeRound([ 0, width ]).paddingInner(0.05).align(0.1);

	// set y scale
	var y = d3.scaleLinear().rangeRound([ height, 0 ]);

	// set the colors
	var z = d3.scaleOrdinal().range([ '#D9B44A', '#75B1A9', '#7b6888', '#6b486b', '#a05d56', '#d0743c', '#ff8c00' ]);

	let data = chestPain[currentGender].map((pain) => {
		pain.total = pain['Disease Present'] + pain['Not Present'];
		return pain;
	});

	var keys = [ 'Disease Present', 'Not Present' ];

	data.sort(function(a, b) {
		return b.total - a.total;
	});
	x.domain(
		data.map(function(d) {
			return d.label;
		})
	);
	y
		.domain([
			0,
			d3.max(data, function(d) {
				return d.total;
			})
		])
		.nice();
	z.domain(keys);

	g
		.append('g')
		.selectAll('g')
		.data(d3.stack().keys(keys)(data))
		.enter()
		.append('g')
		.attr('fill', function(d) {
			return z(d.key);
		})
		.selectAll('rect')
		.data(function(d) {
			return d;
		})
		.enter()
		.append('rect')
		.attr('x', function(d) {
			return x(d.data.label) + 10;
		})
		.attr('y', function(d) {
			return y(d[1]);
		})
		.attr('height', function(d) {
			return y(d[0]) - y(d[1]);
		})
		.attr('width', x.bandwidth() - 20)
		.on('mouseover', function() {
			tooltip.style('display', null);
		})
		.on('mouseout', function() {
			tooltip.style('display', 'none');
		})
		.on('mousemove', function(d) {
			console.log(d);
			var xPosition = d3.mouse(this)[0] - 5;
			var yPosition = d3.mouse(this)[1] - 5;
			tooltip.attr('transform', 'translate(' + xPosition + ',' + yPosition + ')');
			tooltip.select('text').text(d[1] - d[0]);
		});

	g
		.append('g')
		.attr('class', 'axis')
		.attr('transform', 'translate(0,' + height + ')')
		.call(d3.axisBottom(x))
		.append('text')
		.attr('x', width / 2)
		.attr('y', y(y.ticks().pop()) + 30)
		.attr('dy', '0.32em')
		.attr('fill', '#000')
		.text('Type of Chest Pain');

	g
		.append('g')
		.attr('class', 'axis')
		.call(d3.axisLeft(y).ticks(null, 's'))
		.append('text')
		.attr('x', -150)
		.attr('y', y(y.ticks().pop()) - 30)
		.attr('dy', '0.32em')
		.attr('fill', '#000')
		.style('transform', 'rotate(-90deg)')
		.attr('font-weight', 'bold')
		.attr('text-anchor', 'start')
		.text('Percentage');

	var legend = g
		.append('g')
		.attr('font-family', 'sans-serif')
		.attr('font-size', 10)
		.attr('text-anchor', 'start')
		.selectAll('g')
		.data(keys.slice().reverse())
		.enter()
		.append('g')
		.attr('transform', function(d, i) {
			return 'translate(0,' + i * 40 + ')';
		});

	legend.append('rect').attr('x', width).attr('width', 15).attr('height', 15).attr('fill', z);

	legend.append('text').attr('x', width + 20).attr('y', 4.5).attr('dy', '0.32em').text(function(d) {
		return d;
	});

	// Prep the tooltip bits, initial display is hidden
	var tooltip = svg.append('g').attr('class', 'bar-tooltip').style('display', 'none');

	tooltip.append('rect').attr('width', 60).attr('height', 20).attr('fill', 'white').style('opacity', 0.5);

	tooltip
		.append('text')
		.attr('x', 30)
		.attr('dy', '1.2em')
		.style('text-anchor', 'middle')
		.attr('font-size', '12px')
		.attr('font-weight', 'bold');
};

let showBPS = () => {
	let selectors = [ '.bps-chart.young', '.bps-chart.middle', '.bps-chart.elderly' ];
	$(selectors[currentAgeRange]).html('');
	const data = bpsData[currentGender][currentAgeRange];

	const keys = Object.keys(data[0]).slice(1);

	//	const tip = d3.tip().html((d) => d.value);
	const svg = d3.select(selectors[currentAgeRange]);
	const margin = {
			top: 20,
			right: 40,
			bottom: 30,
			left: 40
		},
		width = svg.attr('width'),
		height = svg.attr('height'),
		innerWidth = width - margin.left - margin.right,
		innerHeight = height - margin.top - margin.bottom;

	g = svg.append('g').attr('transform', `translate(${margin.left}, ${margin.top})`);

	//	svg.call(tip);

	const x0 = d3.scaleBand().rangeRound([ 0, innerWidth ]).paddingInner(0.1);

	const x1 = d3.scaleBand().padding(0.05);

	const y = d3.scaleLinear().rangeRound([ innerHeight, 0 ]);

	const z = d3.scaleOrdinal().range([ '#D9B44A', '#75B1A9', '#3C3176', '#2C4770', '#96A537', '#68266F', '#492E74' ]);

	x0.domain(data.map((d) => d.label));
	x1.domain(keys).rangeRound([ 0, x0.bandwidth() ]);
	y.domain([ 0, d3.max(data, (d) => d3.max(keys, (key) => d[key])) ]).nice();

	g
		.append('g')
		.selectAll('g')
		.data(data)
		.enter()
		.append('g')
		.attr('transform', (d) => 'translate(' + x0(d.label) + ',0)')
		.selectAll('rect')
		.data((d) =>
			keys.map((key) => {
				return { key: key, value: d[key] };
			})
		)
		.enter()
		.append('rect')
		.attr('x', (d) => x1(d.key))
		.attr('y', (d) => y(d.value))
		.attr('width', x1.bandwidth())
		.attr('height', (d) => innerHeight - y(d.value))
		.attr('fill', (d) => z(d.key));

	g
		.append('g')
		.attr('class', 'axis-bottom')
		.attr('transform', 'translate(0,' + innerHeight + ')')
		.call(d3.axisBottom(x0))
		.append('text')
		.attr('x', width / 2 - 40)
		.attr('y', y(y.ticks().pop()) + 25)
		.attr('dy', '0.32em')
		.attr('fill', '#000')
		.text('Blood Pressure');

	g
		.append('g')
		.attr('class', 'axis-left')
		.call(d3.axisLeft(y).ticks(null, 's'))
		.append('text')
		.attr('x', -50)
		.attr('y', y(y.ticks().pop()) - 30)
		.attr('dy', '0.32em')
		.attr('fill', '#000')
		.style('transform', 'rotate(-90deg)')
		.attr('font-weight', 'bold')
		.attr('text-anchor', 'end')
		.text('Number of Patients');

	const legend = g
		.append('g')
		.attr('font-family', 'sans-serif')
		.attr('font-size', 10)
		.attr('text-anchor', 'start')
		.selectAll('g')
		.data(keys.slice().reverse())
		.enter()
		.append('g')
		.attr('transform', (d, i) => 'translate(0,' + i * 20 + ')');

	legend.append('rect').attr('x', innerWidth - 46).attr('width', 10).attr('height', 10).attr('fill', z);

	legend.append('text').attr('x',207).attr('y', 6).attr('dy', '0.32em').text((d) => d);
	var tooltip = svg.append('g').attr('class', 'bar-tooltip').style('display', 'none');

	tooltip.append('rect').attr('width', 60).attr('height', 20).attr('fill', 'white').style('opacity', 0.5);

	tooltip
		.append('text')
		.attr('x', 30)
		.attr('dy', '1.2em')
		.style('text-anchor', 'middle')
		.attr('font-size', '12px')
		.attr('font-weight', 'bold');
};

let showHR = () => {
	let selectors = [ '.hr-chart.young', '.hr-chart.middle', '.hr-chart.elderly' ];
	$(selectors[currentAgeRange]).html('');
	var svg = d3.select(selectors[currentAgeRange]),
		margin = { top: 20, right: 20, bottom: 40, left: 40 },
		width = +svg.attr('width') - margin.left - margin.right,
		height = +svg.attr('height') - margin.top - margin.bottom,
		g = svg.append('g').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

	// set x scale
	var x = d3.scaleBand().rangeRound([ 0, width ]).paddingInner(0.05).align(0.1);

	// set y scale
	var y = d3.scaleLinear().rangeRound([ height, 0 ]);

	// set the colors
	var z = d3.scaleOrdinal().range([ '#D9B44A', '#75B1A9', '#7b6888', '#6b486b', '#a05d56', '#d0743c', '#ff8c00' ]);

	let data = hrData[currentGender][currentAgeRange].map((pain) => {
		pain.total = pain['Disease Present'] + pain['Not Present'];
		return pain;
	});

	var keys = [ 'Disease Present', 'Not Present' ];

	x.domain(
		data.map(function(d) {
			return d.label;
		})
	);
	y
		.domain([
			0,
			d3.max(data, function(d) {
				return d.total;
			})
		])
		.nice();
	z.domain(keys);

	g
		.append('g')
		.selectAll('g')
		.data(d3.stack().keys(keys)(data))
		.enter()
		.append('g')
		.attr('fill', function(d) {
			return z(d.key);
		})
		.selectAll('rect')
		.data(function(d) {
			return d;
		})
		.enter()
		.append('rect')
		.attr('x', function(d) {
			return x(d.data.label);
		})
		.attr('y', function(d) {
			return y(d[1]);
		})
		.attr('height', function(d) {
			return y(d[0]) - y(d[1]);
		})
		.attr('width', x.bandwidth() + 3)
		.on('mouseover', function() {
			tooltip2.style('display', null);
		})
		.on('mouseout', function() {
			tooltip2.style('display', 'none');
		})
		.on('mousemove', function(d) {
			console.log(d);
			var xPosition = d3.mouse(this)[0] - 5;
			var yPosition = d3.mouse(this)[1] - 5;
			tooltip2.attr('transform', 'translate(' + xPosition + ',' + yPosition + ')');
			tooltip2.select('text').text(d[1] - d[0]);
		});

	g
		.append('g')
		.attr('class', 'axis')
		.attr('transform', 'translate(0,' + height + ')')
		.call(d3.axisBottom(x))
		.append('text')
		.attr('x', width / 2)
		.attr('y', y(y.ticks().pop()) + 25)
		.attr('dy', '0.32em')
		.attr('fill', '#000')
		.text('Heart Rate');

	g
		.append('g')
		.attr('class', 'axis')
		.call(d3.axisLeft(y).ticks(null, 's'))
		.append('text')
		.attr('x', -100)
		.attr('y', y(y.ticks().pop()) - 30)
		.attr('dy', '0.32em')
		.attr('fill', '#000')
		.style('transform', 'rotate(-90deg)')
		.attr('font-weight', 'bold')
		.attr('text-anchor', 'start')
		.text('Number of Patients');

	/*	var legend = g
		.append('g')
		.attr('font-family', 'sans-serif')
		.attr('font-size', 10)
		.attr('text-anchor', 'end')
		.selectAll('g')
		.data(keys.slice().reverse())
		.enter()
		.append('g')
		.attr('transform', function(d, i) {
			return 'translate(0,' + i * 20 + ')';
		});

	legend.append('rect').attr('x', width - 19).attr('width', 19).attr('height', 19).attr('fill', z);

	legend.append('text').attr('x', width - 24).attr('y', 9.5).attr('dy', '0.32em').text(function(d) {
		return d;
	});
	//	});*/

	// Prep the tooltip bits, initial display is hidden
	var tooltip2 = svg.append('g').attr('class', 'bar-tooltip').style('display', 'none');

	tooltip2.append('rect').attr('width', 60).attr('height', 20).attr('fill', 'white').style('opacity', 0.5);

	tooltip2
		.append('text')
		.attr('x', 30)
		.attr('dy', '1.2em')
		.style('text-anchor', 'middle')
		.attr('font-size', '12px')
		.attr('font-weight', 'bold');
};
let loadData = () => {
	d3.csv(csv_file).then(function(data) {
		for (patient of data) {
			let bpsCategory = 0;

			if (patient.trestbps >= 120 && patient.trestbps < 130) bpsCategory = 1;
			else if (patient.trestbps >= 130 && patient.trestbps < 140) bpsCategory = 2;
			else if (patient.trestbps >= 140 && patient.trestbps < 180) bpsCategory = 3;
			else if (patient.trestbps >= 180) bpsCategory = 4;
			let hrCategory = patient.thalach <= 200 ? parseInt((patient.thalach - 80) / 20) : 6;
			if (patient.thalach < 80) hrCategory = 0;
			let ageRange = patient.age < 41 ? 0 : parseInt(patient.age / 56) + 1;
			if (patient.target == 1) {
				patients[patient.sex]++;
				patients[2]++;
				chestPain[patient.sex][patient.cp]['Disease Present']++;
				chestPain[2][patient.cp]['Disease Present']++;

				bpsData[patient.sex][ageRange][bpsCategory]['Disease Present']++;
				bpsData[2][ageRange][bpsCategory]['Disease Present']++;
				hrData[patient.sex][ageRange][hrCategory]['Disease Present']++;
				hrData[2][ageRange][hrCategory]['Disease Present']++;
			} else {
				chestPain[patient.sex][patient.cp]['Not Present']++;
				chestPain[2][patient.cp]['Not Present']++;
				bpsData[patient.sex][ageRange][bpsCategory]['Not Present']++;
				bpsData[2][ageRange][bpsCategory]['Not Present']++;
				hrData[patient.sex][ageRange][hrCategory]['Not Present']++;
				hrData[2][ageRange][hrCategory]['Not Present']++;
			}
			population[patient.sex]++;
		}
		chestPain = chestPain.map((gender) => {
			return gender.map((pain) => {
				let sum = pain['Disease Present'] + pain[[ 'Not Present' ]];
				pain['Disease Present'] = Math.round(pain['Disease Present'] / sum * 100);
				pain[[ 'Not Present' ]] = Math.round(pain[[ 'Not Present' ]] / sum * 100);
				return pain;
			});
		});
		patients[0] = parseInt(patients[0] / population[0] * 100);
		patients[1] = parseInt(patients[1] / population[1] * 100);
		patients[2] = parseInt(patients[2] / data.length * 100);

		showPictogram();
		showChest();
		loadBP();
		loadHR();
	});
};
let loadBP = () => {
	for (let i = 0; i < 3; i++) {
		currentAgeRange = i;
		showBPS();
	}
};
let loadHR = () => {
	for (let i = 0; i < 3; i++) {
		currentAgeRange = i;
		showHR();
	}
};

loadData();

$('#maleButton').click(() => {
	currentGender = 1;
	showData();
});
$('#femaleButton').click(() => {
	currentGender = 0;
	showData();
});
$('#overallButton').click(() => {
	currentGender = 2;
	showData();
});
let showData = () => {
	showPictogram();
	showChest();
	for (currentAgeRange = 0; currentAgeRange < 3; currentAgeRange++) {
		showBPS();
		showHR();
	}
};
