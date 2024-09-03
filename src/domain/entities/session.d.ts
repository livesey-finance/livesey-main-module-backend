export declare class Session {
    readonly sessionId: string;
    readonly token: string;
    readonly createdAt: Date;
    readonly expiredAt: Date;
    readonly userId: string;
    readonly ipAddress: string; // IP-адреса під час сесії
    readonly isRevoked: boolean; // Сесія анульована чи ні

    constructor(
        sessionId: string,
        token: string,
        createdAt: Date,
        expiredAt: Date,
        userId: string,
        ipAddress: string,
        isRevoked: boolean
    );
}