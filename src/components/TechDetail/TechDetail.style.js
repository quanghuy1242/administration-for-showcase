import { mergeStyleSets } from 'office-ui-fabric-react';
import { Depths, CommunicationColors } from '@uifabric/fluent-theme';

export const getStyle = () => {
  return mergeStyleSets({
    imagePreview: {
      boxShadow: Depths.depth8,
      backgroundColor: CommunicationColors.primary,
      minHeight: 200
    }
  })
}