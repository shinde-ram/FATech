import { Client, Databases } from "appwrite";

const client = new Client();

client
    .setEndpoint("https://cloud.appwrite.io/v1") // or your custom endpoint
    .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID); // Replace with actual ID

const databases = new Databases(client);

export { databases };
