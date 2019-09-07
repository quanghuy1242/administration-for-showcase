import { mergeStyleSets } from 'office-ui-fabric-react';

export const getStyle = () => {
  return mergeStyleSets({
    accountWrapper: {
      padding: '1rem',
      width: '100%'
    },
    navInnerWrapper: {
    }
  })
}