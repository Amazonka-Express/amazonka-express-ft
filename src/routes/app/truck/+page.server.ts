import type { PageServerLoad } from './$types';
import { env } from '$env/dynamic/public';
import { ACCESS_TOKEN } from '$src/lib/consts';

const routes = [
	[
		{ lat: 52.23751, lng: 21.00098 },
		{ lat: 52.2572711, lng: 20.9851908 },
		{ lat: 52.2753407, lng: 20.9412455 },
		{ lat: 52.2715593, lng: 20.8650278 }
	],
	[
		{ lat: 52.23751, lng: 21.00098 },
		{ lat: 52.2105038, lng: 20.9774711 },
		{ lat: 52.1980162, lng: 21.0252396 },
		{ lat: 52.171935, lng: 21.0864074 },
		{ lat: 52.1423337, lng: 21.0258005 },
		{ lat: 52.130249, lng: 21.0684157 }
	],
	[
		{ lat: 52.23751, lng: 21.00098 },
		{ lat: 52.2395422, lng: 21.0518631 },
		{ lat: 52.2831842, lng: 21.1091606 },
		{ lat: 52.3005316, lng: 21.1062666 }
	]
];

let idx = 0;

export const load: PageServerLoad<{
	coordinates: { lat: number; lng: number; stop_index?: number }[];
}> = async ({ cookies }) => {
	const searchParams = new URLSearchParams();
	routes[idx].forEach((point, index) => {
		searchParams.append(`route[${index}][lat]`, point.lat.toString());
		searchParams.append(`route[${index}][lng]`, point.lng.toString());
	});
	idx = (idx + 1) % routes.length;

	const response = await fetch(
		`${env.PUBLIC_API_GATEWAY_URL}/api/api/truck?${searchParams.toString()}`,
		{
			method: 'GET',
			headers: {
				Authorization: `Bearer ${cookies.get(ACCESS_TOKEN)}`
			}
		}
	);
	const data = await response.json();
	return {
		coordinates: data?.coordinates
	};
};
