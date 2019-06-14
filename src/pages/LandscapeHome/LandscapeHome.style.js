import { mergeStyleSets } from 'office-ui-fabric-react';

export const getStyle = () => {
  return mergeStyleSets({
    homeWrapper: {
      width: '100%',
      height: 'calc(100vh - 55px)',
      padding: '2rem'
    },
    leftPanel: {
      width: 'calc(100vw - 800px)'
    },
    leftPanelInner: {
      height: '100%'
    },
    rightPanelInner: {
      height: '100%',
      margin: '1rem'
    },
    button: {
      marginTop: '1.5rem !important'
    }
  })
}