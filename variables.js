let patients = [ 0, 0, 0 ],
	minAge = 0,
	maxAge = 0,
	population = [ 0, 0 ],
	currentGender = 2,
	currentAgeRange = 0,
	chestPain = [
		[
			{
				label: 'Type0',
				Patients: 0,
				Healthy: 0
			},
			{
				label: 'Type1',
				Patients: 0,
				Healthy: 0
			},
			{
				label: 'Type2',
				Patients: 0,
				Healthy: 0
			},
			{
				label: 'Type3',
				Patients: 0,
				Healthy: 0
			}
		],
		[
			{
				label: 'Type0',
				Patients: 0,
				Healthy: 0
			},
			{
				label: 'Type1',
				Patients: 0,
				Healthy: 0
			},
			{
				label: 'Type2',
				Patients: 0,
				Healthy: 0
			},
			{
				label: 'Type3',
				Patients: 0,
				Healthy: 0
			}
		],
		[
			{
				label: 'Type0',
				Patients: 0,
				Healthy: 0
			},
			{
				label: 'Type1',
				Patients: 0,
				Healthy: 0
			},
			{
				label: 'Type2',
				Patients: 0,
				Healthy: 0
			},
			{
				label: 'Type3',
				Patients: 0,
				Healthy: 0
			}
		]
	],
	bpsData = [
		[
			{
				label: 'Normal',
				'Have Disease': 0,
				"Haven't Disease": 0
			},
			{
				label: 'Elevated',
				'Have Disease': 0,
				"Haven't Disease": 0
			},
			{
				label: 'HBP Stage1',
				'Have Disease': 0,
				"Haven't Disease": 0
			},
			{
				label: 'HBP Stage2',
				'Have Disease': 0,
				"Haven't Disease": 0
			},
			{
				label: 'Hypertension crisis',
				'Have Disease': 0,
				"Haven't Disease": 0
			}
		],
		[
			{
				label: 'Normal',
				'Have Disease': 0,
				"Haven't Disease": 0
			},
			{
				label: 'Elevated',
				'Have Disease': 0,
				"Haven't Disease": 0
			},
			{
				label: 'HBP Stage1',
				'Have Disease': 0,
				"Haven't Disease": 0
			},
			{
				label: 'HBP Stage2',
				'Have Disease': 0,
				"Haven't Disease": 0
			},
			{
				label: 'Hypertension crisis',
				'Have Disease': 0,
				"Haven't Disease": 0
			}
		],
		[
			{
				label: 'Normal',
				'Have Disease': 0,
				"Haven't Disease": 0
			},
			{
				label: 'Elevated',
				'Have Disease': 0,
				"Haven't Disease": 0
			},
			{
				label: 'Hight BP Stage1',
				'Have Disease': 0,
				"Haven't Disease": 0
			},
			{
				label: 'Hight BP Stage2',
				'Have Disease': 0,
				"Haven't Disease": 0
			},
			{
				label: 'Hypertension crisis',
				'Have Disease': 0,
				"Haven't Disease": 0
			}
		]
	],
	hrData = [
		[
			{
				label: '80',
				'Have Disease': 0,
				"Haven't Disease": 0
			},
			{
				label: '100',
				'Have Disease': 0,
				"Haven't Disease": 0
			},
			{
				label: '120',
				'Have Disease': 0,
				"Haven't Disease": 0
			},
			{
				label: '140',
				'Have Disease': 0,
				"Haven't Disease": 0
			},
			{
				label: '160',
				'Have Disease': 0,
				"Haven't Disease": 0
			},
			{
				label: '180',
				'Have Disease': 0,
				"Haven't Disease": 0
			},
			{
				label: '200',
				'Have Disease': 0,
				"Haven't Disease": 0
			}
		],
		[
			{
				label: '80',
				'Have Disease': 0,
				"Haven't Disease": 0
			},
			{
				label: '100',
				'Have Disease': 0,
				"Haven't Disease": 0
			},
			{
				label: '120',
				'Have Disease': 0,
				"Haven't Disease": 0
			},
			{
				label: '140',
				'Have Disease': 0,
				"Haven't Disease": 0
			},
			{
				label: '160',
				'Have Disease': 0,
				"Haven't Disease": 0
			},
			{
				label: '180',
				'Have Disease': 0,
				"Haven't Disease": 0
			},
			{
				label: '200',
				'Have Disease': 0,
				"Haven't Disease": 0
			}
		],
		[
			{
				label: '80',
				'Have Disease': 0,
				"Haven't Disease": 0
			},
			{
				label: '100',
				'Have Disease': 0,
				"Haven't Disease": 0
			},
			{
				label: '120',
				'Have Disease': 0,
				"Haven't Disease": 0
			},
			{
				label: '140',
				'Have Disease': 0,
				"Haven't Disease": 0
			},
			{
				label: '160',
				'Have Disease': 0,
				"Haven't Disease": 0
			},
			{
				label: '180',
				'Have Disease': 0,
				"Haven't Disease": 0
			},
			{
				label: '200',
				'Have Disease': 0,
				"Haven't Disease": 0
			}
		]
	];
