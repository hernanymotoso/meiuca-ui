"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@storybook/react");
const Heading_1 = require("./Heading");
react_2.storiesOf('Heading', module).add('Default', () => (react_1.default.createElement(Heading_1.Heading, null, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut corrupti quibusdam modi accusantium sequi itaque dolor fugiat error architecto provident porro ducimus nisi aspernatur tenetur dolore velit, ex vero est.")));
