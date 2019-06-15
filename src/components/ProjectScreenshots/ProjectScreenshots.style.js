import { mergeStyleSets } from 'office-ui-fabric-react';
import { Depths } from '@uifabric/fluent-theme';

export const getStyle = () => {
  return mergeStyleSets({
    projectScreenshotsWrapper: {
      margin: '1rem',
      padding: '0.5rem',
      boxShadow: Depths.depth8,
      height: 'calc(100vh - 314px - 3rem)',
      overflowX: 'auto'
    },
    headerText: {
      marginBottom: '0.5rem'
    },
    screenshotItem: {
      height: '100%'
    }
  })
}