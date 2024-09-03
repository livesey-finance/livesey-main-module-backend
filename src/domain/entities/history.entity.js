export class History {
  constructor(
    changeId,
    assetType,
    assetId,
    portfolioId,
    amount,
    priceAtTransaction,
    currencyCode,
    transactionType,
    status,
    transactionDate,
    ipAddress
  ) {
    this.changeId = changeId;
    this.assetType = assetType;
    this.assetId = assetId;
    this.portfolioId = portfolioId;
    this.amount = amount;
    this.priceAtTransaction = priceAtTransaction;
    this.currencyCode = currencyCode;
    this.transactionType = transactionType;
    this.status = status;
    this.transactionDate = transactionDate;
    this.ipAddress = ipAddress;
  }
}
