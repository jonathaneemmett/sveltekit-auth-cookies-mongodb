import { invalid, redirect } from '@sveltejs/kit';
import argon2 from 'argon2';
import User from '$lib/models/User.js';

export const load = async ({ locals }) => {
	if (locals?.user) {
		throw redirect(302, '/');
	}
};

export const actions = {
	login: async ({ cookies, request }) => {
		const data = await request.formData();
		const username = data.get('username');
		const password = data.get('password');

		// Simple validation
		if (!username || !password) {
			return invalid(400, { invalid: true });
		}

		// Check if user exists
		const user = await User.findOne({ email: username });
		if (!user) {
			return invalid(400, { credentials: true });
		}

		// Check if password is correct
		const validPassword = await argon2.verify(user.password, password);
		if (!validPassword) {
			return invalid(400, { credentials: true });
		}

		// Update user token
		const updateToken = await argon2.hash(`${username}${password}`);
		await user.updateOne({ email: username }, { updateToken });

		// Set cookie
		cookies.set('session', updateToken, {
			path: '/',
			httpOnly: true,
			sameSite: 'strict',
			secure: process.env.NODE_ENV === 'production',
			maxAge: 60 * 60 * 24 * 1
		});

		// Redirect to home, could be wherever
		throw redirect(303, '/');
	}
};
