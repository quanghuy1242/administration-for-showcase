import { mergeStyleSets } from 'office-ui-fabric-react';

export const getStyle = () => {
  return mergeStyleSets({
    dashboardWrapper: {
      width: '100%'
    },
    leftPanel: {
      width: 300,
      backgroundColor: 'rgba(139, 159, 172, 0.082)',
    },
    rightPanel: {
    }
  })
}