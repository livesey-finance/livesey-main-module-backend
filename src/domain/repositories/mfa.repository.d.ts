import { Mfa } from '../entities/mfa.entity.d.ts';

export declare abstract class MfaRepository {
    constructor();
    abstract findById(id: string): Promise<Mfa | null>;
    abstract findBy(criteria: Record<string, any>): Promise<Mfa[]>;
    abstract findAll(): Promise<Mfa[]>;
    abstract update(id: string, data: Partial<Mfa>): Promise<void>;
    abstract save(mfa: Mfa): Promise<void>;
    abstract delete(id: string): Promise<void>;
}