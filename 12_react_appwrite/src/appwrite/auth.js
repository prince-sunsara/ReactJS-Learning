import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        try {
            const userAcount = await this.account.create(ID.unique(), email, password, name);
            if (userAcount) {
                // call another method
                this.login({ email, password });
            } else {
                return userAcount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({ email, password }) {
        try {
            const response = await this.account.createEmailSession(email, password);
            return response;
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            // get account
            await this.account.get();
        } catch (error) {
            throw error;
        }
        return null;
    }

    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            throw error;
        }
    }
}

const authService = new AuthService()

export default authService;