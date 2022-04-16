"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const react_1 = __importDefault(require("react"));
const styles_1 = require("styles");
const web_1 = require("web");
const StyledButton = (0, web_1.styled)('button', styles_1.Button);
const Button = ({ children }) => {
    return (react_1.default.createElement(StyledButton, null, children));
};
exports.Button = Button;
