"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const web_1 = require("web");
exports.Button = (0, web_1.css)({
    // Default
    border: 0,
    fontSize: '$font-size-sm',
    lineHeight: '$line-height-tight',
    borderRadius: '$border-radius-none',
    padding: '$spacing-squish-xs',
    fontFamily: '$font-family-highlight',
    fontWeight: '$font-weight-medium',
    color: '$color-neutral-05',
    backgroundColor: '$color-brand-primary-03',
    // Hover
    '&:hover': {
        backgroundColor: '$color-brand-primary-02'
    }
});
