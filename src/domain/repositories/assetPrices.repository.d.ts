import { Asset } from "../entities/assetPrices.entity.d.ts";

export declare abstract class AssetPricesRepository {
    constructor();
    abstract findById(id: string): Promise<Asset | null>;
    abstract findBy(criteria: Record<string, any>): Promise<Asset[]>;
    abstract findAll(): Promise<Asset[]>;
    abstract update(id: string, data: Partial<Asset>): Promise<void>;
    abstract save(asset: Asset): Promise<void>;
    abstract delete(id: string): Promise<void>;
}