import { HistoryRepository } from '../repositories/history.repository.js';
import { History } from '../entities/history.entity.d.ts';

export class HistoryService {
  constructor() {
    this.historyRepository = new HistoryRepository();
  }

  async createHistory(historyData) {
    const history = new History(
      historyData.changeId,
      historyData.assetId,
      historyData.portfolioId,
      historyData.amount,
      historyData.priceAtTransaction,
      historyData.currencyCode,
      historyData.transactionType,
      historyData.status,
      historyData.transactionDate,
      historyData.ipAddress
    );
    await this.historyRepository.save(history);
    return history;
  }

  async getHistoryById(id) {
    return await this.historyRepository.findById(id);
  }

  async getAllHistory() {
    return await this.historyRepository.findAll();
  }

  async updateHistory(id, data) {
    await this.historyRepository.update(id, data);
  }

  async deleteHistory(id) {
    await this.historyRepository.delete(id);
  }
}
