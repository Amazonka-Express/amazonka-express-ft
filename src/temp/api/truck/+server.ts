/*
import { json } from '@sveltejs/kit';
import grpc from '@grpc/grpc-js';
import { truck } from '$pb/truck';

export async function GET({ url }) {
	const client = new truck.TruckRouterClient('localhost:50051', grpc.credentials.createInsecure());

	const coordinates: truck.Coordinates[] = [];
	const params = url.searchParams;

	const routePoints: { lat?: number; lng?: number }[] = [];
	for (const [key, value] of params.entries()) {
		if (key.startsWith('route[') && key.includes('][lat]')) {
			const indexMatch = key.match(/route\[(\d+)\]/);
			if (indexMatch && indexMatch[1]) {
				const index = parseInt(indexMatch[1]);
				if (!routePoints[index]) {
					routePoints[index] = {};
				}
				routePoints[index].lat = parseFloat(value);
			}
		} else if (key.startsWith('route[') && key.includes('][lng]')) {
			const indexMatch = key.match(/route\[(\d+)\]/);
			if (indexMatch && indexMatch[1]) {
				const index = parseInt(indexMatch[1]);
				if (!routePoints[index]) {
					routePoints[index] = {};
				}
				routePoints[index].lng = parseFloat(value);
			}
		}
	}

	for (const point of routePoints) {
		if (point && point.lat !== undefined && point.lng !== undefined) {
			coordinates.push(
				new truck.Coordinates({
					latitude: point.lat,
					longitude: point.lng
				})
			);
		}
	}

	const req = new truck.RouteRequest({
		coordinates
	});

	const response = await new Promise<{ coordinates?: truck.RouteNode[] }>((resolve, reject) => {
		client.GetRoute(req, (err, res) => {
			if (err || !res) {
				reject(err);
				return;
			}
			resolve(res);
		});
	})
		.then((res) => {
			const formattedCoordinates = res.coordinates?.map((node) => {
				const plainNode = {
					lat: node.coordinates?.latitude || 0,
					lng: node.coordinates?.longitude || 0
				};

				// Add stop_index if present
				if (node.has_stop_index) {
					return { ...plainNode, stop_index: node.stop_index };
				}

				return plainNode;
			});
			return { coordinates: formattedCoordinates };
		})
		.catch((err) => {
			console.error('Error in gRPC call:', err);
			return { error: 'Error occurred during gRPC call' };
		});

	return json(response);
}
*/
