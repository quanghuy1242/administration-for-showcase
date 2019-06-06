import { mergeStyleSets } from 'office-ui-fabric-react';

export const getStyle = () => {
  return mergeStyleSets({
    actived: {
      backgroundColor: 'yellow'
    }
  })
}