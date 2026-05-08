import conf from "@/conf/config";
import {Client, Account, ID } from "appwrite"


type CreateUserAccount = {
    email: string;
    password: string;
    name: string;
}

type LoginUserAccount = {
    email: string;
    password: string;
}

const appwriteClient = new Client();


appwriteClient.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);


export const account = new Account(appwriteClient)


