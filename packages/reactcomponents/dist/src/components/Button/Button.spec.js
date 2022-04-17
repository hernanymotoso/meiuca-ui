"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@testing-library/react");
const Button_1 = require("./Button");
describe('Button component', () => {
    it('should render the primary button', () => {
        react_2.render(react_1.default.createElement(Button_1.Button, null, "Button test"));
        expect(react_2.screen.getByRole('button')).toBeTruthy();
    });
    it('should render the Button with children = Button test', () => {
        const { getByText } = react_2.render(react_1.default.createElement(Button_1.Button, null, "Button teste"));
        expect(getByText('Button teste')).toBeTruthy();
    });
});
