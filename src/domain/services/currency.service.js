import { CurrencyRepository } from '../repositories/currency.repository.js';
import { Currency } from '../entities/currency.entity.d.ts';

export class CurrencyService {
  constructor() {
    this.currencyRepository = new CurrencyRepository();
  }

  async createCurrency(currencyData) {
    const currency = new Currency(
      currencyData.currencyId,
      currencyData.currencyCode,
      currencyData.name,
      currencyData.symbol,
      currencyData.exchangeRate,
      currencyData.decimalPlaces,
      currencyData.lastUpdated
    );
    await this.currencyRepository.save(currency);
    return currency;
  }

  async getCurrencyById(id) {
    return await this.currencyRepository.findById(id);
  }

  async getAllCurrencies() {
    return await this.currencyRepository.findAll();
  }

  async updateCurrency(id, data) {
    await this.currencyRepository.update(id, data);
  }

  async deleteCurrency(id) {
    await this.currencyRepository.delete(id);
  }
}
