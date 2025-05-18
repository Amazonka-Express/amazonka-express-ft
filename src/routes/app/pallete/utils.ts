import type { FilledPalett } from '../../alg/packing';

export function fromNormalizedToSvelte(normalized: FilledPalett): FilledPalett {
	return {
		boxes: normalized.boxes.map((box) => {
			return {
				box: {
					dimensions: {
						dx: box.box.dimensions.dx * 1.2,
						dy: box.box.dimensions.dy,
						dz: box.box.dimensions.dz * 0.82
					},
					weight: box.box.weight
				},
				position: {
					x: box.position.x * 1.2,
					y: box.position.y,
					z: box.position.z * 0.822
				},
				data: box.data
			};
		}),
		dimensions: {
			dx: normalized.dimensions.dx,
			dy: normalized.dimensions.dy,
			dz: normalized.dimensions.dz
		}
	};
}
