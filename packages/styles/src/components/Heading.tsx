import { css } from 'web';


export const Heading = css({
    variants: {
        color: {
            'heading-sm': {
                color: '$color-neutral-01',   
            },
            'heading-secondary': {
                color: '$color-neutral-05', 
            }
        }       
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