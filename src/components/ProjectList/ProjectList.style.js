import { mergeStyleSets } from 'office-ui-fabric-react';

export const getStyle = () => {
  return mergeStyleSets({
    projectsListWrapper: {
      overflowY: 'auto',
      height: 'calc(100vh - 55px - 48px)'
    },
    actived: {
      backgroundColor: 'rgba(89, 144, 180, 0.377) !important',
      selectors: {
        "& span:nth-child(1)": {
          fontWeight: '800'
        }
      }
    },
    filterSession: {
      margin: '0.5rem 0 0.5rem 0.5rem'
    }
  })
}