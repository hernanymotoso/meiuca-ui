import React from "react";
declare const StyledButton: import("@stitches/react/types/styled-component").StyledComponent<"button", any, {}, import("@stitches/react/types/css-util").CSS<{}, {
    colors: {
        'color-brand-primary-01': string;
        'color-brand-primary-02': string;
        'color-brand-primary-03': string;
        'color-brand-primary-04': string;
        'color-brand-primary-05': string;
        'color-neutral-01': string;
        'color-neutral-02': string;
        'color-neutral-03': string;
        'color-neutral-04': string;
        'color-neutral-05': string;
    };
    lineHeights: {
        'line-height-tight': string;
        'line-height-medium': string;
        'line-height-distant': string;
        'line-height-superdistant': string;
    };
    fontSizes: {
        'font-size-xxxs': string;
        'font-size-xxs': string;
        'font-size-xs': string;
        'font-size-sm': string;
        'font-size-md': string;
        'font-size-lg': string;
        'font-size-xl': string;
        'font-size-xxl': string;
        'font-size-xxxl': string;
        'font-size-display': string;
        'font-size-giant': string;
    };
    radii: {
        'border-radius-none': string;
        'border-radius-sm': string;
        'border-radius-md': string;
        'border-radius-lg': string;
        'border-radius-pill': string;
        'border-radius-circular': string;
    };
    borderWidths: {
        'border-with-none': string;
        'border-with-hairline': string;
        'border-with-thin': string;
        'border-with-thick': string;
        'border-with-heavy': string;
    };
    opacity: {
        'opacity-level-semiopaque': number;
        'opacity-level-intense': number;
        'opacity-level-medium': number;
        'opacity-level-light': number;
        'opacity-level-semitransparent': number;
    };
    shadows: {
        'shadow-level-1': string;
        'shadow-level-2': string;
        'shadow-level-3': string;
        'shadow-level-4': string;
    };
    spacingStack: {
        'spacing-stack-quarck': string;
        'spacing-stack-nano': string;
        'spacing-stack-xxxs': string;
        'spacing-stack-xxs': string;
        'spacing-stack-xs': string;
        'spacing-stack-sm': string;
        'spacing-stack-md': string;
        'spacing-stack-lg': string;
        'spacing-stack-xl': string;
        'spacing-stack-xxl': string;
        'spacing-stack-xxxl': string;
        'spacing-stack-huge': string;
        'spacing-stack-giant': string;
    };
    spacingMP: {
        'spacing-inset-quarck': string;
        'spacing-inset-nano': string;
        'spacing-inset-xs': string;
        'spacing-inset-sm': string;
        'spacing-inset-md': string;
        'spacing-inset-lg': string;
        'spacing-squish-quarck': string;
        'spacing-squish-nano': string;
        'spacing-squish-xs': string;
        'spacing-squish-sm': string;
    };
    spacingInline: {
        'spacing-inline-quarck': string;
        'spacing-inline-nano': string;
        'spacing-inline-xxxs': string;
        'spacing-inline-xxs': string;
        'spacing-inline-xs': string;
        'spacing-inline-sm': string;
        'spacing-inline-md': string;
        'spacing-inline-lg': string;
        'spacing-inline-xl': string;
    };
    fonts: {
        'font-family-highlight': string;
    };
    fontWeights: {
        'font-weight-bold': number;
        'font-weight-medium': number;
        'font-weight-regular': number;
    };
}, {
    padding: "spacingMP";
    paddingBottom: "spacingStack";
    paddingTop: "spacingStack";
    paddingLeft: "spacingInline";
    paddingRight: "spacingInline";
    margin: "spacingMP";
    marginBottom: "spacingStack";
    marginTop: "spacingStack";
    marginLeft: "spacingInline";
    marginRight: "spacingInline";
    opacity: "opacity";
    gap: "space";
    gridGap: "space";
    columnGap: "space";
    gridColumnGap: "space";
    rowGap: "space";
    gridRowGap: "space";
    inset: "space";
    insetBlock: "space";
    insetBlockEnd: "space";
    insetBlockStart: "space";
    insetInline: "space";
    insetInlineEnd: "space";
    insetInlineStart: "space";
    marginBlock: "space";
    marginBlockEnd: "space";
    marginBlockStart: "space";
    marginInline: "space";
    marginInlineEnd: "space";
    marginInlineStart: "space";
    paddingBlock: "space";
    paddingBlockEnd: "space";
    paddingBlockStart: "space";
    paddingInline: "space";
    paddingInlineEnd: "space";
    paddingInlineStart: "space";
    scrollMargin: "space";
    scrollMarginTop: "space";
    scrollMarginRight: "space";
    scrollMarginBottom: "space";
    scrollMarginLeft: "space";
    scrollMarginBlock: "space";
    scrollMarginBlockEnd: "space";
    scrollMarginBlockStart: "space";
    scrollMarginInline: "space";
    scrollMarginInlineEnd: "space";
    scrollMarginInlineStart: "space";
    scrollPadding: "space";
    scrollPaddingTop: "space";
    scrollPaddingRight: "space";
    scrollPaddingBottom: "space";
    scrollPaddingLeft: "space";
    scrollPaddingBlock: "space";
    scrollPaddingBlockEnd: "space";
    scrollPaddingBlockStart: "space";
    scrollPaddingInline: "space";
    scrollPaddingInlineEnd: "space";
    scrollPaddingInlineStart: "space";
    top: "space";
    right: "space";
    bottom: "space";
    left: "space";
    fontSize: "fontSizes";
    background: "colors";
    backgroundColor: "colors";
    backgroundImage: "colors";
    borderImage: "colors";
    border: "colors";
    borderBlock: "colors";
    borderBlockEnd: "colors";
    borderBlockStart: "colors";
    borderBottom: "colors";
    borderBottomColor: "colors";
    borderColor: "colors";
    borderInline: "colors";
    borderInlineEnd: "colors";
    borderInlineStart: "colors";
    borderLeft: "colors";
    borderLeftColor: "colors";
    borderRight: "colors";
    borderRightColor: "colors";
    borderTop: "colors";
    borderTopColor: "colors";
    caretColor: "colors";
    color: "colors";
    columnRuleColor: "colors";
    outline: "colors";
    outlineColor: "colors";
    fill: "colors";
    stroke: "colors";
    textDecorationColor: "colors";
    fontFamily: "fonts";
    fontWeight: "fontWeights";
    lineHeight: "lineHeights";
    letterSpacing: "letterSpacings";
    blockSize: "sizes";
    minBlockSize: "sizes";
    maxBlockSize: "sizes";
    inlineSize: "sizes";
    minInlineSize: "sizes";
    maxInlineSize: "sizes";
    width: "sizes";
    minWidth: "sizes";
    maxWidth: "sizes";
    height: "sizes";
    minHeight: "sizes";
    maxHeight: "sizes";
    flexBasis: "sizes";
    gridTemplateColumns: "sizes";
    gridTemplateRows: "sizes";
    borderWidth: "borderWidths";
    borderTopWidth: "borderWidths";
    borderLeftWidth: "borderWidths";
    borderRightWidth: "borderWidths";
    borderBottomWidth: "borderWidths";
    borderStyle: "borderStyles";
    borderTopStyle: "borderStyles";
    borderLeftStyle: "borderStyles";
    borderRightStyle: "borderStyles";
    borderBottomStyle: "borderStyles";
    borderRadius: "radii";
    borderTopLeftRadius: "radii";
    borderTopRightRadius: "radii";
    borderBottomRightRadius: "radii";
    borderBottomLeftRadius: "radii";
    boxShadow: "shadows";
    textShadow: "shadows";
    transition: "transitions";
    zIndex: "zIndices";
}, {}>>;
export declare type ButtonProps = React.ComponentProps<typeof StyledButton> & {
    t?: boolean;
};
export declare const Button: React.FC<ButtonProps>;
export {};
//# sourceMappingURL=Button.d.ts.map