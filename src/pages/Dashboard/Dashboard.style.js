import { mergeStyleSets } from 'office-ui-fabric-react';

export const getStyle = () => {
  return mergeStyleSets({
    dashboardWrapper: {
      width: '100%'
    },
    technologiesPanel: {
      width: 250,
      backgroundColor: 'rgba(165, 181, 192, 0.082)',
      boxShadow: 'rgba(0, 0, 0, 0.133) -5px 0px 5px -5px',
      borderTop: '1px solid rgba(0, 0, 0, 0.12)'
    },
    projectsPanel: {
      width: 270,
      borderTop: '1px solid rgba(0, 0, 0, 0.12)',
      backgroundColor: 'rgba(165, 181, 192, 0.082)',
      borderLeft: '1px solid rgba(0, 0, 0, 0.12)'
    },
    projectDetailPanel: {
      borderLeft: '1px solid rgba(0, 0, 0, 0.12)'
    }
  })
}