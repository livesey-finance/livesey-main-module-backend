export type TransactionType = "Buy" | "Sell";
export type Status = "Pending" | "Completed" | "Failed";

export declare class History {
    readonly changeId: string;
    readonly assetId: string;
    readonly portfolioId: string;
    readonly amount: number;
    readonly priceAtTransaction: number;
    readonly currencyCode: string;
    readonly transactionType: TransactionType;
    readonly status: Status;
    readonly transactionDate: Date;
    readonly ipAddress: string;

    constructor(
        changeId: string,
        assetId: string,
        portfolioId: string,
        amount: number,
        priceAtTransaction: number,
        currencyCode: string,
        transactionType: TransactionType,
        status: Status,
        transactionDate: Date,
        ipAddress: string
    );
}