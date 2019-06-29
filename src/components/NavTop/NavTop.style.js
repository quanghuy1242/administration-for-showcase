import { mergeStyleSets } from 'office-ui-fabric-react'
import { CommunicationColors } from '@uifabric/fluent-theme';

export const getStyle = () => {
  return mergeStyleSets({
    NavTopWrapper: {
      height: 50,
      zIndex: 99999999,
      padding: '0rem 1rem 0rem 1rem',
      backgroundColor: CommunicationColors.primary,
      position: 'relative'
    },
    iconButton: {
      marginRight: '0.5rem',
      color: 'white',
      selectors: {
        ':hover': {
          backgroundColor: 'none',
          color: 'white',
        },
        ':active': {
          backgroundColor: 'none',
          color: 'white',
        }
      }
    },
    NavTopInfo: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    },
    NavTopText: {
      fontWeight: 400,
      color: '#fff'
    },
    higherIndex: {
      zIndex: 555,
      selectors: {
        '& a': {
          zIndex: 555
        }
      }
    },
    btnLogout: {
      userSelect: 'none',
      cursor: 'pointer'
    }
  })
}