import { mergeStyleSets } from 'office-ui-fabric-react';
import { Depths, CommunicationColors } from '@uifabric/fluent-theme';

export const getStyle = () => {
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
      backgroundColor: CommunicationColors.primary
    }
  })
}