import {ProductLocation} from '../contracts/products'

// Sort Algorithm base on bay letter and shelf.
// Given bays A, B, C..., Z, AA, AB, AC., ..AZ
export const sortProductLocationAlgorthm = (a: ProductLocation, b:ProductLocation): number => {
  return a.pickLocation.split(' ')[0].length - b.pickLocation.split(' ')[0].length || // Order by A-Z before AA-AZ.
                a.pickLocation.charCodeAt(0) - b.pickLocation.charCodeAt(0) || // Order by base on first bay Letter.
                 a.pickLocation.charCodeAt(1) - b.pickLocation.charCodeAt(1) || // Order by base on second bay letter.
                 Number(a.pickLocation.split(' ')[1]) - Number(b.pickLocation.split(' ')[1]) // Order by shelf number.
}

// Given an array of ProductLocation, it will merge duplicated products and sum the qty in it.
export const mergeDuplicatedItems = (pickRunArray: Array<ProductLocation>): Array<ProductLocation> => {
  const result = new Map()

  for (const elem of pickRunArray) {
    if (result.get(elem.productCode)) {
      const resultElement:ProductLocation = result.get(elem.productCode)
      result.set(elem.productCode,
        {...resultElement,
          quantity: elem.quantity + resultElement.quantity,
        })
    } else {
      result.set(elem.productCode, {productCode: elem.productCode, quantity: elem.quantity, pickLocation: elem.pickLocation})
    }
  }

  return [...result.values()]
}

