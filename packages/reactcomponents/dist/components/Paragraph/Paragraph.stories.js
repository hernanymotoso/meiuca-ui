"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@storybook/react");
const Paragraph_1 = require("./Paragraph");
(0, react_2.storiesOf)('Paragraph', module).add('Default', () => react_1.default.createElement(Paragraph_1.Paragraph, null, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut corrupti quibusdam modi accusantium sequi itaque dolor fugiat error architecto provident porro ducimus nisi aspernatur tenetur dolore velit, ex vero est."));
