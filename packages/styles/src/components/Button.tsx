import { css } from 'web';


export const Button = css({
    variants: {
        color: {
            'btn-primary': {
                color: '$color-neutral-05', 
                backgroundColor: '$color-brand-primary-03',
                '&:hover': {
                    backgroundColor: '$color-brand-primary-02'
                }
                
            },
            'btn-secondary': {
                color: '$color-neutral-05', 
                backgroundColor: '$color-brand-primary-01',
                '&:hover': {
                    backgroundColor: '$color-brand-primary-02'
                }

            }
        }
         
    },
    defaultVariants: {

    },
    
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