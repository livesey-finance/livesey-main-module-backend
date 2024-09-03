import { User } from '../entities/user.entity.d.ts';

export declare abstract class UserRepository {
    constructor();
    abstract findById(id: string): Promise<User | null>;
    abstract findBy(criteria: Record<string, any>): Promise<User[]>;
    abstract findAll(): Promise<User[]>;
    abstract update(id: string, data: Partial<User>): Promise<void>;
    abstract save(user: User): Promise<void>;
    abstract delete(id: string): Promise<void>;
}