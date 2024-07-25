import { Client, Account, ID, Databases } from "appwrite";

export const client = new Client();
const baseURL: string = "https://cloud.appwrite.io/v1";
const projectID: any = "669fcb640002df6766d8";

client.setEndpoint(baseURL).setProject(projectID);

export const accountClient = new Account(client);
export const databaseClient = new Databases(client);
export const dataBaseID: any = "669fde51001ff4659892";
export const collectionID: any = "66a11586000ec82289f4";
export const generateID = ID.unique();
