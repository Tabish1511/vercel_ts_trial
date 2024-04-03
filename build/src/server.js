"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
// import helmet from 'helmet';
// import TTS from './routes/tts';
// import File from './routes/file';
// import Files from './routes/files';
const PORT = process.env.PORT || 8000;
const server = (0, express_1.default)();
server.use((0, morgan_1.default)('dev'));
server.use((0, cors_1.default)());
// server.use(
//   helmet({
//     contentSecurityPolicy: {
//       directives: {
//         defaultSrc: ["'self'"],
//         scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
//         styleSrc: ["'self'", 'fonts.googleapis.com'],
//       },
//     },
//   })
// );
server.use(express_1.default.json());
server.use(express_1.default.urlencoded({ extended: false }));
server.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
console.log('Dir: ', path_1.default.join(__dirname, '../public'));
// server.use('/api/v1/files', Files);
// server.use('/api/v1/file', File);
// server.use('/api/v1/tts', TTS);
server.listen(PORT, () => console.log(`Server running on: http://localhost:${PORT}`));
exports.default = server;
//# sourceMappingURL=server.js.map