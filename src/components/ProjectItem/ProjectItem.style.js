import { mergeStyleSets } from 'office-ui-fabric-react';

export const getStyle = () => {
  return mergeStyleSets({
    projectItem: {
      height: 70,
      padding: '0.7rem',
      cursor: 'pointer',
      color: '#494949',
      transition: '0.2s',
      selectors: {
        ':hover': {
          backgroundColor: 'rgba(141, 141, 141, 0.100)',
          transition: '0.2s'
        },
        ':active': {
          backgroundColor: 'rgba(89, 144, 150, 0.477) !important',
        }
      }
    },
    projectItem_Header: {
      fontWeight: '500',
      color: '#285568'
    },
    projectItem_Subheader: {
      fontSize: '15',
      opacity: 0.7
    },
    hoverCard: {
      width: 270,
    }
  })
}