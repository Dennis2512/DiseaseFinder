"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const port = process.env.port || 3000 || 80;
const baseurl = 'http://35.234.114.16:';
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    await app.listen(port);
    common_1.Logger.log(`Server running on ${baseurl}${port}`, 'Bootstrap');
}
bootstrap();
//# sourceMappingURL=main.js.map