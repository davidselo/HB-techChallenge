
import {expect} from '@oclif/test'
import {assert} from 'chai'

import {ReadCsv} from '../../src/helpers/read-csv'

describe('ReadCsv Class test suite.', function () {
  describe('readPickUpCsv method', function () {
    it('On success.', async function () {
      // Arrange
      const file = './test/fixtures/hb_test.csv'
      const csvReadHandler = new ReadCsv(file)

      // Act
      const result = await csvReadHandler.readPickUpCsv()

      // Assert
      expect(result.length).to.equal(3)
    })
  })
})
