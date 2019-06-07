import { mergeStyleSets } from 'office-ui-fabric-react';
import { Depths } from '@uifabric/fluent-theme';

export const getStyle = () => {
  return mergeStyleSets({
    dashboardWrapper: {
      width: '100%'
    },
    leftPanel: {
      width: 300,
      backgroundColor: 'rgba(165, 181, 192, 0.082)'
    },
    rightPanel: {
      boxShadow: Depths.depth8,
    }
  })
}