import { Role } from '../entities/role.entity.d.ts';

export declare abstract class RoleRepository {
    constructor();
    abstract findById(id: string): Promise<Role | null>;
    abstract findBy(criteria: Record<string, any>): Promise<Role[]>;
    abstract findAll(): Promise<Role[]>;
    abstract update(id: string, data: Partial<Role>): Promise<void>;
    abstract save(role: Role): Promise<void>;
    abstract delete(id: string): Promise<void>;
}