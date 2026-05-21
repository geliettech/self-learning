import conf from "@/conf/config";
import { Client, Account, ID } from "appwrite";

type CreateUserAccount = {
  email: string;
  password: string;
  name: string;
};

type LoginUserAccount = {
  email: string;
  password: string;
};

const appwriteClient = new Client();

appwriteClient.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);

export const account = new Account(appwriteClient);

export class AppwriteService {
  // create a new record of user inside appwrite
  async createUserAccount({ email, password, name }: CreateUserAccount) {
    try {
      const userAccount = await account.create(
        ID.unique(),
        email,
        password,
        name,
      );

      if (userAccount) {
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      console.error("Error creating user account:", error);
      throw error;
    }
  }

  // login user account
  async login({ email, password }: LoginUserAccount) {
    try {
        // return await account.createEmailSession(email, password);
        return await account.createEmailPasswordSession(email, password);
    } catch (error) {
        throw error;
    }
  }

// check if a user is logged In
  async isloggedIn(): Promise<boolean> {
    try {
        const data = await this.getCurrentUser();
        return Boolean(data);
    } catch (error) {
        
    }
    return false;
  }
  
// get a specific user
  async getCurrentUser() {
    try {
        return account.get()
    } catch (error) {
        console.log("getCurrentUser error", error);
    }

    return null
  }

  // log out current user
  async logout() {
    try {
      return await account.deleteSession("current")
    } catch (error) {
      console.log("logout error: " + error)
    }
  }
}

const appwriteService = new AppwriteService();


export default appwriteService;