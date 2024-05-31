/* ============
 * Address Transformer
 * ============
 *
 * The transformer for the address.
 */

import Transformer from './transformer';

export default class AddressTransformer extends Transformer {

  static fetch(item: any) {
    return {
      type: item.type,
      country: item.country,
      stateProvince: item.state_province,
      city: item.city,
      zipcode: item.zipcode,
      address: item.address
    };
  }

  static send(item: any) {
    return {
      type: item.type,
      country: item.country,
      state_province: item.stateProvince,
      city: item.city,
      zipcode: item.zipcode,
      address: item.address
    };
  }
}