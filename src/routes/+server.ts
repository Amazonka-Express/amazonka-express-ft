import { json } from '@sveltejs/kit';
import grpc from '@grpc/grpc-js';
import { greet } from '$pb/greet';

export function GET() {
	const client = new greet.GreeterClient('localhost:5001', grpc.credentials.createInsecure());
	const req = new greet.HelloRequest({
		name: 'grpc z clienta'
	});

	client.SayHello(req, (err, res) => {
		if (err) {
			console.error(err);
			return json({ error: 'Error occurred' });
		}
		console.log('Response from server:', res?.message);
	});

	return json({ message: 'xd' });
}
