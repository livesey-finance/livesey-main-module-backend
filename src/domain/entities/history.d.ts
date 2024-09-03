export declare class History {
    readonly changeId: string;
    readonly assetType: AssetType;
    readonly assetId: string;
    readonly portfolioId: string;
    readonly amount: number;
    readonly priceAtTransaction: number;
    readonly currencyCode: string; // Код валюти для транзакції
    readonly transactionType: "Buy" | "Sell"; // Тип транзакції
    readonly status: "Pending" | "Completed" | "Failed"; // Статус транзакції
    readonly transactionDate: Date;
    readonly ipAddress: string;

    constructor(
        changeId: string,
        assetType: AssetType,
        assetId: string,
        portfolioId: string,
        amount: number,
        priceAtTransaction: number,
        currencyCode: string,
        transactionType: "Buy" | "Sell",
        status: "Pending" | "Completed" | "Failed",
        transactionDate: Date,
        ipAddress: string
    );
}