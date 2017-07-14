export declare class Smartbot {
    private apiKey;
    private apiAiApp;
    constructor(apiAiKeyArg: string);
    textRequest(textArg: string): Promise<{}>;
}
