"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@testing-library/react");
const Shape_1 = require("./Shape");
describe('Shape component', () => {
    it('should render the Shape with children = Shape test', () => {
        const { getByText } = react_2.render(react_1.default.createElement(Shape_1.Shape, null, "Shape teste"));
        expect(getByText('Shape teste')).toBeTruthy();
    });
});
