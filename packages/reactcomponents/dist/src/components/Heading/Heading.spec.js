"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@testing-library/react");
const Heading_1 = require("./Heading");
describe('Heading component', () => {
    it('should render the Heading', () => {
        react_2.render(react_1.default.createElement(Heading_1.Heading, null, "Heading test"));
        expect(react_2.screen.getByRole('heading')).toBeTruthy();
    });
    it('should render the Heading with children = Heading test', () => {
        const { getByText } = react_2.render(react_1.default.createElement(Heading_1.Heading, null, "Heading teste"));
        expect(getByText('Heading teste')).toBeTruthy();
    });
});
