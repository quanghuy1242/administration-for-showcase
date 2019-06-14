import { mergeStyleSets } from 'office-ui-fabric-react';
import { Depths } from '@uifabric/fluent-theme';

export const getStyle = () => {
  return mergeStyleSets({
    dashboardWrapper: {
      width: '100%'
    },
    leftPanel: {
      backgroundColor: 'rgba(165, 181, 192, 0.082)',
    },
    technologiesPanel: {
      width: 200,
    },
    projectsPanel: {
      width: 250,
      boxShadow: Depths.depth8,
    },
    projectDetailPanel: {
      boxShadow: Depths.depth8,
      backgroundColor: 'white'
    },
    filterWrapper: {
      boxShadow: Depths.depth8
    }
  })
}