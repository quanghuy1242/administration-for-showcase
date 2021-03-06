import { mergeStyleSets } from 'office-ui-fabric-react';
import { Depths } from '@uifabric/fluent-theme';

export const getStyle = () => {
  return mergeStyleSets({
    loginWrapper: {
      width: 400,
      height: 330,
      padding: '2rem',
      boxShadow: Depths.depth8
    },
    loginWrapperOuter: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      backgroundColor: 'white',
      zIndex: 12345,
      display: "flex",
      justifyContent: 'center',
      alignItems: 'center'
    },
    loginAction: {
      paddingTop: '1rem'
    },
    dialog: {
      zIndex: 12346,
    }
  })
}