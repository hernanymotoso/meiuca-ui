"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@testing-library/react");
const Subtitle_1 = require("./Subtitle");
describe('Subtitle component', () => {
    it('should render the Subtitle', () => {
        react_2.render(react_1.default.createElement(Subtitle_1.Subtitle, null, "Subtitle test"));
        expect(react_2.screen.getByRole('heading')).toBeTruthy();
    });
    it('should render the Subtitle with children = Subtitle test', () => {
        const { getByText } = react_2.render(react_1.default.createElement(Subtitle_1.Subtitle, null, "Subtitle teste"));
        expect(getByText('Subtitle teste')).toBeTruthy();
    });
});
