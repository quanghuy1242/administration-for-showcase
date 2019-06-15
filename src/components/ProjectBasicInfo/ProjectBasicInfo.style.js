import { mergeStyleSets } from 'office-ui-fabric-react';
import { Depths, CommunicationColors } from '@uifabric/fluent-theme';

export const getStyle = () => {
  return mergeStyleSets({
    basicInfoWrapper: {
      margin: '1rem',
      padding: '0.5rem',
      boxShadow: Depths.depth8,
      position: 'relative',
      selectors: {
        '& .iconButton': {
          position: 'absolute',
          top: 0,
          right: 0,
          color: 'black',
          backgroundColor: 'rgba(0, 0, 0, 0.112)',
          transition: '0.2s',
          selectors: {
            ':hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.212)',
              color: 'black'
            },
            ':active': {
              backgroundColor: 'rgba(0, 0, 0, 0.312)',
            }
          }
        }
      }
    },
    headerText: {
      marginBottom: '0.5rem'
    },
    imagePreview: {
      backgroundColor: CommunicationColors.primary,
      width: 130,
      height: 130
    }
  })
}