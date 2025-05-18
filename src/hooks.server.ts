import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const accessToken = event.cookies.get('access_token');
	if (event.url.pathname.startsWith('/app')) {
		if (!accessToken) {
			return new Response('Redirecting to login...', {
				status: 302,
				headers: {
					Location: '/'
				}
			});
		}
	} else {
		if (accessToken) {
			return new Response('Redirecting to app...', {
				status: 302,
				headers: {
					Location: '/app'
				}
			});
		}
	}

	const response = await resolve(event);
	return response;
};
