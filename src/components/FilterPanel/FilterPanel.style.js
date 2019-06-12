import { mergeStyleSets } from 'office-ui-fabric-react';

export const getStyle = () => {
  return mergeStyleSets({
    filterSession: {
      margin: '0.5rem 0 0.5rem 0.5rem'
    },
    iconButton: {
      selectors: {
        ':hover': {
          backgroundColor: 'none',
          color: 'black'
        },
        ':active': {
          backgroundColor: 'none'
        }
      }
    }
  })
}