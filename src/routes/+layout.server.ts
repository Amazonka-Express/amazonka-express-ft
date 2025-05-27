import type { LayoutServerLoad } from './$types';
import { ACCESS_TOKEN } from '$lib/consts';
import { jwtDecode } from 'jwt-decode';

export const load: LayoutServerLoad = async ({ cookies }) => {
	const accessToken = cookies.get(ACCESS_TOKEN);
	if (!accessToken) {
		return {
			user: null
		};
	}
	const decodeToken = jwtDecode(accessToken) as { email: string };
	// console.log('Decoded token:', decodeToken);
	return {
		user: {
			email: decodeToken.email || null
		}
	};
};
