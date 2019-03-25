declare namespace mosquittoPasswd {
    export interface MosquittoPasswd {
        (username: string, password: string, salt?: Buffer): Promise<string>;
    }
}

declare const mosquittoPasswd = mosquittoPasswd.MosquittoPasswd;

export = mosquittoPasswd;
