import { MERCHANTS } from "../constants/merchants";

/**
 * Get the name of a merchant.
 * @param {number} id The ID of the merchant.
 * @returns The name of the merchant, or an empty string if none is found.
 */
export default function getMerchantName(id) {
  if (typeof id !== 'number') {
    throw Error(`ID should be a number; got ${typeof id}`)
  }
  const merchant = MERCHANTS.find(m => m.id === id)
  return merchant ? merchant.name : '';
}