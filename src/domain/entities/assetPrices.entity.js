export const AssetType = Object.freeze({
  SHARES: 'Shares',
  CRYPTO: 'Crypto'
});

export class Asset {
  constructor(
    assetId,
    assetType,
    name,
    symbol,
    currentPrice,
    currencyCode
  ) {
    this.assetId = assetId;
    this.assetType = assetType;
    this.name = name;
    this.symbol = symbol;
    this.currentPrice = currentPrice;
    this.currencyCode = currencyCode;
  }
}
