import { json } from '@sveltejs/kit';
import grpc from '@grpc/grpc-js';
import { greet } from '$pb/greet';
import { env } from '$env/dynamic/public';

export async function GET(event) {
	const msg = event.url.searchParams.get('msg') || 'error';
	const role = event.request.headers.get('Role') || 'error';
	console.log('Role:', role);

	const userServiceWithoutProtocol = env.PUBLIC_USER_SERVICE_URL.replace('http://', '').replace(
		'https://',
		''
	);

	const client = new greet.GreeterClient(
		userServiceWithoutProtocol,
		grpc.credentials.createInsecure()
	);
	const req = new greet.HelloRequest({
		name: msg
	});

	const response = await new Promise<greet.HelloReply>((resolve, reject) => {
		client.SayHello(req, (err, res) => {
			if (err || !res) {
				reject(err);
				return;
			}
			resolve(res);
		});
	})
		.then((res) => {
			return { msg: res?.message };
		})
		.catch((err) => {
			console.error('Error in gRPC call:', err);
			return { msg: 'Error occurred during gRPC call' };
		});

	return json(response);
}
