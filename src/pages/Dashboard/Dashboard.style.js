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
      boxShadow: 'rgba(0, 0, 0, 0.133) -2.5px 0px 10px 0.5px, rgba(0, 0, 0, 0.11) 0px 0.6px 1.8px 0px'
    },
    projectDetailPanel: {
      boxShadow: 'rgba(0, 0, 0, 0.133) -2.5px 0px 10px 0.5px, rgba(0, 0, 0, 0.11) 0px 0.6px 1.8px 0px'
    }
  })
}