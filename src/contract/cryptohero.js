import { UnitConversionTool } from '../utils';
import heroProfile from '../hero.json';// '@/heroProfile.json';
import Contract from './contract';

import NebPay from 'nebpay.js';

const nebPay = new NebPay();

function getCardInfoByHeroId(id, tkId, prices) {
  const basic = heroProfile[id];
  if (!basic) {
    console.error(`error detected id is ${id}`);
  }
  const cardImage = {
    code: id,
    front: `http://test.cdn.hackx.org/heros_new/${id}.jpeg`,
    back: `http://test.cdn.hackx.org/backs_new/${id}.jpeg`,
  };

  const res = Object.assign(basic, cardImage, prices);
  const result = Object.assign({ tokenId: tkId }, res);
  return result;
}

export default class LinkIdolContract extends Contract {
  constructor() {
    super({
      contractAddress: 'n1gDfiiQLEBu95xDWHGxNi4qToyXjD2vE4D',
      network: 'mainnet',
    });
  }

  async getTokenIDsByAddress(address) {
    const result = await this.call(
      {
        functionName: 'getTokenIDsByAddress',
        args: [address],
      });
    return JSON.parse(result);
  }

  async getCardInfoByTokenId(token) {
    const heroId = await this.call(
      {
        functionName: 'getHeroIdByTokenId',
        args: [token],
      });
    return heroProfile[heroId];
  }

  async getCardsByAddress(address) {
    const result = await this.call(
      {
        functionName: 'getCardsByAddress',
        args: [address],
      });
    return JSON.parse(result);
  }

  async getUserCards(address) {
    const tokenIds = await this.getCardsByAddress(address);
    const result = await Promise.all(tokenIds.map(async info => getCardInfoByHeroId(info.heroId, info.tokenId, info.price)));
    return result;
  }

  async buyToken(id, price) {
    const value = price;
    const result = await this.send(
      {
        functionName: 'buyToken',
        value,
        data: [Number(id)],
      });
    return JSON.parse(result);
  }

  async setTokenPrice({ tokenId, value }) {
    const result = await this.send(
      {
        functionName: 'setTokenPrice',
        data: [tokenId, Number(value)],
      });
    return JSON.parse(result);
  }

  async isTokenClaimed(tokenId) { // added by Gloria
    const isTokenClaimed = await this.call({
      functionName: 'isTokenClaimed',
      args: [tokenId],
    });
    return JSON.parse(isTokenClaimed);
  }

  async ownerOf(tokenId) { // added by Dawn
    const owner = await this.call({
      functionName: 'ownerOf',
      args: [tokenId],
    });
    return JSON.parse(owner);
  }

  async priceOf(tokenId) { // added by Dawn
    const price = await this.call({
      functionName: 'priceOf',
      args: [tokenId],
    });
    const priceNumber = JSON.parse(price)
    return UnitConversionTool.fromWeiToNas(priceNumber).toString(10);
  }

  async getTotalSupply() { // Added by Dawn
    const total = await this.call({
      functionName: 'getTotalSupply',
    });
    if (total !== null) {
      return JSON.parse(total);
    }
    return 0;
  }
  
  async checkSerialNumber(sn) {
    return await nebPay.queryPayInfo(sn, {
      callback: NebPay.config.mainnetUrl,
    });
    // .then(function (resp) {
    //       console.log("snrespres:"+resp);
    // })
    // .catch(function (err) {
    //       console.log("snrespres:"+err);
    // });
  }
}
