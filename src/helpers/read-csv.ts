const fs = require('fs')
import {parse} from 'csv'
import {ProductLocation} from '../contracts/products'
import {sortProductLocationAlgorthm, mergeDuplicatedItems} from '../helpers/locations'

export class ReadCsv {
    pickRunFile: string;
    productLocationsArray : ProductLocation[]= []

    constructor(pickRunFile: string) {
      this.pickRunFile = pickRunFile
    }

    async readPickUpCsv(): Promise<Array<ProductLocation>> {
      return new Promise((resolve, reject) => {
        fs.createReadStream(this.pickRunFile)
        // eslint-disable-next-line camelcase
        .pipe(parse({delimiter: ',', from_line: 2}))
        .on('data', (row:any) => {
          const tuple: ProductLocation = {
            productCode: row[0],
            quantity: Number(row[1]),
            pickLocation: String(row[2]),
          }
          // Add tuple to accumulator array.
          this.productLocationsArray.push(tuple)
        })
        .on('end', () => {
          this.productLocationsArray = mergeDuplicatedItems(this.productLocationsArray.sort((a, b) => sortProductLocationAlgorthm(a, b)))
          resolve(this.productLocationsArray)
        })
        .on('error', (error: { message: any }) => {
          console.error(error.message)
          reject(error)
        })
      })
    }
}
