import { mergeStyleSets } from 'office-ui-fabric-react';

export const getStyle = () => {
  return mergeStyleSets({
    dashboardWrapper: {
      width: '100%'
    },
    leftPanel: {
      backgroundColor: 'rgba(165, 181, 192, 0.082)',
    },
    technologiesPanel: {
      width: 250,
      boxShadow: 'rgba(0, 0, 0, 0.133) -5px 0px 5px -5px',
      borderTop: '1px solid rgba(0, 0, 0, 0.12)'
    },
    projectsPanel: {
      width: 270,
      borderTop: '1px solid rgba(0, 0, 0, 0.12)',
      borderLeft: '1px solid rgba(0, 0, 0, 0.12)'
    },
    projectDetailPanel: {
      borderLeft: '1px solid rgba(0, 0, 0, 0.12)'
    }
  })
}