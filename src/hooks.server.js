import { start_mongo } from '$lib/db/Database.js';
import User from '$lib/models/User.js';
start_mongo();

export async function handle({ event, resolve }) {
	const session = event.cookies.get('session');

	// Check if session exists
	if (!session) {
		// if not just carry on
		return await resolve(event);
	}

	// Get user from session, without the password
	const user = await User.findOne({ userAuthToken: session }).select('-password');

	// If user exists, add it to the event
	if (user) {
		event.locals.user = {
			name: user.email,
			role: user.role
		};
	}

	// Resolve the event
	return await resolve(event);
}
