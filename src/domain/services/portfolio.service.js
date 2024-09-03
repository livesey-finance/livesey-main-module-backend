import { PortfolioRepository } from '../repositories/portfolio.repository.js';
import { Portfolio } from '../entities/portfolio.entity.d.ts';

export class PortfolioService {
  constructor() {
    this.portfolioRepository = new PortfolioRepository();
  }

  async createPortfolio(portfolioData) {
    const portfolio = new Portfolio(
      portfolioData.portfolioId,
      portfolioData.userId,
      portfolioData.name,
      portfolioData.createdAt,
      portfolioData.updatedAt,
      portfolioData.totalValue,
      portfolioData.assets
    );
    await this.portfolioRepository.save(portfolio);
    return portfolio;
  }

  async getPortfolioById(id) {
    return await this.portfolioRepository.findById(id);
  }

  async getAllPortfolios() {
    return await this.portfolioRepository.findAll();
  }

  async updatePortfolio(id, data) {
    await this.portfolioRepository.update(id, data);
  }

  async deletePortfolio(id) {
    await this.portfolioRepository.delete(id);
  }
}
