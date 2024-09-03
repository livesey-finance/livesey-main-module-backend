export const TransactionType = {
  BUY: 'Buy',
  SELL: 'Sell'
};

export const Status = {
  PENDING: 'Pending',
  COMPLETED: 'Completed',
  FAILED: 'Failed'
};

export class History {
  constructor(
    changeId,
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
