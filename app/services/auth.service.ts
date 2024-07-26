import { accountClient, generateID } from "./api";

export class AuthService {
  static async createUser(email: string, password: string) {
    const response = await accountClient.create(generateID, email, password);
    return response;
  }

  static async login(email: string, password: string) {
    const response = await accountClient.createEmailSession(email, password);
    return response;
  }

  static async logout() {
    const response = await accountClient.deleteSession("current");
    return response;
  }

  static async checkForSession() {
    const response = await accountClient.getSession("current");
    return response;
  }
}
