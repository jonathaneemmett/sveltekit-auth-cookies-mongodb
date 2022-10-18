import { mongoose } from 'mongoose';
import { MONGO_URI } from '$env/static/private';

export const start_mongo = async () => {
	try {
		const conn = await mongoose.connect(MONGO_URI);
		console.log(`MongoDB Connected: ${conn.connection.host}`);
	} catch (error) {
		console.log(`Error starting MongoDB: ${error}`);
		process.exit(1);
	}
};
