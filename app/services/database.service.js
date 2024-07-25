import { databaseClient, generateID, dataBaseID, collectionID } from "./api";

export class DatabaseService {
  static async createEntity(linksdata) {
    const response = await databaseClient.createDocument(
      dataBaseID,
      collectionID,
      generateID,
      linksdata
    );
    return response;
  }
}
