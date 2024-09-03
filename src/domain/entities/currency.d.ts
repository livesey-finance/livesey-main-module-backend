export declare class Currency {
    readonly currencyId: string;
    readonly currencyCode: string;
    readonly name: string;
    readonly symbol: string;
    readonly exchangeRate: number;
    readonly decimalPlaces: number;
    readonly lastUpdated: Date;

    constructor(
        currencyId: string,
        currencyCode: string,
        name: string,
        symbol: string,
        exchangeRate: number,
        decimalPlaces: number,
        lastUpdated: Date
    );
}