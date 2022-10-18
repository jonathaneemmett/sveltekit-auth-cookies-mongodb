import { invalid, redirect } from '@sveltejs/kit';
import argon2 from 'argon2';

export const load = async ({ locals }) => {
	// TODO Check if user is already logged in
};

export const actions = {
	login: async ({ cookies, request }) => {
		// TODO finish login
	}
};
