import {Args, Command, Flags, ux,} from '@oclif/core'
import {ReadCsv} from '../helpers/read-csv'

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
    ux.action.start('Processing Pick run File')
    const file = './data/hb_test.csv'
    const csvHandler = new ReadCsv(file)

    await csvHandler.readPickUpCsv()
    ux.action.stop()
  }
}
