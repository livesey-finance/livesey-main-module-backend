export declare class Role {
    readonly roleId: string;
    readonly roleName: string;
    readonly permissions: Permission[];

    constructor(
        roleId: string,
        roleName: string,
        permissions: Permission[]
    );
}