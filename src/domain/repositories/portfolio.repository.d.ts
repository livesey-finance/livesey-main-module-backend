import { Portfolio } from '../entities/portfolio.entity.d.ts';
export declare abstract class PortfolioRepository {
    constructor();
    abstract findById(id: string): Promise<Portfolio | null>;
    abstract findBy(criteria: Record<string, any>): Promise<Portfolio[]>;
    abstract findAll(): Promise<Portfolio[]>;
    abstract update(id: string, data: Partial<Portfolio>): Promise<void>;
    abstract save(portfolio: Portfolio): Promise<void>;
    abstract delete(id: string): Promise<void>;
}