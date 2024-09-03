export declare class Portfolio {
    readonly portfolioId: string;
    readonly userId: string;
    readonly name: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    readonly totalValue: number;
    readonly assets: { assetId: string; amount: number }[];

    constructor(
        portfolioId: string,
        userId: string,
        name: string,
        createdAt: Date,
        updatedAt: Date,
        totalValue: number,
        assets: { assetId: string; amount: number }[]
    );
}