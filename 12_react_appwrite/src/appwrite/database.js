import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class DatabaseService {
    client = new Client()
    databases;
    bucket; // for storage

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    // create a post
    async createPost({ title, slug, content, featuredImage, status, useId }) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    useId
                }
            )
        } catch (error) {
            throw error;
        }
    }

    // delete a post
    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
            )
            return true;
        } catch (error) {
            throw error;
        }
    }

    // update a post
    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        } catch (error) {
            throw error;
        }
    }

    // get single post
    async getSinglePost(slug) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            throw error;
        }
    }

    // get list of active post
    async getPosts() {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                [
                    // Returns document if attribute is equal to any value in the provided array.
                    Query.equal('status', 'active')
                ]
            )
        } catch (error) {
            throw error;
        }
    }

    // // file services
    // upload file
    async fileUpload(file) {
        try {
            await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            throw error;
        }
    }

    // delete file
    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true;
        } catch (err) {
            throw err
        }
    }

    // get file preview
    async filePreview(fileId) {
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
}

const databaseService = new DatabaseService()

export default databaseService;