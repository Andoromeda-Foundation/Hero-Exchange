import { BigNumber } from "bignumber.js";

export const getMe = async () => new Promise((resolve) => {
    window.postMessage({
      target: 'contentscript',
      data: {
      },
      method: 'getAccount',
    }, '*');
    window.addEventListener('message', ({ data }) => {
      if (data.data && data.data.account) {
        resolve(data.data.account);
      }
    });
})

export const getHerosCardImages = (id) => ({
    front: `http://test.cdn.hackx.org/heros_new/${id}.jpeg`,
    back: `http://test.cdn.hackx.org/backs_new/${id}.jpeg`
})

export class UnitConversionTool {
    static fromNasToWei(value) {
      return new BigNumber('1000000000000000000').times(value);
    }
    static fromWeiToNas(value) {
      if (value instanceof BigNumber) {
        return value.dividedBy('1000000000000000000');
      }
      return new BigNumber(value).dividedBy('1000000000000000000');
    }
  }