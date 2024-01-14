import { Client, Account, Databases, Storage, Avatars } from 'appwrite';

export const appwriteConfig = {
    url:  'https://cloud.appvrite.io/v1',
    projectId: '65a267aa20bd510d18e2',
    databaseId: '65a3c22a2398f9331054',
    storageId: '65a3c1beb2d420ff0c98',
    userCollectionId: '65a3c2a95e8a11499bac',
    postCollectionId: '65a3c25e9d27dd1abb58',
    savesCollectionId: '65a3c2caeda16945c784'
    
}

export const client = new Client();

client.setProject(appwriteConfig.projectId);
client.setEndpoint(appwriteConfig.url);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);