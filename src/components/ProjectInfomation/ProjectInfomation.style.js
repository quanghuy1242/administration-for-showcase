import { mergeStyleSets } from 'office-ui-fabric-react';
import { Depths, CommunicationColors } from '@uifabric/fluent-theme';

export const getStyle = ({ image }) => {
  return mergeStyleSets({
    wrapper: {
      boxShadow: Depths.depth8,
      margin: '1rem',
      padding: '0.5rem',
      height: 'calc(100vh - 98px - 32px)',
      overflowY: 'auto'
    },
    leftWrapper: {
      marginRight: '10rem',
      width: "100%"
    },
    rightWrapper: {
      marginRight: '5rem'
    },
    imgPreview: {
      width: 150,
      height: 150,
      backgroundColor: CommunicationColors.primary,
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      position: 'relative',
      boxShadow: Depths.depth8
    },
    editImage: {
      position: 'absolute',
      top: 0,
      right: 0,
      color: 'white',
      backgroundColor: 'rgba(0, 0, 0, 0.112)',
      transition: '0.2s',
      selectors: {
        ':hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.212)',
          color: 'white'
        },
        ':active': {
          backgroundColor: 'rgba(0, 0, 0, 0.312)',
          color: 'white'
        }
      }
    }
  })
}