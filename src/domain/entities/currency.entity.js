export class Currency {
  constructor(
    currencyId,
    currencyCode,
    name,
    symbol,
    exchangeRate,
    decimalPlaces,
    lastUpdated
  ) {
    this.currencyId = currencyId;
    this.currencyCode = currencyCode;
    this.name = name;
    this.symbol = symbol;
    this.exchangeRate = exchangeRate;
    this.decimalPlaces = decimalPlaces;
    this.lastUpdated = lastUpdated;
  }
}
