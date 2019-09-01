import { mergeStyleSets } from 'office-ui-fabric-react';

export const getStyle = () => {
  return mergeStyleSets({
    projectInformationHeader: {
      padding: '0.5rem 0'
    }
  })
}