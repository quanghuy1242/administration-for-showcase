import { mergeStyleSets } from 'office-ui-fabric-react';
import { Depths } from '@uifabric/fluent-theme';

export const getStyle = () => {
  return mergeStyleSets({
    projectDetailWrapper: {
      // margin: '0.5rem'
      height: '100%'
    },
    tabPivot: {
      height: '100%',
      width: 'calc(100vw - 468px)',
      selectors: {
        '& .ms-Pivot': {
          boxShadow: Depths.depth8,
          backgroundColor: 'rgba(165, 181, 192, 0.082)',
        },
        '& button.ms-Pivot-link': {
          height: 48,
        },
        '& button.ms-Pivot-link.is-selected': {
          selectors: {
            '::before': {
              height: 3,
              borderBottom: '3px solid rgb(0, 120, 212)',
            }
          }
        }
      }
    }
  })
}