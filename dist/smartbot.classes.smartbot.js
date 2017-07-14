"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const plugins = require("./smartbot.plugins");
class Smartbot {
    constructor(apiAiKeyArg) {
        this.apiKey = apiAiKeyArg;
        this.apiAiApp = plugins.apiai(apiAiKeyArg);
    }
}
exports.Smartbot = Smartbot;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRib3QuY2xhc3Nlcy5zbWFydGJvdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3NtYXJ0Ym90LmNsYXNzZXMuc21hcnRib3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw4Q0FBNkM7QUFFN0M7SUFHRSxZQUFhLFdBQW1CO1FBQzlCLElBQUksQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFBO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQTtJQUM1QyxDQUFDO0NBR0Y7QUFURCw0QkFTQyJ9