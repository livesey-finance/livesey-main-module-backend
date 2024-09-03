import { AssetPricesRepository } from '../repositories/assetPrices.repository.js';
import { Asset } from '../entities/asset.entity.d.ts';

export class AssetService {
  constructor() {
    this.assetRepository = new AssetPricesRepository();
  }

  async createAsset(assetData) {
    const asset = new Asset(
      assetData.assetId,
      assetData.assetType,
      assetData.name,
      assetData.currentPrice,
      assetData.currencyCode
    );
    await this.assetRepository.save(asset);
    return asset;
  }

  async getAssetById(id) {
    return await this.assetRepository.findById(id);
  }

  async getAllAssets() {
    return await this.assetRepository.findAll();
  }

  async updateAsset(id, data) {
    await this.assetRepository.update(id, data);
  }

  async deleteAsset(id) {
    await this.assetRepository.delete(id);
  }
}
