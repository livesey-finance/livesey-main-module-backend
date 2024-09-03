export const AssetType = {
  SHARES: 'Shares',
  CRYPTO: 'Crypto'
};

export class Asset {
  constructor(assetId, assetType, name, currentPrice, currencyCode) {
    this.assetId = assetId;
    this.assetType = assetType;
    this.name = name;
    this.currentPrice = currentPrice;
    this.currencyCode = currencyCode;
  }
}
