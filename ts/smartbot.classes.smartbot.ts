import * as plugins from './smartbot.plugins'

export class Smartbot {
  private apiKey: string
  private apiAiApp: any
  constructor(apiAiKeyArg: string) {
    this.apiKey = apiAiKeyArg
    this.apiAiApp = plugins.apiai(apiAiKeyArg)
  }

  async textRequest (textArg: string) {
    let done = plugins.smartq.defer()
    let request = this.apiAiApp.textRequest(textArg, {
      sessionId: '<unique session id>'
    })

    request.on('response', function (response) {
      done.resolve(response)
    })

    request.on('error', function (error) {
      done.reject(error)
    })

    request.end()
    return await done.promise
  }

}
