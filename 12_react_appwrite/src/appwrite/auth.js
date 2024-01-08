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

    // create use account
    async createAccount({ email, password, name }) {
        try {
            const userAcount = await this.account.create(ID.unique(), email, password, name);
            if (userAcount) {
                // once created derect login
                return this.login({ email, password });
            } else {
                return userAcount;
            }
        } catch (error) {
            throw error;
        }
    }

    // login to account
    async login({ email, password }) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    // get user acount
    async getCurrentUser() {
        try {
            // get account
            // return await this.account.get();
            return await this.account.get()
        } catch (error) {
            console.log(error);;
        }

        return null;
    }

    // logout to account
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
