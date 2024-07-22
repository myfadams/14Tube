import {
	Client,
	Account,
	ID,
	Avatars,
	Databases,
	Storage,
	Query,
} from "react-native-appwrite";

export const appwriteConfig = {
};

const client = new Client();

client
	.setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
	.setProject(appwriteConfig.projectId) // Your project ID
	.setPlatform(appwriteConfig.Platform); // Your application ID or bundle ID.
const avatars = new Avatars(client);

export {avatars}
