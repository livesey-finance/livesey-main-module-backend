export type AssetType = "Shares" | "Crypto";

export declare class Asset {
    readonly assetId: string;
    readonly assetType: AssetType;
    readonly name: string;
    readonly currentPrice: number;
    readonly currencyCode: string; // Код валюти, в якій виражена ціна активу

    constructor(
        assetId: string,
        assetType: AssetType,
        name: string,
        currentPrice: number,
        currencyCode: string
    );
}