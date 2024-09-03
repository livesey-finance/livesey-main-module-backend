export declare class Permission {
    readonly permissionId: string;
    readonly permissionName: string;
    readonly description?: string;

    constructor(
        permissionId: string,
        permissionName: string,
        description?: string
    );
}