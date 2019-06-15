import { mergeStyleSets } from 'office-ui-fabric-react';
import { Depths } from '@uifabric/fluent-theme';

export const getStyle = () => {
  return mergeStyleSets({
    projectDetailWrapper: {
      // margin: '0.5rem'
    },
    tabPivot: {
      selectors: {
        '& .ms-Pivot': {
          boxShadow: Depths.depth8,
          backgroundColor: 'rgba(165, 181, 192, 0.082)'
        },
        '& button': {
          height: 48,
        },
        '& button.is-selected': {
          selectors: {
            '::before': {
              height: 3,
              borderBottom: '3px solid rgb(0, 120, 212)',
            }
          }
        },
        '& div:nth-child(2)': {
          margin: '0.5rem'
        }
      }
    }
  })
}