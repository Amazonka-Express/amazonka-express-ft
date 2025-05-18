import type { LayoutLoad } from './$types';

export const load = (({ params: { slug } }) => {
	return {
		id: +slug
	};
}) satisfies LayoutLoad;
