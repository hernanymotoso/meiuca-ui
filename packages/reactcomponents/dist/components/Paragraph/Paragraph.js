"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paragraph = void 0;
const react_1 = __importDefault(require("react"));
const styles_1 = require("styles");
const web_1 = require("web");
const StyledParagraph = (0, web_1.styled)('p', styles_1.Paragraph);
const Paragraph = ({ children }) => {
    return (react_1.default.createElement(StyledParagraph, null, children));
};
exports.Paragraph = Paragraph;
