const todo = [
	{
		id: "1",
		name: "APV",
		year: 2005,
		passenger: 7,
		transmission: "manual",
		price: 450000,
		image: "https://firebasestorage.googleapis.com/v0/b/rent-car-507f6.appspot.com/o/1647146984179-APV.png?alt=media",
	},
	{
		id: "2",
		name: "Xenia",
		year: 2008,
		passenger: 7,
		transmission: "automatic",
		image: "https://firebasestorage.googleapis.com/v0/b/rent-car-507f6.appspot.com/o/1647147017740-xenia.png?alt=media",
	},
	{
		id: "3",
		name: "Avanza",
		year: 2003,
		passenger: 7,
		transmission: "manual",
		image: "https://firebasestorage.googleapis.com/v0/b/rent-car-507f6.appspot.com/o/1647147033514-avanza.png?alt=media",
	},
	{
		id: "4",
		name: "Ferrari",
		year: 2015,
		passenger: 3,
		transmission: "automatic",
		image: "https://firebasestorage.googleapis.com/v0/b/rent-car-507f6.appspot.com/o/1649343285674-ferrari_211210142359-398.jpg?alt=media",
	},
	{
		id: "5",
		name: "BMW X1",
		year: 2005,
		passenger: 4,
		transmission: "manual",
		image: "https://firebasestorage.googleapis.com/v0/b/rent-car-507f6.appspot.com/o/1649353077947-png-clipart-2017-bmw-x1-car-sport-utility-vehicle-bmw-x1-sdrive18d-se-bmw-x3-compact-car-car.png?alt=media",
	},
];

const action = [
	{
		type: "addCars",
		payload: {
			description: "...",
		},

		type: "toggleCars",
		payload: {
			id: 1,
			description: "...",
		},

		type: "removeCars",
		payload: {
			id: 1,
			description: "...",
		},
	},
];
