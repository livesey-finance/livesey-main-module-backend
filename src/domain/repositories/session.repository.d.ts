import { Session } from '../entities/session.entity.d.ts';
export declare abstract class SessionRepository {
    constructor();
    abstract findById(id: string): Promise<Session | null>;
    abstract findBy(criteria: Record<string, any>): Promise<Session[]>;
    abstract findAll(): Promise<Session[]>;
    abstract update(id: string, data: Partial<Session>): Promise<void>;
    abstract save(session: Session): Promise<void>;
    abstract delete(id: string): Promise<void>;
}