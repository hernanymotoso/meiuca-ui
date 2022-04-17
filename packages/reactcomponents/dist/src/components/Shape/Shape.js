"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shape = void 0;
const react_1 = __importDefault(require("react"));
const styles_1 = require("styles");
const web_1 = require("web");
const StyledShape = web_1.styled('div', styles_1.Shape);
const Shape = ({ children, props }) => (react_1.default.createElement(StyledShape, Object.assign({}, props), children));
exports.Shape = Shape;
