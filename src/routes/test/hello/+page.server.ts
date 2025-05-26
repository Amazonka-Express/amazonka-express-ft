import type { PageServerLoad } from './$types';
import { API_GATEWAY_URL } from '$env/static/private';
import { ACCESS_TOKEN } from '$src/lib/consts';

export const load: PageServerLoad<{ msg: string }> = async ({ cookies }) => {
	const accessToken = cookies.get(ACCESS_TOKEN);
	const res = await fetch(`${API_GATEWAY_URL}/api/api/hello?msg=siemanko`, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${accessToken}`
		}
	});
	const data = await res.json();
	console.log('data: ', data);
	return {
		msg: data?.msg
	};
};
