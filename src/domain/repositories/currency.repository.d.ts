import { Currency } from "../entities/currency.entity.d.ts";

export declare abstract class CurrencyRepository {
    constructor();

    abstract findById(id: string): Promise<Currency | null>;
    abstract findBy(criteria: Record<string, any>): Promise<Currency[]>;
    abstract findAll(): Promise<Currency[]>;
    abstract update(id: string, data: Partial<Currency>): Promise<void>;
    abstract save(currency: Currency): Promise<void>;
    abstract delete(id: string): Promise<void>;
}