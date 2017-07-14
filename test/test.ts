import { expect, tap } from 'tapbundle'
import { Qenv } from 'qenv'

let testQenv = new Qenv(process.cwd(), process.cwd() + '/.nogit')

import * as smartbot from '../dist/index'

let testSmartbot: smartbot.Smartbot

tap.test('should create a valid smartbot instance', async () => {
  testSmartbot = new smartbot.Smartbot(process.env.APIAI_KEY)
  expect(testSmartbot).to.be.instanceof(smartbot.Smartbot)
})

tap.test('should get a valid response for a question', async () => {
  let response = await testSmartbot.textRequest('Who are you?')
  console.log(response)
})

tap.start()
