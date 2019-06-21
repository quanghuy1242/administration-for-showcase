import { mergeStyleSets } from 'office-ui-fabric-react';
import { Depths } from '@uifabric/fluent-theme';

export const getStyle = () => {
  return mergeStyleSets({
    toolbar: {
      backgroundColor: 'rgba(165, 181, 192, 0.082)',
      boxShadow: Depths.depth4,
      zIndex: 555,
      selectors: {
        '& .ms-Button-icon': {
          color: '#444444'
        }
      }
    },
    tableWrapper: {
      margin: '0.3rem 0.3rem 0rem 0.3rem',
      paddingBottom: '0.5rem',
      borderBottom: '1px solid rgb(243, 242, 241)'
    },
    headerTable: {
      margin: '0.3rem auto 0rem auto'
    },
    tableItem: {
      width: 10, 
      height: 10, 
      padding: 1, 
      border: '1px solid #444444'
    }
  })
}