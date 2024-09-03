export declare class User {
    readonly userId: string;
    readonly firstName: string;
    readonly lastName: string;
    readonly username: string;
    readonly email: string;
    readonly passwordHash: string;
    readonly photo?: string;
    readonly role: Role;
    readonly isActive: boolean;
    readonly lastLoginAt?: Date;
    readonly phoneNumber?: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;

    constructor(
        userId: string,
        firstName: string,
        lastName: string,
        username: string,
        email: string,
        passwordHash: string,
        role: Role,
        isActive: boolean,
        createdAt: Date,
        updatedAt: Date,
        lastLoginAt?: Date,
        phoneNumber?: string,
        photo?: string
    );
}