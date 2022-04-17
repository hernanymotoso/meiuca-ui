"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Heading = void 0;
const web_1 = require("web");
exports.Heading = (0, web_1.css)({
    variants: {
        color: {
            'heading-sm': {
                color: '$color-neutral-01',
            },
            'heading-secondary': {
                color: '$color-neutral-05',
            },
        },
    },
    defaultVariants: {
        color: 'heading-sm',
    },
    // Default
    fontSize: '$font-size-lg',
    lineHeight: '$line-height-distant',
    fontFamily: '$font-family-highlight',
    fontWeight: '$font-weight-bold',
    color: '$color-neutral-01',
});
