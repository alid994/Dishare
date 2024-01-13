import { Client, Account, Database, Storage, Avatars } from 'appwrite';

export const appwriteConfig = {
    projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
    url:  import.meta.env.VITE_APPWRITE_URL,
}

export const client = new Client();

client.setProject(appwriteConfig.projectId);
client.setEndpoint(appwriteConfig.url)

export const account = new Account();
export const database = new Database();
export const storage = new Storage();
export const avatars = new Avatars();