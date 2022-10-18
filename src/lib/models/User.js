import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema(
	{
		name: {
			type: String
		},
		email: {
			type: String
		},
		password: {
			type: String
		},
		updateToken: {
			type: String
		},
		role: {
			type: String,
			default: 'user'
		},
		avatar: {
			type: String,
			default: 'https://via.placeholder.com/150/150'
		},
		location: {
			address: {
				type: String
			},
			address2: {
				type: String
			},
			city: {
				type: String
			},
			state: {
				type: String
			},
			zip: {
				type: String
			}
		}
	},
	{
		timestamps: true
	}
);

export default mongoose.model('User', userSchema);
