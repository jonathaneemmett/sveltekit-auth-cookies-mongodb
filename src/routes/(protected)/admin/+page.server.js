import { redirect } from '@sveltejs/kit';

export const load = async ({ locals }) => {
	if (locals?.user?.role !== 'Admin') {
		throw redirect(302, '/');
	}
};
