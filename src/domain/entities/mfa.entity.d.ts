export type Method = "SMS" | "EMAIL";

export declare class Mfa {
    readonly mfaId: string;
    readonly userId: string;
    readonly method: Method;
    readonly isEnabled: boolean;
    readonly secretKey: string;
    readonly backupCodes?: string[];
    readonly lastUsedAt?: Date;

    constructor(
        mfaId: string,
        userId: string,
        method: Method,
        isEnabled: boolean,
        secretKey: string,
        backupCodes?: string[],
        lastUsedAt?: Date
    );
}