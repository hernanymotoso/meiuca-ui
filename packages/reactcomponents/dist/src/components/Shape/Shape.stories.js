"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@storybook/react");
const Shape_1 = require("./Shape");
react_2.storiesOf('Shape', module).add('Default', () => (react_1.default.createElement(Shape_1.Shape, null, "Lorem ipsum, dolor sit amet consectetur adipisicing elit.")));
