export class Portfolio {
  constructor(portfolioId, userId, name, createdAt, updatedAt, totalValue, assets = []) {
    this.portfolioId = portfolioId;
    this.userId = userId;
    this.name = name;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.totalValue = totalValue;
    this.assets = assets; // { assetId, amount }
  }
}
