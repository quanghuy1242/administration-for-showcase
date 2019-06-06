import { mergeStyleSets } from 'office-ui-fabric-react';

export const getStyle = () => {
  return mergeStyleSets({
    projectItem: {
      height: 70,
      padding: '0.7rem',
      cursor: 'pointer',
      color: '#494949',
      selectors: {
        ':hover': {
          backgroundColor: 'rgba(141, 141, 141, 0.204)'
        }
      }
    },
    projectItem_Header: {
      fontWeight: '400'
    }
  })
}