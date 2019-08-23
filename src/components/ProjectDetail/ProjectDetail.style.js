import { mergeStyleSets } from 'office-ui-fabric-react';
import { Depths, MotionAnimations } from '@uifabric/fluent-theme';

export const getStyle = () => {
  return mergeStyleSets({
    projectDetailWrapper: {
      // margin: '0.5rem'
      height: '100%'
    },
    projectDetailInner: {
      position: 'relative'
    },
    tabPivot: {
      height: '100%',
      width: 'calc(100vw - 468px)',
      animation: MotionAnimations.fadeIn,
      selectors: {
        '& .ms-Pivot': {
          boxShadow: Depths.depth8,
          backgroundColor: 'rgba(165, 181, 192, 0.082)',
          zIndex: 55
        },
        '& button.ms-Pivot-link': {
          height: 48,
        },
        '& button.ms-Pivot-link.is-selected': {
          selectors: {
            '::before': {
              height: 3
            }
          }
        }
      }
    },
    buttonSave: {
      position: 'absolute',
      top: 8,
      right: 8,
      zIndex: 555,
      backgroundColor: '#da3b01',
      selectors: {
        ':hover': {
          backgroundColor: '#d13438',
        },
        ':active': {
          backgroundColor: '#a4262c',
        }
      }
    }
  })
}