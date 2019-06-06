import { mergeStyleSets } from 'office-ui-fabric-react';

export const getStyle = () => {
  return mergeStyleSets({
    projectItem: {
      height: 80,
      padding: '0.7rem',
      cursor: 'pointer'
    }
  })
}