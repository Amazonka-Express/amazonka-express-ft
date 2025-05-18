export const SIZE_DELTA = 20;

export interface BoxData {
	refID: string;
	packager: string;
	from: string;
	to: string;
}

export interface Order {
	packingArea: FilledPackingArea;
	boxesNum: number;
	done: boolean;
}

const REF_ID = [
	'AD23M9384JF8',
	'LE93K7DM819K',
	'LJF8JF8JF8JF',
	'FI230ASI938U',
	'BD23G93842F8',
	'AE93K3M8183'
];
const PACKAGERS = [
	'Marek Markowski',
	'Karol Orzechowski',
	'Jan Kowalski',
	'Piotr Nowak',
	'Adam Kowalski',
	'Franek Angelo',
	'Mark Quick'
];
const FROM = ['Intel', 'AMD', 'Nvidia', 'Samsung', 'Apple', 'Allegro', "McDonald's", 'KFC'];
const TO = ['SIEMENS', 'Bosh', 'Philips', 'Sony', 'Panasonic', 'Amazon', 'Google', 'Microsoft'];

export function generateRandomBoxData(): BoxData {
	return {
		refID: REF_ID[Math.floor(Math.random() * REF_ID.length)],
		packager: PACKAGERS[Math.floor(Math.random() * PACKAGERS.length)],
		from: FROM[Math.floor(Math.random() * FROM.length)],
		to: TO[Math.floor(Math.random() * TO.length)]
	};
}

export const SAMPLE_FILLED_PACKING_AREA: FilledPackingArea = {
	palettes: [
		{
			boxes: [
				{
					box: {
						dimensions: {
							dx: SIZE_DELTA * 3,
							dy: SIZE_DELTA * 2,
							dz: SIZE_DELTA * 1
						},
						weight: 20
					},
					position: { x: 0, y: 0, z: 0 },
					data: generateRandomBoxData()
				},
				{
					box: {
						dimensions: {
							dx: SIZE_DELTA * 1,
							dy: SIZE_DELTA * 1,
							dz: SIZE_DELTA * 1
						},
						weight: 10
					},
					position: { x: 0, y: 0, z: SIZE_DELTA * 1 },
					data: generateRandomBoxData()
				},
				{
					box: {
						dimensions: {
							dx: SIZE_DELTA * 2,
							dy: SIZE_DELTA * 3,
							dz: SIZE_DELTA * 1
						},
						weight: 40
					},
					position: { x: SIZE_DELTA * 3, y: 0, z: SIZE_DELTA * 1 },
					data: generateRandomBoxData()
				},
				{
					box: {
						dimensions: {
							dx: SIZE_DELTA * 4,
							dy: SIZE_DELTA * 10,
							dz: SIZE_DELTA * 2
						},
						weight: 100
					},
					position: { x: SIZE_DELTA * 4, y: 0, z: SIZE_DELTA * 2 },
					data: generateRandomBoxData()
				}
			],
			dimensions: {
				dx: SIZE_DELTA * 8,
				dy: SIZE_DELTA * 10,
				dz: SIZE_DELTA * 4
			}
		},
		{
			boxes: [
				{
					box: {
						dimensions: {
							dx: SIZE_DELTA * 1,
							dy: SIZE_DELTA * 2,
							dz: SIZE_DELTA * 1
						},
						weight: 20
					},
					position: { x: 0, y: 0, z: 0 },
					data: generateRandomBoxData()
				},
				{
					box: {
						dimensions: {
							dx: SIZE_DELTA * 1,
							dy: SIZE_DELTA * 1,
							dz: SIZE_DELTA * 1
						},
						weight: 10
					},
					position: { x: 0, y: 0, z: SIZE_DELTA * 1 },
					data: generateRandomBoxData()
				},
				{
					box: {
						dimensions: {
							dx: SIZE_DELTA * 1,
							dy: SIZE_DELTA * 5,
							dz: SIZE_DELTA * 2
						},
						weight: 40
					},
					position: { x: SIZE_DELTA * 3, y: 0, z: SIZE_DELTA * 1 },
					data: generateRandomBoxData()
				},
				{
					box: {
						dimensions: {
							dx: SIZE_DELTA * 2,
							dy: SIZE_DELTA * 2,
							dz: SIZE_DELTA * 1
						},
						weight: 100
					},
					position: { x: SIZE_DELTA * 4, y: 0, z: SIZE_DELTA * 2 },
					data: generateRandomBoxData()
				}
			],
			dimensions: {
				dx: SIZE_DELTA * 8,
				dy: SIZE_DELTA * 10,
				dz: SIZE_DELTA * 4
			}
		},
		{
			boxes: [
				{
					box: {
						dimensions: {
							dx: SIZE_DELTA * 2,
							dy: SIZE_DELTA * 2,
							dz: SIZE_DELTA * 2
						},
						weight: 20
					},
					position: { x: 0, y: 0, z: 0 },
					data: generateRandomBoxData()
				},
				{
					box: {
						dimensions: {
							dx: SIZE_DELTA * 2,
							dy: SIZE_DELTA * 2,
							dz: SIZE_DELTA * 1
						},
						weight: 10
					},
					position: { x: 0, y: SIZE_DELTA * 2, z: 0 },
					data: generateRandomBoxData()
				},
				{
					box: {
						dimensions: {
							dx: SIZE_DELTA * 3,
							dy: SIZE_DELTA * 3,
							dz: SIZE_DELTA * 2
						},
						weight: 40
					},
					position: { x: SIZE_DELTA * 3, y: 0, z: SIZE_DELTA * 1 },
					data: generateRandomBoxData()
				},
				{
					box: {
						dimensions: {
							dx: SIZE_DELTA * 2,
							dy: SIZE_DELTA * 2,
							dz: SIZE_DELTA * 1
						},
						weight: 100
					},
					position: { x: SIZE_DELTA * 1, y: 0, z: SIZE_DELTA * 2 },
					data: generateRandomBoxData()
				}
			],
			dimensions: {
				dx: SIZE_DELTA * 8,
				dy: SIZE_DELTA * 10,
				dz: SIZE_DELTA * 4
			}
		},
		{
			boxes: [
				{
					box: {
						dimensions: {
							dx: SIZE_DELTA * 2,
							dy: SIZE_DELTA * 2,
							dz: SIZE_DELTA * 2
						},
						weight: 20
					},
					position: { x: 0, y: 0, z: 0 },
					data: generateRandomBoxData()
				},
				{
					box: {
						dimensions: {
							dx: SIZE_DELTA * 2,
							dy: SIZE_DELTA * 2,
							dz: SIZE_DELTA * 1
						},
						weight: 10
					},
					position: { x: 0, y: SIZE_DELTA * 2, z: 0 },
					data: generateRandomBoxData()
				},
				{
					box: {
						dimensions: {
							dx: SIZE_DELTA * 1,
							dy: SIZE_DELTA * 1,
							dz: SIZE_DELTA * 1
						},
						weight: 40
					},
					position: { x: SIZE_DELTA * 1, y: SIZE_DELTA * 4, z: 0 },
					data: generateRandomBoxData()
				},
				{
					box: {
						dimensions: {
							dx: SIZE_DELTA * 5,
							dy: SIZE_DELTA * 5,
							dz: SIZE_DELTA * 3
						},
						weight: 100
					},
					position: { x: SIZE_DELTA * 3, y: 0, z: 0 },
					data: generateRandomBoxData()
				},
				{
					box: {
						dimensions: {
							dx: SIZE_DELTA * 3,
							dy: SIZE_DELTA * 2,
							dz: SIZE_DELTA * 1
						},
						weight: 100
					},
					position: { x: SIZE_DELTA * 3, y: SIZE_DELTA * 5, z: 0 },
					data: generateRandomBoxData()
				},
				{
					box: {
						dimensions: {
							dx: SIZE_DELTA * 3,
							dy: SIZE_DELTA * 2,
							dz: SIZE_DELTA * 1
						},
						weight: 100
					},
					position: { x: 0, y: 3, z: SIZE_DELTA * 2 },
					data: generateRandomBoxData()
				},
				{
					box: {
						dimensions: {
							dx: SIZE_DELTA * 8,
							dy: SIZE_DELTA * 4,
							dz: SIZE_DELTA * 1
						},
						weight: 100
					},
					position: { x: 0, y: 3, z: SIZE_DELTA * 3 },
					data: generateRandomBoxData()
				}
			],
			dimensions: {
				dx: SIZE_DELTA * 8,
				dy: SIZE_DELTA * 10,
				dz: SIZE_DELTA * 4
			}
		}
	]
};

export const SAMPLE_ORDERS = new Map<string, Order>([
	['1024', { packingArea: SAMPLE_FILLED_PACKING_AREA, boxesNum: 24, done: true }],
	['3309', { packingArea: SAMPLE_FILLED_PACKING_AREA, boxesNum: 15, done: true }],
	['9324', { packingArea: SAMPLE_FILLED_PACKING_AREA, boxesNum: 19, done: false }]
]);

export function normalize(palett: FilledPalett): FilledPalett {
	return {
		dimensions: palett.dimensions,
		boxes: palett.boxes.map((pBox) => normalizeBox(pBox, palett.dimensions))
	};
}

function normalizeBox(
	{ box, position, data }: PositionedBox,
	palettDimensions: Dimensions
): PositionedBox {
	const boxDimensionsNormalized: Dimensions = {
		dx: box.dimensions.dx / palettDimensions.dx,
		dy: box.dimensions.dy / palettDimensions.dy,
		dz: box.dimensions.dz / palettDimensions.dz
	};
	return {
		position: {
			x: position.x / palettDimensions.dx - 0.5 + boxDimensionsNormalized.dx / 2,
			y: position.y / palettDimensions.dy + boxDimensionsNormalized.dy / 2,
			z: position.z / palettDimensions.dz - 0.5 + boxDimensionsNormalized.dz / 2
		},
		box: {
			weight: box.weight,
			dimensions: boxDimensionsNormalized
		},
		data
	};
}

export function fill(packingArea: PackingArea, boxes: Box[]): FilledPackingArea {
	return {
		palettes: [
			{
				boxes: boxes.map((box) => ({
					box: box,
					position: { x: 0, y: 0, z: 0 },
					data: { refID: 'ID', packager: 'Marek', from: 'marek', to: 'to' }
				})),
				dimensions: packingArea.palettes[0][0].dimensions
			}
		]
	};
}

export interface PackingArea {
	palettes: Palett[][];
}

export function makePackingArea(
	palettDimention: Dimensions,
	width: number,
	length: number
): PackingArea {
	return {
		palettes: [...Array(length)].map(() =>
			Array(width).map(() => ({ dimensions: palettDimention }))
		)
	};
}

export interface Palett {
	dimensions: Dimensions;
}

export interface FilledPackingArea {
	palettes: FilledPalett[];
}

export interface FilledPalett extends Palett {
	boxes: PositionedBox[];
}

export interface PositionedBox {
	box: Box;
	position: Position;
	data: BoxData;
}

export interface Box {
	dimensions: Dimensions;
	weight: number;
}

export interface Position {
	x: number;
	y: number;
	z: number;
}

export interface Dimensions {
	dx: number;
	dy: number;
	dz: number;
}
