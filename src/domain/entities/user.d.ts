export declare class User {
    readonly userId: string;
    readonly firstName: string;
    readonly lastName: string;
    readonly username: string;
    readonly email: string;
    readonly passwordHash: string; // password hash
    readonly phoneNumber?: string; // optional phone number for MFA
    readonly roleId: string;
    readonly isActive: boolean;
    readonly lastLoginAt?: Date;
    readonly createdAt: Date;
    readonly updatedAt: Date;

    constructor(
        userId: string,
        firstName: string,
        lastName: string,
        username: string,
        email: string,
        passwordHash: string,
        roleId: string,
        isActive: boolean,
        lastLoginAt?: Date,
        phoneNumber?: string,
        createdAt: Date,
        updatedAt: Date
    );
}