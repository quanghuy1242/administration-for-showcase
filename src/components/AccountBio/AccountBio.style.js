import { mergeStyleSets } from 'office-ui-fabric-react';

export const getStyle = () => {
  return mergeStyleSets({
    wrapper: {
      width: '100%'
    }
  })
}