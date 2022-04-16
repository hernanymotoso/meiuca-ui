import { css } from 'web';


export const Button = css({  
    // Default
    border: 0,
    fontSize: '$font-size-sm',
    lineHeight: '$line-height-tight',
    borderRadius: '$border-radius-none',
    padding: '$spacing-squish-xs',

    fontFamily: '$font-family-highlight',
    fontWeight: '$font-weight-medium',
    color: '$color-neutral-05',  // Tirar duvida sobre $color-default neutral-05
    backgroundColor: '$color-brand-primary-03',

    // Hover
    '&:hover': {
        backgroundColor: '$color-brand-primary-02'
    }


    

   
});