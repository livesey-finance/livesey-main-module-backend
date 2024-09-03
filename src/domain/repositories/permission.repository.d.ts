import { Permission } from '../entities/permission.entity.d.ts';
export declare abstract class PermissionRepository {
    constructor();
    abstract findById(id: string): Promise<Permission | null>;
    abstract findBy(criteria: Record<string, any>): Promise<Permission[]>;
    abstract findAll(): Promise<Permission[]>;
    abstract update(id: string, data: Partial<Permission>): Promise<void>;
    abstract save(permission: Permission): Promise<void>;
    abstract delete(id: string): Promise<void>;
}