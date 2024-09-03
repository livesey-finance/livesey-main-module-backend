export class Portfolio {
  constructor(
    portfolioId,
    userId,
    name,
    createdAt,
    updatedAt,
    assets = []
  ) {
    this.portfolioId = portfolioId;
    this.userId = userId;
    this.name = name;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.assets = assets;
  }
}
