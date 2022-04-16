"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subtitle = void 0;
const react_1 = __importDefault(require("react"));
const styles_1 = require("styles");
const web_1 = require("web");
const StyledSubtitle = (0, web_1.styled)('h2', styles_1.Subtitle);
const Subtitle = ({ children }) => {
    return (react_1.default.createElement(StyledSubtitle, null, children));
};
exports.Subtitle = Subtitle;
