import {expect, test} from '@oclif/test'

describe('pick-run', () => {
  test
  .stdout()
  .command(['pick-run'])
  .it('runs pick-run', ctx => {
    expect(ctx.stdout).to.contain('Pick run sort by Bay')
  })
})
