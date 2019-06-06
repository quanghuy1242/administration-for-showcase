import { mergeStyleSets } from 'office-ui-fabric-react';

export const getStyle = () => {
  return mergeStyleSets({
    dashboardWrapper: {
      width: '100%'
    },
    leftPanel: {
      width: 300
    },
    rightPanel: {
      backgroundColor: 'red'
    }
  })
}