"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const plugins = require("./smartbot.plugins");
class Smartbot {
    constructor(apiAiKeyArg) {
        this.apiKey = apiAiKeyArg;
        this.apiAiApp = plugins.apiai(apiAiKeyArg);
    }
    textRequest(textArg) {
        return __awaiter(this, void 0, void 0, function* () {
            let done = plugins.smartq.defer();
            let request = this.apiAiApp.textRequest(textArg, {
                sessionId: '<unique session id>'
            });
            request.on('response', function (response) {
                done.resolve(response);
            });
            request.on('error', function (error) {
                done.reject(error);
            });
            request.end();
            return yield done.promise;
        });
    }
}
exports.Smartbot = Smartbot;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRib3QuY2xhc3Nlcy5zbWFydGJvdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3NtYXJ0Ym90LmNsYXNzZXMuc21hcnRib3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDhDQUE2QztBQUU3QztJQUdFLFlBQVksV0FBbUI7UUFDN0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxXQUFXLENBQUE7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBQzVDLENBQUM7SUFFSyxXQUFXLENBQUUsT0FBZTs7WUFDaEMsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQTtZQUNqQyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUU7Z0JBQy9DLFNBQVMsRUFBRSxxQkFBcUI7YUFDakMsQ0FBQyxDQUFBO1lBRUYsT0FBTyxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsVUFBVSxRQUFRO2dCQUN2QyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1lBQ3hCLENBQUMsQ0FBQyxDQUFBO1lBRUYsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBVSxLQUFLO2dCQUNqQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFBO1lBQ3BCLENBQUMsQ0FBQyxDQUFBO1lBRUYsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFBO1lBQ2IsTUFBTSxDQUFDLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQTtRQUMzQixDQUFDO0tBQUE7Q0FFRjtBQTFCRCw0QkEwQkMifQ==