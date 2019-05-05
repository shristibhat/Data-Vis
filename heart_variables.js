let csv_file = 'https://raw.githubusercontent.com/shristibhat/Data-Vis/master/heart.csv',
	patients = [ 0, 0, 0 ],
	minAge = 0,
	maxAge = 0,
	population = [ 0, 0 ],
	currentGender = 2,
	currentAgeRange = 0,
	chestPain = [
		[
			{
				label: 'Type0',
				'Disease Present': 0,
				'Not Present': 0
			},
			{
				label: 'Type1',
				'Disease Present': 0,
				'Not Present': 0
			},
			{
				label: 'Type2',
				'Disease Present': 0,
				'Not Present': 0
			},
			{
				label: 'Type3',
				'Disease Present': 0,
				'Not Present': 0
			}
		],
		[
			{
				label: 'Type0',
				'Disease Present': 0,
				'Not Present': 0
			},
			{
				label: 'Type1',
				'Disease Present': 0,
				'Not Present': 0
			},
			{
				label: 'Type2',
				'Disease Present': 0,
				'Not Present': 0
			},
			{
				label: 'Type3',
				'Disease Present': 0,
				'Not Present': 0
			}
		],
		[
			{
				label: 'Type0',
				'Disease Present': 0,
				'Not Present': 0
			},
			{
				label: 'Type1',
				'Disease Present': 0,
				'Not Present': 0
			},
			{
				label: 'Type2',
				'Disease Present': 0,
				'Not Present': 0
			},
			{
				label: 'Type3',
				'Disease Present': 0,
				'Not Present': 0
			}
		]
	],
	bpsData = [
		[
			[
				{
					label: 'Normal',
					'Disease Present': 0,
					'Not Present': 0
				},
				{
					label: 'Elevated',
					'Disease Present': 0,
					'Not Present': 0
				},
				{
					label: 'HBP 1',
					'Disease Present': 0,
					'Not Present': 0
				},
				{
					label: 'HBP 2',
					'Disease Present': 0,
					'Not Present': 0
				},
				{
					label: 'HP crisis',
					'Disease Present': 0,
					'Not Present': 0
				}
			],
			[
				{
					label: 'Normal',
					'Disease Present': 0,
					'Not Present': 0
				},
				{
					label: 'Elevated',
					'Disease Present': 0,
					'Not Present': 0
				},
				{
					label: 'HBP 1',
					'Disease Present': 0,
					'Not Present': 0
				},
				{
					label: 'HBP 2',
					'Disease Present': 0,
					'Not Present': 0
				},
				{
					label: 'HP crisis',
					'Disease Present': 0,
					'Not Present': 0
				}
			],
			[
				{
					label: 'Normal',
					'Disease Present': 0,
					'Not Present': 0
				},
				{
					label: 'Elevated',
					'Disease Present': 0,
					'Not Present': 0
				},
				{
					label: 'HBP 1',
					'Disease Present': 0,
					'Not Present': 0
				},
				{
					label: 'HBP 2',
					'Disease Present': 0,
					'Not Present': 0
				},
				{
					label: 'HP crisis',
					'Disease Present': 0,
					'Not Present': 0
				}
			]
		],
		[
			[
				{
					label: 'Normal',
					'Disease Present': 0,
					'Not Present': 0
				},
				{
					label: 'Elevated',
					'Disease Present': 0,
					'Not Present': 0
				},
				{
					label: 'HBP 1',
					'Disease Present': 0,
					'Not Present': 0
				},
				{
					label: 'HBP 2',
					'Disease Present': 0,
					'Not Present': 0
				},
				{
					label: 'HP crisis',
					'Disease Present': 0,
					'Not Present': 0
				}
			],
			[
				{
					label: 'Normal',
					'Disease Present': 0,
					'Not Present': 0
				},
				{
					label: 'Elevated',
					'Disease Present': 0,
					'Not Present': 0
				},
				{
					label: 'HBP 1',
					'Disease Present': 0,
					'Not Present': 0
				},
				{
					label: 'HBP 2',
					'Disease Present': 0,
					'Not Present': 0
				},
				{
					label: 'HP crisis',
					'Disease Present': 0,
					'Not Present': 0
				}
			],
			[
				{
					label: 'Normal',
					'Disease Present': 0,
					'Not Present': 0
				},
				{
					label: 'Elevated',
					'Disease Present': 0,
					'Not Present': 0
				},
				{
					label: 'HBP 1',
					'Disease Present': 0,
					'Not Present': 0
				},
				{
					label: 'HBP 2',
					'Disease Present': 0,
					'Not Present': 0
				},
				{
					label: 'HP crisis',
					'Disease Present': 0,
					'Not Present': 0
				}
			]
		],
		[
			[
				{
					label: 'Normal',
					'Disease Present': 0,
					'Not Present': 0
				},
				{
					label: 'Elevated',
					'Disease Present': 0,
					'Not Present': 0
				},
				{
					label: 'HBP 1',
					'Disease Present': 0,
					'Not Present': 0
				},
				{
					label: 'HBP 2',
					'Disease Present': 0,
					'Not Present': 0
				},
				{
					label: 'HP crisis',
					'Disease Present': 0,
					'Not Present': 0
				}
			],
			[
				{
					label: 'Normal',
					'Disease Present': 0,
					'Not Present': 0
				},
				{
					label: 'Elevated',
					'Disease Present': 0,
					'Not Present': 0
				},
				{
					label: 'HBP 1',
					'Disease Present': 0,
					'Not Present': 0
				},
				{
					label: 'HBP 2',
					'Disease Present': 0,
					'Not Present': 0
				},
				{
					label: 'HP crisis',
					'Disease Present': 0,
					'Not Present': 0
				}
			],
			[
				{
					label: 'Normal',
					'Disease Present': 0,
					'Not Present': 0
				},
				{
					label: 'Elevated',
					'Disease Present': 0,
					'Not Present': 0
				},
				{
					label: 'HBP 1',
					'Disease Present': 0,
					'Not Present': 0
				},
				{
					label: 'HBP 2',
					'Disease Present': 0,
					'Not Present': 0
				},
				{
					label: 'HP crisis',
					'Disease Present': 0,
					'Not Present': 0
				}
			]
		]
	],
	hrData = [
		[
			[
				{
					label: '80',
					'Disease Present': 0,
					'Not Present': 0
				},
				{
					label: '100',
					'Disease Present': 0,
					'Not Present': 0
				},
				{
					label: '120',
					'Disease Present': 0,
					'Not Present': 0
				},
				{
					label: '140',
					'Disease Present': 0,
					'Not Present': 0
				},
				{
					label: '160',
					'Disease Present': 0,
					'Not Present': 0
				},
				{
					label: '180',
					'Disease Present': 0,
					'Not Present': 0
				},
				{
					label: '200',
					'Disease Present': 0,
					'Not Present': 0
				}
			],
			[
				{
					label: '80',
					'Disease Present': 0,
					'Not Present': 0
				},
				{
					label: '100',
					'Disease Present': 0,
					'Not Present': 0
				},
				{
					label: '120',
					'Disease Present': 0,
					'Not Present': 0
				},
				{
					label: '140',
					'Disease Present': 0,
					'Not Present': 0
				},
				{
					label: '160',
					'Disease Present': 0,
					'Not Present': 0
				},
				{
					label: '180',
					'Disease Present': 0,
					'Not Present': 0
				},
				{
					label: '200',
					'Disease Present': 0,
					'Not Present': 0
				}
			],
			[
				{
					label: '80',
					'Disease Present': 0,
					'Not Present': 0
				},
				{
					label: '100',
					'Disease Present': 0,
					'Not Present': 0
				},
				{
					label: '120',
					'Disease Present': 0,
					'Not Present': 0
				},
				{
					label: '140',
					'Disease Present': 0,
					'Not Present': 0
				},
				{
					label: '160',
					'Disease Present': 0,
					'Not Present': 0
				},
				{
					label: '180',
					'Disease Present': 0,
					'Not Present': 0
				},
				{
					label: '200',
					'Disease Present': 0,
					'Not Present': 0
				}
			]
		],
		[
			[
				{
					label: '80',
					'Disease Present': 0,
					'Not Present': 0
				},
				{
					label: '100',
					'Disease Present': 0,
					'Not Present': 0
				},
				{
					label: '120',
					'Disease Present': 0,
					'Not Present': 0
				},
				{
					label: '140',
					'Disease Present': 0,
					'Not Present': 0
				},
				{
					label: '160',
					'Disease Present': 0,
					'Not Present': 0
				},
				{
					label: '180',
					'Disease Present': 0,
					'Not Present': 0
				},
				{
					label: '200',
					'Disease Present': 0,
					'Not Present': 0
				}
			],
			[
				{
					label: '80',
					'Disease Present': 0,
					'Not Present': 0
				},
				{
					label: '100',
					'Disease Present': 0,
					'Not Present': 0
				},
				{
					label: '120',
					'Disease Present': 0,
					'Not Present': 0
				},
				{
					label: '140',
					'Disease Present': 0,
					'Not Present': 0
				},
				{
					label: '160',
					'Disease Present': 0,
					'Not Present': 0
				},
				{
					label: '180',
					'Disease Present': 0,
					'Not Present': 0
				},
				{
					label: '200',
					'Disease Present': 0,
					'Not Present': 0
				}
			],
			[
				{
					label: '80',
					'Disease Present': 0,
					'Not Present': 0
				},
				{
					label: '100',
					'Disease Present': 0,
					'Not Present': 0
				},
				{
					label: '120',
					'Disease Present': 0,
					'Not Present': 0
				},
				{
					label: '140',
					'Disease Present': 0,
					'Not Present': 0
				},
				{
					label: '160',
					'Disease Present': 0,
					'Not Present': 0
				},
				{
					label: '180',
					'Disease Present': 0,
					'Not Present': 0
				},
				{
					label: '200',
					'Disease Present': 0,
					'Not Present': 0
				}
			]
		],
		[
			[
				{
					label: '80',
					'Disease Present': 0,
					'Not Present': 0
				},
				{
					label: '100',
					'Disease Present': 0,
					'Not Present': 0
				},
				{
					label: '120',
					'Disease Present': 0,
					'Not Present': 0
				},
				{
					label: '140',
					'Disease Present': 0,
					'Not Present': 0
				},
				{
					label: '160',
					'Disease Present': 0,
					'Not Present': 0
				},
				{
					label: '180',
					'Disease Present': 0,
					'Not Present': 0
				},
				{
					label: '200',
					'Disease Present': 0,
					'Not Present': 0
				}
			],
			[
				{
					label: '80',
					'Disease Present': 0,
					'Not Present': 0
				},
				{
					label: '100',
					'Disease Present': 0,
					'Not Present': 0
				},
				{
					label: '120',
					'Disease Present': 0,
					'Not Present': 0
				},
				{
					label: '140',
					'Disease Present': 0,
					'Not Present': 0
				},
				{
					label: '160',
					'Disease Present': 0,
					'Not Present': 0
				},
				{
					label: '180',
					'Disease Present': 0,
					'Not Present': 0
				},
				{
					label: '200',
					'Disease Present': 0,
					'Not Present': 0
				}
			],
			[
				{
					label: '80',
					'Disease Present': 0,
					'Not Present': 0
				},
				{
					label: '100',
					'Disease Present': 0,
					'Not Present': 0
				},
				{
					label: '120',
					'Disease Present': 0,
					'Not Present': 0
				},
				{
					label: '140',
					'Disease Present': 0,
					'Not Present': 0
				},
				{
					label: '160',
					'Disease Present': 0,
					'Not Present': 0
				},
				{
					label: '180',
					'Disease Present': 0,
					'Not Present': 0
				},
				{
					label: '200',
					'Disease Present': 0,
					'Not Present': 0
				}
			]
		]
	];
