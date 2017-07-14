import { expect, tap } from 'tapbundle'
import { Qenv } from 'qenv'

let testQenv = new Qenv(process.cwd(), process.cwd() + '/.nogit')

import * as smartbot from '../dist/index'

tap.test('first test', async () => {
  console.log('hey')
  smartbot
})

tap.start()
