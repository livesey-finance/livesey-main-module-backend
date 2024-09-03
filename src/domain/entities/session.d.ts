export declare class Session {
    readonly sessionId: string;
    readonly userId: string;
    readonly token: string;
    readonly createdAt: Date;
    readonly expiredAt: Date;
    readonly ipAddress: string;
    readonly isRevoked: boolean;

    constructor(
        sessionId: string,
        userId: string,
        token: string,
        createdAt: Date,
        expiredAt: Date,
        ipAddress: string,
        isRevoked: boolean
    );
}