import { mergeStyleSets } from 'office-ui-fabric-react';

export const getStyle = () => {
  return mergeStyleSets({
    projectDetailWrapper: {
      margin: '0.5rem'
    },
    header: {

    },
    headerAction: {
      // marginTop: 29
    }
  })
}