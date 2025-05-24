import { json } from '@sveltejs/kit';
import grpc from '@grpc/grpc-js';
import { truck } from '$pb/truck';

export function GET({ url }) {
	const client = new truck.TruckRouterClient('localhost:50051', grpc.credentials.createInsecure());

	const latitude = parseFloat(url.searchParams.get('latitude') || '50.0647');
	const longitude = parseFloat(url.searchParams.get('longitude') || '19.945');

	const coordinate = new truck.Coordinates({
		latitude,
		longitude
	});

	const req = new truck.RouteRequest([coordinate]);

	let result: truck.RouteNode[] | undefined = undefined;
	client.GetRoute(req, (err, res) => {
		if (err) {
			console.error(err);
			return json({ error: 'Error occurred' });
		}
		console.log('Response from server:', res?.coordinates);
		result = res?.coordinates;
	});

	return json({ coordinates: result });
}
