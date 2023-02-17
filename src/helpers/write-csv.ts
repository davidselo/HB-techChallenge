import {ProductLocation} from '../contracts/products'
// eslint-disable-next-line unicorn/prefer-module
const fs = require('fs')
const filename = 'data/optimalPickRun.csv'
const writableStream = fs.createWriteStream(filename)

// eslint-disable-next-line node/no-extraneous-import
import {stringify} from 'csv-stringify'

export class WriteCsv {
    data: Array<ProductLocation>
    constructor(payload:Array<ProductLocation>) {
      this.data = payload
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    writeOptimalPickRun() {
      // eslint-disable-next-line camelcase
      const stringifier = stringify({header: true, columns: ['productCode', 'quantity', 'pickLocation'], quoted_match: ' '})
      for (const tuple of this.data) {
        // save tuple in stringifier.
        stringifier.write(tuple)
      }

      // dump content on in csv file.
      stringifier.pipe(writableStream)
    }
}
