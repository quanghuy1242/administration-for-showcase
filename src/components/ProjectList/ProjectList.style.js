import { mergeStyleSets } from 'office-ui-fabric-react';
import { MotionAnimations } from '@uifabric/fluent-theme';

export const getStyle = () => {
  return mergeStyleSets({
    projectsListWrapper: {
      overflowY: 'auto',
      height: 'calc(100vh - 50px - 48px)',
      animation: MotionAnimations.fadeIn
    },
    actived: {
      backgroundColor: 'rgba(89, 144, 150, 0.277) !important',
      selectors: {
        "& span:nth-child(1)": {
          fontWeight: '700'
        }
      }
    },
    filterSession: {
      margin: '0.5rem 0 0.5rem 0.5rem'
    },
    iconButton: {
      selectors: {
        ':hover': {
          backgroundColor: 'none',
          color: 'black'
        },
        ':active': {
          backgroundColor: 'none'
        }
      }
    }
  })
}