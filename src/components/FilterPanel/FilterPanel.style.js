import { mergeStyleSets } from 'office-ui-fabric-react';

export const getStyle = () => {
  return mergeStyleSets({
    filterSession: {
      margin: '0.5rem 0 0.5rem 0.5rem'
    },
    newButton: {
      margin: '0 0.5rem'
    },
    comboxFilter: {
      width: 90,
      marginRight: '0.5rem'
    }
  })
}