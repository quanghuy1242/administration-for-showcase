import { mergeStyleSets } from 'office-ui-fabric-react';

export const getStyle = () => {
  return mergeStyleSets({
    dashboardWrapper: {
      width: '100%'
    },
    technologiesPanel: {
      width: 270
    },
    projectsPanel: {
      width: 270,
      backgroundColor: 'rgba(165, 181, 192, 0.082)',
      borderLeft: '1px solid rgba(0, 0, 0, 0.082)'
    },
    projectDetailPanel: {
      borderLeft: '1px solid rgba(0, 0, 0, 0.082)'
    }
  })
}