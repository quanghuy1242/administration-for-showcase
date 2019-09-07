import { mergeStyleSets } from 'office-ui-fabric-react';

export const getStyle = () => {
  return mergeStyleSets({
    wrapper: {
      width: '100%',
      overflowY: 'scroll',
      height: 'calc(100vh - 50px - 2rem)',
    },
    mainInput: {
      // overflowY: 'scroll',
      // height: 'calc(100vh - 130px)',
      // paddingRight: '0.5rem'
    }
  })
}