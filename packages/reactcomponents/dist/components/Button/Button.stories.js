"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@storybook/react");
const Button_1 = require("./Button");
(0, react_2.storiesOf)('Button', module).add('Default', () => react_1.default.createElement(Button_1.Button, null, "Hernany"));
