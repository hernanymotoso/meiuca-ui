"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@testing-library/react");
const Paragraph_1 = require("./Paragraph");
describe('Paragraph component', () => {
    it('should render the Paragraph', () => {
        react_2.render(react_1.default.createElement(Paragraph_1.Paragraph, { "aria-label": "Paragraph Test" }, "Paragraph test"));
        expect(react_2.screen.getByLabelText(/paragraph test/i)).toBeTruthy();
    });
    it('should render the Paragraph with children = Paragraph test', () => {
        const { getByText } = react_2.render(react_1.default.createElement(Paragraph_1.Paragraph, null, "Paragraph teste"));
        expect(getByText('Paragraph teste')).toBeTruthy();
    });
});
