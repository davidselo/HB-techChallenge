import {ProductLocation} from '../contracts/products'

export const sortProductLocationAlgorthm = (a: ProductLocation, b:ProductLocation): number => {
  return a.pickLocation.split(' ')[0].length - b.pickLocation.split(' ')[0].length ||
                a.pickLocation.charCodeAt(0) - b.pickLocation.charCodeAt(0) ||
                 a.pickLocation.charCodeAt(1) - b.pickLocation.charCodeAt(1) ||
                 Number(a.pickLocation.split(' ')[1]) - Number(b.pickLocation.split(' ')[1])
}

