import { BaseColors } from 'colors';
import { createStitches, defaultThemeMap } from '@stitches/react';

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } = createStitches({
    
    //////////////// set default params
    themeMap: {
        ...defaultThemeMap,
        padding: 'spacingMP',
        paddingBottom: 'spacingStack',
        paddingTop: 'spacingStack',
        paddingLeft: 'spacingInline',
        paddingRight: 'spacingInline',
        margin: 'spacingMP',
        marginBottom: 'spacingStack',
        marginTop: 'spacingStack',
        marginLeft: 'spacingInline',
        marginRight: 'spacingInline',
        opacity: 'opacity',

    },
    theme: {

        ///////////////   Colors
        colors: BaseColors,

        //////////////  Line height
        lineHeights: {
            'line-height-tight': '100%',
            'line-height-medium': '110%',
            'line-height-distant': '150%',
            'line-height-superdistant': '200%',
        },

        ///////////// Font size
        fontSizes: {
            'font-size-xxxs': '12px',
            'font-size-xxs': '14px',
            'font-size-xs': '16px',
            'font-size-sm': '20px',
            'font-size-md': '24px',
            'font-size-lg': '32px',
            'font-size-xl': '40px',
            'font-size-xxl': '48px',
            'font-size-xxxl': '64px',
            'font-size-display': '80px',
            'font-size-giant': '96px',
        },

        ////////////  Border radius
        radii: {
            'border-radius-none': '0px',
            'border-radius-sm': '8px',
            'border-radius-md': '16px',
            'border-radius-lg': '24px',
            'border-radius-pill': '500px',   // no figma esta >= 500px tirar duvida depois 
            'border-radius-circular': '50%',   
        },

        ///////////  Border width
        borderWidths: {
            'border-with-none': '0px',
            'border-with-hairline': '1px',
            'border-with-thin': '2px',
            'border-with-thick': '4px',
            'border-with-heavy': '8px',
        },

        /////////// Opacity
        opacity: {
            'opacity-level-semiopaque': 0.80,
            'opacity-level-intense': 0.64,
            'opacity-level-medium': 0.32,
            'opacity-level-light': 0.16,
            'opacity-level-semitransparent': 0.08,
        },

        /////////////  Shadows
        shadows: {
          'shadow-level-1': '0px 4px 8px',              
          'shadow-level-2': '0px 8px 24px',              
          'shadow-level-3': '0px 16px 32px',              
          'shadow-level-4': '0px 16px 48px',              
        },

        /////////////  Stacing stack
        spacingStack: {
            'spacing-stack-quarck': '4px',
            'spacing-stack-nano': '8px',
            'spacing-stack-xxxs': '16px',
            'spacing-stack-xxs': '24px',
            'spacing-stack-xs': '32px',
            'spacing-stack-sm': '40px',
            'spacing-stack-md': '48px',
            'spacing-stack-lg': '56px',
            'spacing-stack-xl': '64px',
            'spacing-stack-xxl': '80px',
            'spacing-stack-xxxl': '120px',
            'spacing-stack-huge': '160px',
            'spacing-stack-giant': '200px',
        },

        /////////////    Spacing Inset and Spacing Squish
        spacingMP: {
            'spacing-inset-quarck': '4px', // Spacing Inset
            'spacing-inset-nano': '8px',
            'spacing-inset-xs': '16px',
            'spacing-inset-sm': '24px',
            'spacing-inset-md': '32px',
            'spacing-inset-lg': '40px',
            'spacing-squish-quarck': '4px 8px', // Spacing Squish
            'spacing-squish-nano': '8px 16px',
            'spacing-squish-xs': '16px 24px',
            'spacing-squish-sm': '16px 32px',
        },
        
        /////////////   Space inline
        spacingInline: {
            'spacing-inline-quarck': '4px',
            'spacing-inline-nano': '8px',
            'spacing-inline-xxxs': '16px',
            'spacing-inline-xxs': '24px',
            'spacing-inline-xs': '32px',
            'spacing-inline-sm': '40px',
            'spacing-inline-md': '48px',
            'spacing-inline-lg': '64px',
            'spacing-inline-xl': '80px',
        },
        
        ///////////  Fonts 
        fonts: {                                
            'font-family-highlight': 'Archivo',   
        },

        //////////   Font Weight
        fontWeights: {
          'font-weight-bold': 700,
          'font-weight-medium': 600,
          'font-weight-regular': 400,
        }
    }

});