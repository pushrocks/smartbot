import * as plugins from './smartbot.plugins'

export class Smartbot {
  apiKey: string
  private apiAiApp
  constructor (apiAiKeyArg: string) {
    this.apiKey = apiAiKeyArg
    this.apiAiApp = plugins.apiai(apiAiKeyArg)
  }
  

}
