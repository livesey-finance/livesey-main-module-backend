export type Method = "SMS" | "EMAIL";

export declare class Mfa {
    readonly mfaId: string;
    readonly method: Method;
    readonly isEnabled: boolean;
    readonly secretKey: string;
    readonly userId: string;
    readonly backupCodes: string[]; // Резервні коди для відновлення доступу
    readonly lastUsedAt?: Date; // Останнє використання MFA

    constructor(
        mfaId: string,
        method: Method,
        isEnabled: boolean,
        secretKey: string,
        userId: string,
        backupCodes: string[],
        lastUsedAt?: Date
    );
}