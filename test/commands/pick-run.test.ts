import {expect, test} from '@oclif/test'

describe('pick-run', () => {
  test
  .stdout()
  .command(['pick-run'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['pick-run', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
