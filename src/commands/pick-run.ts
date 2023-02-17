import {Args, Command, Flags, ux} from '@oclif/core'
import {ReadCsv} from '../helpers/read-csv'
import {WriteCsv} from '../helpers/write-csv'

export default class PickRun extends Command {
  static description = 'describe the command here'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {
    // flag with a value (-n, --name=VALUE)
    name: Flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    force: Flags.boolean({char: 'f'}),
  }

  static args = {
    file: Args.string({description: 'file to read'}),
  }

  public async run(): Promise<void> {
    // Start the spinner.
    ux.action.start('Reading Pick run File')
    const file = './data/hb_test.csv'
    const csvReadHandler = new ReadCsv(file)

    const result = await csvReadHandler.readPickUpCsv()
    this.log('Pick run sort by Bay')

    ux.table(result, {
      productCode: {
        minWidth: 7,
      },
      quantity: {
        minWidth: 7,
      },
      pickLocation: {
        minWidth: 7,
      },
    })
    ux.action.stop()
    ux.action.start('Generating output file')
    const csvWriteHandler = new WriteCsv(result)
    csvWriteHandler.writeOptimalPickRun()
    ux.action.stop()
  }
}
