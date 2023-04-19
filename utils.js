import { Client, Databases } from "appwrite";

const client = new Client();

const databases = new Databases(client);

const DATABASE_ID = "643ea708d91b14159785";
const COLLECTION_ID = "643ea7251690d1c0677f";
const PROJECT_ID = "643ea60281c6885f207f";
const APPWRITE_ENDPOINT = "https://cloud.appwrite.io/v1";

client.setEndpoint(APPWRITE_ENDPOINT).setProject(PROJECT_ID);

export const getComment = databases.listDocuments(DATABASE_ID, COLLECTION_ID);
