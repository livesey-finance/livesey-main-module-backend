export declare class Role {
    readonly roleId: string;
    readonly roleName: string;
    readonly permissions: string[]; // Список ідентифікаторів дозволів

    constructor(
        roleId: string,
        roleName: string,
        permissions: string[]
    );
}
