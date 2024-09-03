import { History } from '../entities/history.entity.d.ts';

export declare abstract class HistoryRepository {
    constructor();
    abstract findById(id: string): Promise<History | null>;
    abstract findBy(criteria: Record<string, any>): Promise<History[]>;
    abstract findAll(): Promise<History[]>;
    abstract update(id: string, data: Partial<History>): Promise<void>;
    abstract save(history: History): Promise<void>;
    abstract delete(id: string): Promise<void>;
}